from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
from utils.logger_setup import setup_logger
from services.communication_service import CommunicationService
from services.message_service import MessageService

app = Flask(__name__, static_folder='dist/language-tutor-frontend')
logger = setup_logger('app')
CORS(app)

# Initialize the service
communication_service = CommunicationService()
message_service =MessageService()

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
    logger.info(f"Received message: {message}")

    processed_message = message_service.process_message(message)
    logger.info(f"Processed message: {processed_message['chatgpt_response']}")

    res = {
        'status': 'successful',
        "received_message": f"{message}",
        "processed_message": f"{processed_message['chatgpt_response']}",
        }

    return jsonify(res)

if __name__ == '__main__':
    app.run(debug=True)
