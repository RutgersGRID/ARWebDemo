if (typeof AFRAME === "undefined") {
  throw new Error("Component attempted to register before AFRAME was available.");
}

AFRAME.registerSystem("hover-update-video-controls", {
  init: function () {
    document.querySelector("a-scene").addEventListener("loaded", (event) => {
      this.camera = document.querySelector("[camera]");
      this.videoControlElem = document.querySelector("[video-controls]");
      this.videoControls = this.videoControlElem.components["video-controls"];

      this.videos = document.querySelectorAll("[video]");
      console.log("videos ", this.videos);
      for (let i = 0; i < this.videos.length; i++) {
        const currVideo = this.videos[i];
        console.log("add listener for, ", currVideo);
        currVideo.addEventListener("mouseenter", () => {
          this.selectedVideo = currVideo;
          const currVideoSrc = currVideo.components["material"].data.src;
          this.videoControls.data.src = `#${currVideoSrc.id}`;
          this.videoControls.data.infoTextTop = currVideoSrc.id;
          this.videoControls.update();
        });
        currVideo.addEventListener("mouseleave", () => {
          if (this.closestVideo == currVideo) {
            this.selectedVideo = undefined;
          }
        });
      }
    });
  },
});
