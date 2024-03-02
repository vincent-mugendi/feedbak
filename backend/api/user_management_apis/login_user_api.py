from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample user data (in a real application, this would be stored securely in a database)
users = [
    {"email": "user1@example.com", "password": "password1"},
    {"email": "user2@example.com", "password": "password2"}
]

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Missing email or password"}), 400

    user = next((user for user in users if user['email'] == email), None)
    if not user or user['password'] != password:
        return jsonify({"error": "Invalid email or password"}), 401

    # Here you would typically generate a session token or JWT for the user
    # For simplicity, we'll just return a success message
    return jsonify({"message": "Login successful"}), 200

if __name__ == '__main__':
    app.run(debug=True)
