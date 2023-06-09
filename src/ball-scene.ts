if (typeof AFRAME === "undefined") {
  throw new Error("Component attempted to register before AFRAME was available.");
}

AFRAME.registerSystem("ball-scene-manager", {
  init: function () {
    this.ballScenes = document.querySelectorAll("[ball-scene]");
    this.currScene = undefined;
    console.log("ball-scene-manager inited");
  },
});
AFRAME.registerPrimitive("a-ball-scene", {
  defaultComponents: {
    geometry: { primitive: "sphere" },
  },
});
AFRAME.registerComponent("ball-scene", {
  schema: {
    src: { default: "" },
  },
  init: function () {
    this.el.setAttribute("geometry", { primitive: "sphere" });
    this.el.setAttribute("material", { src: this.data.src });
    this.el.addEventListener("mouseenter", () => {});
    this.el.addEventListener("mousexit", () => {});
  },
});
