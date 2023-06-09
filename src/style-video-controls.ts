if (typeof AFRAME === "undefined") {
  throw new Error("Component attempted to register before AFRAME was available.");
}

AFRAME.registerSystem("style-video-controls", {
  init: function () {
    document.querySelector("a-scene").addEventListener("loaded", (event) => {
      const videoControlsElem = document.querySelector("[video-controls]");
      const videoControls = videoControlsElem.components["video-controls"];
      const elemStyles = getComputedStyle(videoControlsElem);
      const themeBlue = elemStyles.getPropertyValue("--theme-blue");
      const themeTan = elemStyles.getPropertyValue("--theme-tan");
      const themeWhite = elemStyles.getPropertyValue("--theme-white");
      const themeBlack = elemStyles.getPropertyValue("--theme-black");
      videoControls.data.infoTextTop = "Look + click on play or bar ";
      videoControls.data.infoTextBottom = "";
      videoControls.data.backgroundColor = themeBlue;
      videoControls.data.barColor = themeTan;
      videoControls.data.textColor = themeWhite;
      videoControls.data.infoTextFont = "500 2em Raleway";
      videoControls.data.statusTextFont = "800 2em Raleway";
      videoControls.data.timeTextFont = "800 3em Raleway";
    });
  },
});
