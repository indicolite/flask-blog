#!/usr/bin/env python
# coding=utf-8

from flask_bcrypt import Bcrypt
from flask_oauth import OAuth
from flask_openid import OpenID as openid

# Create the Flask-Bcrypt's instance
bcrypt = Bcrypt()
oauth = OAuth()

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

