const express = require('express');
const videoFile = __dirname + "/../../models/videos.json";
const videos = require(videoFile);
const helper = require('../../helper/helper');
const router = express.Router();


router.get('/', (req, res) => {
    console.log("in get videos")
    const videoList = videos.map(video => {
        return {
          id: video.id,
          title: video.title,
          channel: video.channel,
          image: video.image,
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
    const match = videos.some(video => video.id === req.params.id);
    if(match) {
        res.json(videos.filter(video => video.id === req.params.id));
    }
    else {
        res.status(400)
        .json({ errorMessage: `Video with ID: ${req.params.id} not found`});
    }
});


// Posting a new video
router.post('/', (req, res) => {
    console.log("post");
    const newVideo = {
        id: helper.getNewId(),
        title: req.body.title,
        channel: "The Flash",
        description: req.body.description,
        image: req.body.image,
        comments: []
    };
    // Added a channel prop for consistency with the mock-up

    // error handling
    if(!newVideo.title || !newVideo.description || !newVideo.image) {
        return res.status(400).json({
            errorMessage: `Please provide title, description, and an image URL for the video`
        })
    }
    videos.push(newVideo);
    helper.writeJSONFile(videoFile, videos);
    res.send(videos);
});


// update videos with id
router.put('/:id', (req, res) => {
    const match = videos.some(video => video.id === req.params.id);
    if(match) {
        videos.forEach(video => {
            if(video.id === req.params.id) {
                video.title = req.body.title ? req.body.title : video.title;
                video.description = req.body.description ? req.body.description : video.description;
                video.image = req.body.image ? req.body.image : video.image
            }
    });
    helper.writeJSONFile(videoFile, videos)
    res.json( {msg: "Video updated", videos: videos});
    } else {
        res.status(404).json({errorMessage: `Book with ID: ${req.params.id} not found`});
    }
});


// Delete video
router.delete('/:id', (req, res) => {
    const match = videos.some(video => video.id === req.params.id);
    if(match) {
        const afterVideoDelete = videos.filter(video => video.id !== req.params.id);
        helper.writeJSONFile(videoFile, afterVideoDelete);
        res.json({
            msg: `Video with ID: ${req.params.id} Deleted`,
            videos: afterVideoDelete
        });
    } else {
        res.status(404).json({
            errorMessage: `Video with ID: ${req.params.id} not found`
        });
    }
});


module.exports = router;