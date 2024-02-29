from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://vinnie:qwertyupi5@localhost/feedbak_db'
db = SQLAlchemy(app)
CORS(app)  # Enable CORS for all routes

# Define the Projects model
class Projects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    deadline = db.Column(db.Date)

    def __repr__(self):
        return f'<Projects {self.id}>'

# Define the /create_project endpoint
@app.route('/create_project', methods=['POST'])
def create_project():
    data = request.json
    title = data.get('title')
    description = data.get('description')
    deadline = data.get('deadline')

    if not title:
        return jsonify({'message': 'Title is required'}), 400

    project = Projects(title=title, description=description, deadline=deadline)
    db.session.add(project)
    db.session.commit()

    return jsonify({'message': 'Project created successfully', 'project_id': project.id}), 201

if __name__ == '__main__':
    app.run(debug=True)
