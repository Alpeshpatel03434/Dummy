
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://unpkg.com/video.js/dist/video-js.css" rel="stylesheet">
  <script src="https://unpkg.com/video.js/dist/video.js"></script>
  <script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>
</head>
<body>




  <video id="my-video" class="video-js" controls preload="auto" width="640" height="360">
    <source src="your_playlist.m3u8" type="application/x-mpegURL">
  </video>

videojs.registerPlugin('videojs-contrib-hls', window.videojsContribHls);

var player = videojs('my-video', {
  plugins: {
    videojsContribHls: {
      enableLowInitialPlaylist: true,
      smoothQualityChange: true,
      recoverMediaError: true
    }
  }
});


</br>

cmd-

ffmpeg -i input.mp4 -c:v h264 -hls_time 10 -hls_playlist_type vod -strict -2 output.m3u8

</br>

ffmpeg -i input.mp4 -c:v libx264 -c:a aac -strict -2 -f hls -hls_time 10 -hls_playlist_type vod output.m3u8

</br>

ffmpeg -i input.mp4 -c:v libx264 -preset veryfast -tune zerolatency -profile:v main -level 3.1 -c:a aac -strict -2 -f hls -hls_time 10 -hls_playlist_type vod output.m3u8


</br>


ffmpeg -i input_video.mp4 -c:v libx264 -c:a aac -strict -2 -f hls -hls_time 10 -hls_playlist_type vod output.m3u8



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>M3U8 Video Player</title>

  <!-- Include Hls.js for better compatibility with HLS -->
  <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
</head>
<body>

<video id="videoPlayer" width="640" height="360" controls>
  <!-- Replace 'YOUR_M3U8_URL' with the actual URL of your .m3u8 file -->
  <source src="YOUR_M3U8_URL" type="application/vnd.apple.mpegurl">
  Your browser does not support the video tag.
</video>

<script>
</br></br>
  const video = document.getElementById('videoPlayer');

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource('test/test.m3u8');
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // Use the native HLS support if available
    video.src = 'YOUR_M3U8_URL';
  } else {
    console.error('HLS is not supported on this browser.');
  }
    </br></br>
</script>

</body>
</html>
