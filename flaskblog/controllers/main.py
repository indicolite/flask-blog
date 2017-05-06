#!/usr/bin/env python
# coding=utf-8

from os import path
from uuid import uuid4

from flask import flash, url_for, redirect, render_template, Blueprint, request
from flaskblog.forms import LoginForm, RegisterForm, OpenIDForm
from flaskblog.models import db, User, Role, Tag
from flaskblog.extensions import openid, facebook
from flask_login import login_user, logout_user
from flask.ext.principal import Identity, AnonymousIdentity
from flask.ext.principal import identity_changed, current_app


main_blueprint = Blueprint(
        'main',
        __name__,
        template_folder=path.join(path.pardir, 'templates', 'main'))

@main_blueprint.route('/')
def index():
    return redirect(url_for('blog.home'))

@main_blueprint.route('/login', methods=['GET', 'POST'])
@openid.loginhandler
def login():
    """View function for login.

    Flask-OpenID will receive the Authentication-information
    from relay party.
    """

    # Will check the account right or not.
    form = LoginForm()
    openid_form = OpenIDForm()

    if openid_form.validate_on_submit():
        return openid.try_login(
                openid_form.openid_url.data,
                ask_for=['nickname', 'email'],
                ask_for_optional=['fullname'])

    openid_errors = openid.fetch_error()
    if openid_errors:
        flash(openid_errors, category="danger")

    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).one()
        # Using the Flask-Login to processing and check the login status for user
        # Remember the user's login status.
        login_user(user, remember=form.remember.data)

        identity_changed.send(
                current_app._get_current_object(),
                identity=Identity(user.id))
        flash("You have been logged in.", category="success")
        return redirect(url_for('blog.home'))

    return render_template('login.html',
            form=form,
            openid_form=openid_form)

@main_blueprint.route('/logout', methods=['GET', 'POST'])
def logout():
    """View function for logout."""

    logout_user()
    identity_changed.send(
            current_app._get_current_object(),
            identity=AnonymousIdentity())

    flash("You have been logged out.", category="success")
    #return redirect(url_for('blog.home'))
    return redirect(url_for('main.login'))

@main_blueprint.route('/register', methods=['GET', 'POST'])
def register():
    """View function for Register."""

    # Will check the username exist or not.
    form = RegisterForm()
    if form.validate_on_submit():
        new_user = User(id=str(uuid4()),
                username=form.username.data,
                password=form.password.data)
                #confirm=form.password.data)
        db.session.add(new_user)
        db.session.commit()

        flash("Your user has been created, please login.", category="success")

        return redirect(url_for('main.login'))
    return render_template('register.html', form=form)

@main_blueprint.route('/facebook')
def facebook_login():
    return facebook.authorize(
            callback=url_for('main.facebook_authorized',
                next=request.referrer or None,
                _external=True))

@main_blueprint.route('/facebook/authorized')
@facebook.authorized_handler
def facebook_authorized(resp):
    if resp is None:
        return 'Access denied: reason=%s error=%s' % (
                request.args['error_reason'],
                request.args['error_description'])
    session['facebook_oauth_token'] = (resp['access_token'], '')

    me = facebook.get('/me')

    if me.data.get('first_name', False):
        facebook_username = me.data['first_name'] + " " + me.data['last_name']
    else:
        facebook_username = me.data['name']

    user = User.query.filter_by(username=facebook_username).first()
    if user is None:
        user = User(id=str(uuid4()), username=facebook_username, password='password')
        db.session.add(user)
        db.session.commit()

    flash('You have been logged in.', category='success')

    return redirect(url_for('blog.home'))

