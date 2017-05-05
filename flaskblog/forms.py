#!/usr/bin/env python
# coding=utf-8

from flask_wtf import Form, RecaptchaField, recaptcha
from wtforms import (
        StringField,
        TextField,
        TextAreaField,
        PasswordField,
        BooleanField,
        ValidationError
        )
from wtforms.validators import DataRequired, Length, EqualTo, URL
from models import User


class RegisterForm(Form):
    """Register Form."""

    username = StringField('Username', [DataRequired(), Length(max=255)])
    password = PasswordField('Password', [DataRequired(), Length(min=8)])
    confirm = PasswordField('Confirm Password', [DataRequired(), EqualTo('password')])
    #recaptcha = RecaptchaField()

    def validate(self):
        check_validate = super(RegisterForm, self).validate()

        if not check_validate:
            return False
        user = User.query.filter_by(username=self.username.data).first()
        if user:
            self.username.errors.append('User with that name already exists.')
            return False
        return True

class LoginForm(Form):
    """Login Form"""

    username = StringField('Username', [DataRequired(), Length(max=255)])
    password = PasswordField('Password', [DataRequired()])

    def validate(self):
        """Validator for check the account information."""
        check_validata = super(LoginForm, self).validate()

        if not check_validata:
            return False

        user = User.query.filter_by(username=self.username.data).first()
        if not user:
            self.username.errors.append('Invalid username or password.')
            return False

        if not user.check_password(self.password.data):
            self.username.error.append('Invalid username or password.')
            return False


class CommentForm(Form):
    """Form validator for comment."""

    # Set some field(InputBox) for enter the data.
    # patam validatos: setup list of validators
    name = StringField(
            'Name',
            validators=[DataRequired(), Length(max=255)])

    text = TextField(u'Comment', validators=[DataRequired()])


class PostForm(Form):
    """Post Form."""

    title = StringField('Title', [DataRequired(), Length(max=255)])
    text = TextAreaField('Blog Content', [DataRequired()])
