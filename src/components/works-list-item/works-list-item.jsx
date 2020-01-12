import React from "react";
import Link from "next/link";
import "./works-list-item.scss";

const WorksListItem = ({ title, subtitle, imageUrl, id }) => {
  return (
    <div className="works-list-item">
      <div className="info">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <Link href="/work-details/[id]" as={`/work-details/${id}`}>
          <a>
            <hr /> <p>view details</p>
          </a>
        </Link>
      </div>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default WorksListItem;
