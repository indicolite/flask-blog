#!/usr/bin/env python
# coding=utf-8

from os import path
from uuid import uuid4

from flask import flash, url_for, redirect, render_template, Blueprint, request
from flaskblog.forms import LoginForm, RegisterForm
from flaskblog.models import db, User
from flaskblog.extensions import openid, facebook


main_blueprint = Blueprint(
        'main',
        __name__,
        template_folder=path.join(path.pardir, 'templates', 'main'))

@main_blueprint.route('/')
def index():
    return redirect(url_for('blog.home'))

@main_blueprint.route('/login', methods=['GET', 'POST'])
def login():
    """View function for login."""

    # Will check the account right or not.
    form = LoginForm()

    if form.validate_on_submit():
        flash("You have been logged in.", category="success")
        return redirect(url_for('blog.home'))

    return render_template('login.html',
            form=form)

@main_blueprint.route('/logout', methods=['GET', 'POST'])
def logout():
    """View function for logout."""

    flash("You have been logged out.", category="success")
    return redirect(url_for('blog.home'))

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

