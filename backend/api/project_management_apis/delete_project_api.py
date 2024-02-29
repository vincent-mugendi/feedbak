from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/api/project_management_apis/delete_project/<int:project_id>', methods=['DELETE'])
def delete_project(project_id):
    # Delete the project from the database based on the project_id
    return jsonify({'message': 'Project deleted successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)