from flask.ext.sqlalchemy import SQLAlchemy
from main import app

# Init the sqlalchemy object
# Will load the SQLALCHEMY_DATABASE_URL from config.py
db = SQLAlchemy(app)

class User(db.Model):

    __tablename__ = 'users'
    id = db.Column(db.String(45), primary_key=True)
    username = db.Column(db.String(255))
    password = db.Column(db.String(255))

    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

    def __repr__(self):
        return "<Model User `{}`>".format(self.username)
