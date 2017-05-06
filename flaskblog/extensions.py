#!/usr/bin/env python
# coding=utf-8

from flask_bcrypt import Bcrypt
from flask_oauth import OAuth
from flask_openid import OpenID
from flask_login import LoginManager


# Create the Flask-Bcrypt's instance
bcrypt = Bcrypt()
oauth = OAuth()
openid = OpenID()

# Create the auth object for Facebook
facebook = oauth.remote_app(
        'facebook',
        base_url='https://graph.facebook.com/',
        request_token_url=None,
        access_token_url='/oauth/access_token',
        authorize_url='https://www.facebook.com/dialog/oauth',
        consumer_key='230064817479034',
        consumer_secret='040715eb76405c55638e31d750d7ccff',
        request_token_params={'scope': 'email'})

@facebook.tokengetter
def get_facebook_token():
    return session.get('facebook_oauth_token')


# Create the Flask-Login's instance
login_manager = LoginManager()
# Setup the configuration for login manager.
#    1. Set the login page
#    2. Set the more stronger auth-protection
#    3. Show the information when you are logging.
#    4. Set the Login Messages type as `information`.
login_manager.login_view = "main.login"
login_manager.session_protection = "strong"
login_manager.login_message = "Please login to access this page."
login_manager.login_message_category = "info"

@login_manager.user_loader
def load_user(user_id):
    """Load the user's info."""
    from models import User
    return User.query.filter_by(id=user_id).first()
