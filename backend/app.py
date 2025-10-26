from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Ollama configuration - can be set via environment variable
OLLAMA_URL = os.environ.get('OLLAMA_URL', 'http://localhost:11434')
MODEL = os.environ.get('OLLAMA_MODEL', 'llama2')  # Change this to your preferred model

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'OK', 'service': 'Ollama LLM Backend'})

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        message = data.get('message', '')
        
        if not message:
            return jsonify({'error': 'No message provided'}), 400
        
        # Call Ollama API
        ollama_response = requests.post(f"{OLLAMA_URL}/api/generate", 
            json={
                "model": MODEL,
                "prompt": message,
                "stream": False
            },
            timeout=30
        )
        
        if ollama_response.status_code == 200:
            response_data = ollama_response.json()
            return jsonify({'response': response_data.get('response', 'No response')})
        else:
            return jsonify({'error': 'Ollama API error'}), 500
            
    except requests.exceptions.ConnectionError:
        return jsonify({'error': 'Cannot connect to Ollama. Make sure Ollama is running.'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)