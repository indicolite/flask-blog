class Config(object):
    """Base config class."""
    SECRET_KEY = '8A80AA0E-4807-4B6A-8CF6-6CD068409E89'
    # reCAPTCHA Public key and Private key
    RECAPTCHA_PUBLIC_KEY = "6LfOFSAUAAAAACAAG5CsjiOpBsBY8IdHHoDpA1pd"
    RECAPTCHA_PRIVATE_KEY = "6LfOFSAUAAAAAAQYM52UCpDXKe4blbLP18Xs6MK1"

class ProdConfig(Config):
    """Production config class."""
    pass

class DevConfig(Config):
    """Development config class."""
    # Open the DEBUG
    DEBUG = True
    # PostgreSQL connection
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://flask:password@192.168.4.180/flask'
