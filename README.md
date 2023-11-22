# Dummy

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video.js HLS Events Blog</title>
    <!-- Include Video.js stylesheet -->
    <link href="https://vjs.zencdn.net/7.15.4/video-js.css" rel="stylesheet">
</head>
<body>

<!-- Video element with ID 'your-video-id' -->
<video id="your-video-id" class="video-js" controls preload="auto" width="640" height="360"
       poster="your-poster-image.jpg" data-setup="{}">
    <source src="your-video-source.m3u8" type="application/x-mpegURL">
    Your browser does not support the video tag.
</video>

<!-- Include Video.js script -->
<script src="https://vjs.zencdn.net/7.15.4/video.js"></script>

<script>
    // Video.js player setup
    var player = videojs('your-video-id');

    // Pause event
    player.on('pause', function() {
        console.log('Video paused at time: ' + player.currentTime());
    });

    // Ended event
    player.on('ended', function() {
        console.log('Video ended at time: ' + player.currentTime());
    });

    // Seeking event
    player.on('seeking', function() {
        console.log('Video is seeking at time: ' + player.currentTime());
    });

    // Disable seek controls to prevent forward seeking
    player.controlBar.progressControl.seekBar.off('mousedown');
    player.controlBar.progressControl.seekBar.off('touchstart');
</script>

</body>
</html>
