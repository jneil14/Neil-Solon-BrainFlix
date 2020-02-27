const express = require('express');
const videoFile = __dirname + '/../models/videoList.json';
const videos = require(videoFile);
const helper = require('../../helper/helper');
const router = express.Router();


router.get('/', (req, res) => {
    const videoList = videos.map(video => {
        return {
          id: video.id,
          title: video.title,
          channel: video.channel,
          imageUrl: video.imageUrl,
          description: video.description,
          views: video.views,
          likes: video.likes,
          duration: video.duration,
          video: video.video,
          timestamp: video.timestamp,
          comments: video.comments
        };
    });
    res.send(videoList);
})



// Getting video by id
router.get('/:id', (req, res) => {
    const match = videos.some(book => video.id === req.params.id);
    if(match) {
        res.json(books.filter(video => video.id === req.params.id));
    }
    else {
        res.status(400)
        .json({ errorMessage: `Video with ID: ${req.params.id} not found`});
    }
});



// Posting a new video
