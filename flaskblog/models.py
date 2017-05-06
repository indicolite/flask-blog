from flask_sqlalchemy import SQLAlchemy
#from main import app
from flask_wtf import Form
from wtforms import StringField, TextField
from wtforms.validators import DataRequired, Length
from extensions import bcrypt

# Init the sqlalchemy object
# Will load the SQLALCHEMY_DATABASE_URL from config.py
# In flaskblog/__init__.py to initialize database app
db = SQLAlchemy()

posts_tags = db.Table('posts_tags',
        db.Column('post_id', db.String(45), db.ForeignKey('posts.id')),
        db.Column('tag_id', db.String(45), db.ForeignKey('tags.id')))
users_roles = db.Table('users_roles',
        db.Column('user_id', db.String(45), db.ForeignKey('users.id')),
        db.Column('role_id', db.String(45), db.ForeignKey('roles.id')))

class User(db.Model):

    __tablename__ = 'users'
    id = db.Column(db.String(45), primary_key=True)
    username = db.Column(db.String(255))
    password = db.Column(db.String(255))
    # Establish relationship with Post's ForeignKey: user_id
    posts = db.relationship(
            'Post',
            backref='users',
            lazy='dynamic')

    roles = db.relationship(
            'Role',
            secondary=users_roles,
            backref=db.backref('users', lazy='dynamic'))

    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = self.set_password(password)

        default = Role.query.filter_by(name="default").one()
        self.roles.append(default)

    def __repr__(self):
        return "<Model User `{}`>".format(self.username)

    def set_password(self, password):
        """Convert the password to cryptograph via flask-bcrypt"""
        return bcrypt.generate_password_hash(password)

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)

    def is_authenticated(self):
        if isinstance(self, AnonymousUserMixin):
            return False
        else:
            return True

    def is_active():
        return True

    def is_anonymous(self):
        if isinstance(self, AnonymousUserMixin):
            return True
        else:
            return False

    def get_id(self):
        return unicode(self.id)


class Post(db.Model):
    """Represent Protected posts."""

    __tablename__ = 'posts'
    id = db.Column(db.String(45), primary_key=True)
    title = db.Column(db.String(255))
    text = db.Column(db.Text())
    publish_date = db.Column(db.DateTime)
    # Set the Foreign Key for Post
    user_id = db.Column(db.String(45), db.ForeignKey('users.id'))
    # Establish relationship with Comment's ForeignKey: post_id
    comments = db.relationship(
            'Comment',
            backref='posts',
            lazy='dynamic')
    # many to many: posts <==> tags
    tags = db.relationship(
            'Tag',
            secondary=posts_tags,
            backref=db.backref('posts', lazy='dynamic'))

    #def __init__(self, id, title, text, publish_date, user_id, comments):
    #    self.id = id
    #    self.title = title
    #    self.text = text
    #    self.publish_date = publish_date
    #    self.user_id = user_id
    #    self.comments = commnets
    def __init__(self, id, title):
        self.id = id
        self.title = title

    def __repr__(self):
        return "<Model Post `{}`>".format(self.title)

class Tag(db.Model):
    """Represents Protected tags."""

    __tablename__ = 'tags'
    id = db.Column(db.String(45), primary_key=True)
    name = db.Column(db.String(255))

    def __init__(self, id, name):
        self.id = id
        self.name = name

    def __repr__(self):
        return "<Model Tag `{}`>".format(self.name)

class Comment(db.Model):
    """Represent Protected comments."""

    __tablename__ = 'comments'
    id = db.Column(db.String(45), primary_key=True)
    name = db.Column(db.String(255))
    text = db.Column(db.Text())
    date = db.Column(db.DateTime())
    post_id = db.Column(db.String(45), db.ForeignKey('posts.id'))

    def __init__(self, id, name):
        self.id = id
        self.name = name

    def __repr__(self):
        return '<Model Comment `{}`>'.format(self.name)

class CommentForm(Form):
    """Form validator for comment."""

    # Set some filed(InputBox) for enter the data
    # patam validators: setup list of validators
    name = StringField(
            'Name',
            validators=[DataRequired(), Length(max=255)])
    text = TextField(u'Comment', validators=[DataRequired()])


class Role(db.Model):
    """Represents Proected roles."""

    __tablename__ = 'roles'

    id = db.Column(db.String(45), primary_key=True)
    name = db.Column(db.String(255), unique=True)
    description = db.Column(db.String(255))

    def __init__(self):
        self.id = str(uuid4())

    def __repr__(self):
        return "<Model Role `{}`>".format(self.name)
