from flask import request, jsonify
from app import app, db
from app.models import User
import sqlite3


@app.route("/api/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([{"id": user.id, "username": user.username} for user in users])


@app.route("/api/users", methods=["POST"])
def create_user():
    data = request.json
    new_user = User(username=data["username"], password=data["password"])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created successfully"}), 201


@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(
        username=data["username"], password=data["password"]
    ).first()
    if user:
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401


@app.route("/api/users/<username>", methods=["GET"])
def get_user(username):
    # Vulnerable: SQL Injection
    conn = sqlite3.connect("instance/vulnerable.db")
    cursor = conn.cursor()
    query = f"SELECT * FROM user WHERE username = '{username}'"
    cursor.execute(query)
    user = cursor.fetchone()
    conn.close()

    if user:
        return jsonify({"id": user[0], "username": user[1]}), 200
    return jsonify({"message": "User not found"}), 404


@app.route("/api/echo", methods=["GET"])
def echo():
    # Vulnerable: Reflected XSS
    message = request.args.get("message", "")
    return f"<p>You said: {message}</p>"


# Vulnerable: Sensitive data exposure
API_KEY = "AIzaSyDNYs9Dys_bwSPQz8pA-VVN1qW7qVanRXI"


@app.route("/api/data", methods=["GET"])
def get_data():
    # Vulnerable: Insecure direct object reference
    file_name = request.args.get("file")
    with open(file_name, "r") as file:
        content = file.read()
    return content
