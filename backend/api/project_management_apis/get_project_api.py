from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/api/project_management_apis/get_project/<int:project_id>', methods=['GET'])
def get_project(project_id):
    # Retrieve the project details from the database based on the project_id
    return jsonify({'project_id': project_id, 'name': 'Project Name', 'description': 'Project Description'}), 200

if __name__ == '__main__':
    app.run(debug=True)