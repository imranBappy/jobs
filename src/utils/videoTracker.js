// function videoTracker(cd) {
//   var video = document.getElementById("video");
//   if (video) {
//     var timeStarted = -1;
//     var timePlayed = 0;
//     var duration = 0;
//     if (video.readyState > 0) getDuration.call(video);
//     else {
//       video.addEventListener("loadedmetadata", getDuration);
//     }
//     function videoStartedPlaying() {
//       timeStarted = new Date().getTime() / 1000;
//     }
//     function videoStoppedPlaying(event) {
//       if (timeStarted > 0) {
//         var playedFor = new Date().getTime() / 1000 - timeStarted;
//         timeStarted = -1;
//         timePlayed += playedFor;
//       }
//       document.getElementById("played").innerHTML = Math.round(timePlayed) + "";
//       if (timePlayed >= duration && event.type === "ended") {
//         document.getElementById("status").className = "complete";
//         cd("complete");
//       }
//     }

//     function getDuration() {
//       duration = video.duration;
//       document
//         .getElementById("duration")
//         .appendChild(new Text(Math.round(duration) + ""));
//       console.log("Duration: ", duration);
//     }

//     video.addEventListener("play", videoStartedPlaying);
//     video.addEventListener("playing", videoStartedPlaying);

//     video.addEventListener("ended", videoStoppedPlaying);
//     video.addEventListener("pause", videoStoppedPlaying);
//   }
// }
// export default videoTracker;
