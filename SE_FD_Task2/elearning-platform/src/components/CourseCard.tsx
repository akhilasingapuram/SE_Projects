import React from "react";
import "./CourseCard.css";

type Props = {
  title: string;
  description: string;
  image: string;
  VideoUrl?: string; // Optional Youtube video URL
};

const CourseCard = ({ title, description, image, VideoUrl }: Props) => (
  <div className="course-card">
    <img src={image} alt={title} height={100} width={100} />
    <h2>{title}</h2>
    <p>{description}</p>
    {VideoUrl && (
      <div className="video-container" style={{ marginTop: "1rem" }}>
        <iframe
          width="100%"
          height="215"
          src={VideoUrl}
          title={title + "video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )}
  </div>
);

export default CourseCard;
