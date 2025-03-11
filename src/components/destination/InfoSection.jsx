import React from "react";
import DescriptionCard from "./DescriptionCard";
import GuideCard from "./GuideCard";
import "./Destination.css";
import InputBG from "../commentSection/InputBG";
import CommentBox from "../commentSection/CommentBox";

export default function InfoSection({
  description,
  descriptionTitle,
  descriptionImage,
  guide,
  guideDescription,
  guideImage,
}) {
  return (
    <div className="info-section">
      <DescriptionCard
        image={descriptionImage}
        description={description}
        title={descriptionTitle}
      />
      <GuideCard
        image={guideImage}
        guide={guide}
        description={guideDescription}
      />

    </div>
  );
}