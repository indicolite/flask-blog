#!/usr/bin/env python
# coding=utf-8

from flask_wtf import Form
from wtforms import StringField, TextField
from wtforms.validators import DataRequired, Length

class CommentForm(Form):
    """Form validator for comment."""

    # Set some field(InputBox) for enter the data.
    # patam validatos: setup list of validators
    name = StringField(
            'Name',
            validators=[DataRequired(), Length(max=255)])

    text = TextField(u'Comment', validators=[DataRequired()])
