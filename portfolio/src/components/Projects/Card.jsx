import React, { useRef, useEffect, useState } from "react";

const Card = ({ title, details, projectUrl, imageUrl, color, rotation }) => {
  const cardWrapperRef = useRef(null);

  // Refs for holes
  const card1HoleRef1 = useRef(null);
  const card1HoleRef2 = useRef(null);
  const card2HoleRef1 = useRef(null);
  const card2HoleRef2 = useRef(null);

  // Line positions
  const [linePos1, setLinePos1] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [linePos2, setLinePos2] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

  const updateLines = () => {
    if (!cardWrapperRef.current) return;

    const containerRect = cardWrapperRef.current.getBoundingClientRect();

    const getHoleCenter = (ref) => {
      const rect = ref.current.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
      };
    };

    if (card1HoleRef1.current && card2HoleRef1.current) {
      const h1 = getHoleCenter(card1HoleRef1);
      const h2 = getHoleCenter(card2HoleRef1);
      setLinePos1({ x1: h1.x, y1: h1.y, x2: h2.x, y2: h2.y });
    }

    if (card1HoleRef2.current && card2HoleRef2.current) {
      const h1 = getHoleCenter(card1HoleRef2);
      const h2 = getHoleCenter(card2HoleRef2);
      setLinePos2({ x1: h1.x, y1: h1.y, x2: h2.x, y2: h2.y });
    }
  };

  useEffect(() => {
    const handleLoad = () => updateLines();
    window.addEventListener("resize", updateLines);
    window.addEventListener("scroll", updateLines);
    window.addEventListener("load", handleLoad);

    updateLines(); // initial

    return () => {
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("scroll", updateLines);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Helper to generate curved path
  const getCurvePath = ({ x1, y1, x2, y2 }) => {
    const cx = (x1 + x2) / 2; // control point x
    const cy = (y1 + y2) / 2 - 50; // control point y, adjust -50 for curve height
    return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  };

  return (
    <div
      ref={cardWrapperRef}
      className="card-wrapper"
      style={{ position: "relative", minHeight: "500px" }}
    >
      {/* Card 1 */}
      <div
        className="card card-1"
        style={{
          backgroundColor: color,
          transform: `rotate(${rotation * 0.5}deg)`,
        }}
      >
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="behance-preview">
          <img src={imageUrl} alt={title} className="card-image" />
          <span className="overlay">View on Behance</span>
        </a>

        <div className="card-content">
          <h3 className="card-title">{title}</h3>
        </div>

        <div className="holes-container">
          <div className="hole" ref={card1HoleRef1}></div>
          <div className="hole" ref={card1HoleRef2}></div>
        </div>
      </div>

      {/* SVG Thread */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {/* First curved thread */}
        <path
          d={getCurvePath(linePos1)}
          stroke="#87A7DE"
          strokeWidth={10}
          fill="transparent"
          strokeLinecap="round"
        />
        {/* Second curved thread */}
        <path
          d={getCurvePath(linePos2)}
          stroke="#87A7DE"
          strokeWidth={10}
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>

      {/* Card 2 */}
      <div
        className="card card-2 card-details"
        style={{
          backgroundColor: color,
          transform: `rotate(${rotation * -1}deg)`,
        }}
      >
        <div className="holes-container">
          <div className="hole" ref={card2HoleRef1}></div>
          <div className="hole" ref={card2HoleRef2}></div>
        </div>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Card;
