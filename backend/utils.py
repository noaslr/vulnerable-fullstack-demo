import os


def get_secret_key():
    # Vulnerable: Weak secret key generation
    return os.urandom(12).hex()
