class CommunicationService:
    def __init__(self):
        # You can initialize anything here if needed (e.g., database connection)
        pass

    def process_message(self, message):
        # Add any logic to process the message
        # For example, logging, storing in a database, or responding based on the content
        print(f"Processing message: {message}")
        
        # Example response
        response = {
            'processed_message': f'Your message was: {message}',
            'length': len(message)
        }
        
        return response['processed_message']
