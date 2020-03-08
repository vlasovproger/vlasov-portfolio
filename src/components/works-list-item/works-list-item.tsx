import React from "react";
import Link from "next/link";
import { IWork } from "../../interfaces";
import "./works-list-item.scss";

const WorksListItem: React.FC<IWork> = ({
  title,
  subtitle,
  imageDefault,
  imageWebp,
  id
}) => {
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

      <picture>
        <source type="image/webp" srcSet={imageWebp} />
        <img alt={title} src={imageDefault} />
      </picture>
    </div>
  );
};

export default WorksListItem;
