import React, { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef({ x: 0, y: 0 });
  const outerRef = useRef();

  useEffect(() => {
    const outer = outerRef.current;

    const moveHandler = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    window.addEventListener("mousemove", moveHandler);

    let lastX = 0;
    let lastY = 0;
    const speedFactor = 0.0011; // ~1.5 second follow

    const animate = () => {
      lastX += (cursorRef.current.x - lastX) * speedFactor;
      lastY += (cursorRef.current.y - lastY) * speedFactor;

      outer.style.transform = `translate(${lastX - 10}px, ${lastY - 10}px)`; // center
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <div
      ref={outerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "2px solid #333",
        backgroundColor: "rgba(0,0,0,0.05)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        pointerEvents: "none",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Inner dot */}
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#333",
        }}
      />
    </div>
  );
}
