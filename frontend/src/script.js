var storyText = '';

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
        storyText = data.story;
        document.getElementById("story").innerText = storyText;
        document.getElementById("downloadButton").style.display = 'block';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function downloadStory() {
    var a = document.createElement('a');
    a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(storyText);
    a.download = 'story.txt';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}