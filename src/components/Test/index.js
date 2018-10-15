import React from 'react'

const Test = () => {
  navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
  console.log(navigator.mediaDevices.getSupportedConstraints())
  navigator.getUserMedia({
      audio: true,
      video: {
        width: document.width,
        height: document.height,
        facingMode: { exact: 'environment' },
        frameRate: 60,
        torch: true
      }
    },
    function (stream) {
      var video = document.querySelector('video')
      video.srcObject = stream
      video.onloadedmetadata = function (e) {
        video.play()
      }
    },
    function (err) {
      console.log('The following error occurred: ' + err.name)
    })
} else {
  console.log('getUserMedia not supported')
}
  return <video></video>
}

export default Test
