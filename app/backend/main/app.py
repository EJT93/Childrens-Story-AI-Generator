from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import openai
import os
import json

# Path to the static files
FRONTEND_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../../frontend/build')

app = Flask(__name__, static_folder='frontend/build')
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
app.config['DEBUG'] = True  # This will enable debug mode and provide more detailed error messages

# Load data from the prompt.json file at startup
with open('prompt.json') as f:
    data = json.load(f)

openai.api_key = os.getenv('OPENAI_KEY')
if openai.api_key is None:
    raise ValueError("The OPENAI_KEY environment variable is not set.")

@app.route('/generate', methods=['POST'])
def generate_story():
    print(request.json)  # This will print the incoming JSON data to the console
    genre = request.json.get('genre')  # Use get method to provide a default value of None if 'genre' is not in the request

    if not genre:
        return jsonify(error="Genre is missing"), 400  # Return a 400 Bad Request if genre is not provided

    # Change the genre to the one from the POST request
    data['inputs']['genre'] = genre

    prompt_lines = data['prompt']

    # Add genre and main character to the prompt
    prompt_lines.append(f"The story genre is: {genre}.")
    prompt_lines.append(f"The main character is: {data['inputs']['mainCharacter']['name']}.")

    # Add favorite activities
    fav_activities = ", ".join(data['inputs']['mainCharacter'].get('favoriteActivities', []))
    prompt_lines.append(f"The main character's favorite activities are: {fav_activities}.")

    # Add show characters
    show_chars = ", ".join(data['inputs'].get('showCharacters', []))
    prompt_lines.append(f"Some possible characters to include are: {show_chars}.")

    # Add family members
    family_members = data['inputs'].get('familyMembers', {})
    prompt_lines.append(f"The main character's dad is {family_members.get('dad', 'Unknown')}.")
    prompt_lines.append(f"The main character's mom is {family_members.get('mom', 'Unknown')}.")
    prompt_lines.append(f"The main character's dog is {family_members.get('dog', 'Unknown')}.")

    # Add uncles
    for uncle in family_members.get('uncles', []):
        prompt_lines.append(f"The main character has an uncle named {uncle['name']} who lives in {uncle['location']}.")

    prompt_lines.append(f"The main character's cousin is {family_members.get('cousin', 'Unknown')}.")
    prompt_lines.append(f"The main character's grandmother is {family_members.get('grandmother', 'Unknown')}.")

    # Combine all prompt lines into a single string
    prompt = "\n".join(prompt_lines)

    # Call the API and return the generated story
    story = call_chatgpt_api(prompt)

    if story is None:
        return jsonify(error="OpenAI response did not contain a story"), 500

    return {'story': story}


def call_chatgpt_api(prompt):
    response = openai.Completion.create(
      model="text-davinci-003",
      prompt=prompt,
      max_tokens=500
    )

    if not response.choices:
        return None

    return response.choices[0].text.strip()

# Serve static files
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)