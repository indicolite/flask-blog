class Config(object):
    """Base config class."""
    pass

class ProdConfig(Config):
    """Production config class."""
    pass

class DevConfig(Config):
    """Development config class."""
    # Open the DEBUG
    DEBUG = True
    # PostgreSQL connection
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://flask:password@192.168.0.158/flask'
