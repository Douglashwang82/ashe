from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
from services.communication_service import CommunicationService


app = Flask(__name__, static_folder='dist/language-tutor-frontend')
CORS(app)

# Initialize the service
communication_service = CommunicationService()

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/languages', methods=['GET'])
def get_languages():
    languages = [
        {'id': 1, 'name': 'English'},
        {'id': 2, 'name': 'Korean'},
        {'id': 3, 'name': 'Chinese'},
    ]
    return jsonify(languages)

@app.route('/api/communication', methods=['POST'])
def communication():
    data = request.get_json()
    message = data.get('message')
    print(f"Received message: {message}")
    processed_message = communication_service.process_message(message)
    print(f"Processed message: {processed_message}")
    res = {'status': 'successful', "message": f"received {message}: processed {processed_message}"}
    return jsonify(res)

if __name__ == '__main__':
    app.run(debug=True)
