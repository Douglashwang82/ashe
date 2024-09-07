import os
import yaml
from openai import OpenAI
from utils.logger_setup import setup_logger

class MessageService:
    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY")
        self.client  = OpenAI()
        self.logger = setup_logger('message_service')

    def process_message(self, message):
        self.logger.info(f"Processing message: {message}")

        # Use ChatGPT to process the message
        chatgpt_response = self.get_chatgpt_response(message)
        
        # Example response combining the original message and ChatGPT's response
        response = {
            'user_message': message,
            'chatgpt_response': chatgpt_response
        }

        return response

    def get_chatgpt_response(self, user_message):
        # Load the prompts
        prompts = self.load_prompts()
        
        # Define the tutor
        language = 'English'
        mapped_prompts = []
        for prompt_key in prompts['tutor_prompts']:
            mapped_prompt = {"role": "system", "content": prompts['tutor_prompts'][prompt_key].format(language=language)}
            mapped_prompts.append(mapped_prompt)

        # Define the chat messages, including the user's input
        messages = [
            # Define the tutor
            *mapped_prompts,
            {"role": "user", "content": user_message}
        ]

        # OpenAI API call to ChatGPT
        try:
            completion = self.client.chat.completions.create(
                model="gpt-3.5-turbo-0125",
                messages= messages,
            )
            
            response = completion.choices[0].message.content
            return response

        except Exception as e:
            self.logger.error(f"Error communicating with ChatGPT: {e}")
            return "Sorry, there was an error processing your request."

    def load_prompts(self):
        with open("prompts.yaml", "r") as file:
            prompts = yaml.safe_load(file)
        return prompts
