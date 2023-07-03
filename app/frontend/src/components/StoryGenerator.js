import React, { useState } from 'react';

const StoryGenerator = () => {
    const [storyText, setStoryText] = useState('');
    const [genre, setGenre] = useState('adventure');

    const generateStory = () => {
        fetch('http://backend:5001/generate', {
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

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    return (
        <div>
            <select value={genre} onChange={handleGenreChange}>
                <option value="adventure">Adventure</option>
                <option value="fantasy">Fantasy</option>
                <option value="science fiction">Science Fiction</option>
            </select>
            <button onClick={generateStory}>Generate Story</button>
            {storyText && <button onClick={downloadStory}>Download Story</button>}
            <p>{storyText}</p>
        </div>
    );
}

export default StoryGenerator;