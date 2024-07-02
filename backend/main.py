from app import app

if __name__ == "__main__":
    app.run(debug=True)  # Vulnerable: Debug mode enabled in production
