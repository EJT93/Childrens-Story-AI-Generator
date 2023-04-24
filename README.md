# StoryGenerator - Children's Stories with Evan

This repository contains a simple static website for generating children's stories using AWS S3, Lambda, and the ChatGPT API. The website presents stories in different genres featuring a little kid named Evan.

## Project Structure

- `index.html`: The main HTML file for the frontend.
- `styles.css`: CSS file for styling the frontend.
- `main.js`: JavaScript file for handling frontend interactivity.
- `story_elements.txt`: A text file containing story elements that can be included in the generated stories.
- `lambda_function.py`: The AWS Lambda function for generating stories using the ChatGPT API.
- `template.yaml`: The AWS CloudFormation stack template for deploying the necessary resources.

## Deployment

1. Fork or clone this repository.

2. Ensure you have an AWS account with the necessary permissions to create and manage the required resources.

3. Update the `story_elements.txt` file with your desired story elements.

4. Replace the placeholders in `main.js` and `lambda_function.py` with your actual ChatGPT API key and API Gateway endpoint.

5. Deploy the frontend files (`index.html`, `styles.css`, `main.js`) and the `story_elements.txt` file to your S3 bucket.

6. Deploy the AWS Lambda function using the provided CloudFormation stack template `template.yaml`. You can do this through the AWS Management Console or by using the AWS CLI.

7. Test your website by accessing the S3 static website URL.

## Usage

1. Open the website in your browser.

2. Select a story genre from the dropdown menu.

3. Click the "Generate Story" button to create a new story.

4. The generated story will appear in the story section, and you can click the "Download Story" button to save the story as a text file.

## License

This project is open-source and available under the [MIT License](LICENSE).
