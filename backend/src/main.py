from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os

app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate_story():
    genre = request.json['genre']

    with open('prompt.json') as f:
        data = json.load(f)

    data['inputs']['genre'] = genre
    prompt = json.dumps(data)  # Convert the dictionary back into a JSON string

    story = call_chatgpt_api(prompt)

    return {'story': story}


def call_chatgpt_api(prompt):
    openai.api_key = os.getenv('OPENAI_KEY')

    response = openai.Completion.create(
      engine="text-davinci-002",
      prompt=prompt,
      max_tokens=500
    )

    return response.choices[0].text.strip()

    return response.choices[0].text.strip()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)