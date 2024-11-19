
 package com.example.demo.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.MalformedURLException;

@RestController
@RequestMapping("/api/images")
public class ImageController {

    @GetMapping("/fetch")
    public ResponseEntity<Resource> fetchImage(@RequestParam String imageUrl) {
        try {
            // Create a Resource from the external image URL
            Resource resource = new UrlResource(imageUrl);

            if (resource.exists() && resource.isReadable()) {
                // Return the image as a response
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=" + resource.getFilename())
                        .header(HttpHeaders.CONTENT_TYPE, "image/jpeg") // Or detect dynamically
                        .body(resource);
            } else {
                // Return 404 if the image doesn't exist
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (MalformedURLException e) {
            // Handle invalid URL errors
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
 
 
 
 // Attach an event listener to the form submission
    $("#myForm").submit(function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Show the alert
        alert("Success");

        // Submit the form
        $("#myForm").unbind('submit').submit();
    });
    
--------------------------------------------

@RestController
public class VideoController {

    @GetMapping("/stream/{videoId}")
    public ResponseEntity<Resource> streamVideo(@PathVariable String videoId) {
        // Use your M3u8 streaming library to obtain the video stream
        Resource videoResource = videoStreamingService.getVideoStream(videoId);

        // Set appropriate headers for streaming
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType("application/vnd.apple.mpegurl"));

        // Return the ResponseEntity with the video stream
        return ResponseEntity.ok()
                .headers(headers)
                .body(videoResource);
    }
}




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JW Player Example</title>
    <!-- Include JW Player library -->
    <script src="https://cdn.jwplayer.com/libraries/your-jwplayer-version/jwplayer.js"></script>
</head>
<body>

<!-- JW Player container -->
<div id="jwplayer"></div>

<script>
    // Initialize JW Player
    jwplayer("jwplayer").setup({
        file: "path/to/your-local-video.m3u8",
        width: "100%",
        aspectratio: "16:9", // Adjust this based on your video aspect ratio
        autostart: false, // Set to true if you want the video to start playing automatically
    });
</script>

</body>
</html>



The media could not be loaded, either because the server or network failed or because the format is not supported.



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
