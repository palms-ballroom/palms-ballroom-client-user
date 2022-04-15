import React from "react";
require("aframe");
export default function View() {
  return (
    <a-scene physics>
      <a-box
        color="tomato"
        depth="2"
        height="4"
        width="0.5"
        id="wall"
        position="  -2 -2 2"
      ></a-box>

      <a-box
        position="-1 4 -3"
        rotation="0 45 0"
        color="#4CC3D9"
        dynamic-body
      ></a-box>
      <a-plane
        position="0 0 -4"
        rotation="-90 0 0"
        width="4"
        height="4"
        color="#7BC8A4"
        static-body
      ></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  );
}
