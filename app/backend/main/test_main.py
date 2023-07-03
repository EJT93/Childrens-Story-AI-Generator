import unittest
from main import app
import json

class TestMain(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()

    def test_generate_story(self):
        # Define a sample genre input
        genre = "fantasy"
        headers = {
            'Content-Type': 'application/json'
        }
        data = {
            'genre': genre
        }

        # Call the function with the sample input
        response = self.app.post('/generate', headers=headers, data=json.dumps(data))

        # Check that the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)

        # Load the response data
        data = json.loads(response.data)

        # Check that the 'story' key is in the response data
        self.assertIn('story', data)

        # Check that the 'story' value is a string (which should be the story text)
        self.assertIsInstance(data['story'], str)

        # You could also check for specific content in the story, like this:
        # self.assertIn("dragon", data['story'])

## if __name__ == '__main__':
##    unittest.main() 