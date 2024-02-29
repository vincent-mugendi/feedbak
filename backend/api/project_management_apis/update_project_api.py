from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/api/project_management_apis/update_project/<int:project_id>', methods=['PUT'])
def update_project(project_id):
    data = request.json
    # Update the project details in the database based on the project_id
    return jsonify({'message': 'Project updated successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)
