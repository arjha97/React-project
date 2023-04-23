import React, { useState } from "react";
import "../components/css/Modules.css";
import topic from "../Icons/topic.svg";
import moduleQuiz from "../Icons/moduleQuiz.svg";
import assignment from "../Icons/assignment.svg";

const Modules = () => {
  const [activeItem, setActiveItem] = useState("topic");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="modules">
      <div className="left-sidebar">
        <div
          className={`sidebar-item ${activeItem === "topic" ? "active" : ""}`}
          onClick={() => handleItemClick("topic")}
        >
          <img src={topic} alt="Topic" />
        </div>
        <div
          className={`sidebar-item ${activeItem === "quiz" ? "active" : ""}`}
          onClick={() => handleItemClick("quiz")}
        >
          <img src={moduleQuiz} alt="Quiz" />
        </div>
        <div
          className={`sidebar-item ${
            activeItem === "assignment" ? "active" : ""
          }`}
          onClick={() => handleItemClick("assignment")}
        >
          <img src={assignment} alt="Assignment" />
        </div>
      </div>
      <div className="right-content">
        {activeItem === "topic" && (
          <div className="topic-content">
            <h2>Module Topic</h2>
            <p>Content goes here...</p>
          </div>
        )}
        {activeItem === "quiz" && (
          <div className="quiz-content">
            <h2>Module Quiz</h2>
            <p>Content goes here...</p>
          </div>
        )}
        {activeItem === "assignment" && (
          <div className="assignment-content">
            <h2>Module Assignment</h2>
            <p>Content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modules;