function uploadVideo() {
    const videoFile = document.getElementById('video-file').files[0];

    if (videoFile) {
        const videoList = document.getElementById('video-list-items');
        const videoItem = document.createElement('li');
        videoItem.innerHTML = `<a href="#" onclick="playVideo('${videoFile.name}')">${videoFile.name}</a>`;
        videoList.appendChild(videoItem);

        // Reset the input field
        document.getElementById('video-file').value = null;
    }
}

function playVideo(videoFileName) {
    const videoElement = document.getElementById('video-element');
    videoElement.src = videoFileName;
    videoElement.load();
    videoElement.play();
}
