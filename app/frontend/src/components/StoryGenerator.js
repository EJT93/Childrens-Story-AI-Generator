import React, { useState } from 'react';

const StoryGenerator = () => {
    const [storyText, setStoryText] = useState('');

    const generateStory = () => {
        const genre = document.getElementById("genre").value;

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

    const downloadStory = () => {
        var a = document.createElement('a');
        a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(storyText);
        a.download = 'story.txt';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div>
            <button onClick={generateStory}>Generate Story</button>
            {storyText && <button onClick={downloadStory}>Download Story</button>}
            <p>{storyText}</p>
        </div>
    );
}

export default StoryGenerator;