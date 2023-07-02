import React, { useState } from 'react';

function StoryViewer() {
    const [storyText, setStoryText] = useState('');

    function generateStory() {
        var genre = document.getElementById("genre").value;

        fetch('http://localhost:5000/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                genre: genre,
            }),
        })
        .then(response => response.json())
        .then(data => {
            setStoryText(data.story);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <h2>Story Generator</h2>
            <select id="genre">
                <option value="adventure">Adventure</option>
                <option value="fantasy">Fantasy</option>
                <option value="science fiction">Science Fiction</option>
            </select>
            <button onClick={generateStory}>Generate Story</button>
            <h3>Generated Story</h3>
            <p>{storyText}</p>
        </div>
    );
}

export default StoryViewer;