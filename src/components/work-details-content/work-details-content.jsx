import React, { useEffect } from "react";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import useServiceContext from "../../hooks/use-service-context";

import "./work-details-content.scss";

const WorkDetailsContent = observer(({ id }) => {
  const {
    uiStore: { currentWork, getCurrentWork }
  } = useStores();
  const { portfolioService } = useServiceContext();
  useEffect(() => {
    getCurrentWork(id, portfolioService);
  }, [id]);

  if (currentWork) {
    const {
      title,
      subtitle,
      descrption,
      client,
      website,
      category,
      imageWebp,
      imageDefault,
      github
    } = currentWork;
    return (
      <div className="work-details-content">
        <div className="wrapper">
          <h1 className="page-title">{title}</h1>
          <div className="page-subtitle">
            <hr />
            <h4>{subtitle}</h4>
            <hr />
          </div>
          <div className="info">
            <ul className="about-project">
              <li>
                <h4>Client</h4>
                <p>{client}</p>
              </li>
              <li>
                <h4>Website</h4>
                <a href={website}>view</a>
              </li>
              <li>
                <h4>Category</h4>
                <p>{category}</p>
              </li>
              <li>
                <h4>Github</h4>
                <a href={github}>view</a>
              </li>
            </ul>

            <picture>
              <source type="image/webp" srcSet={imageWebp} />
              <img alt="screenshot" src={imageDefault} />
            </picture>
            <p className="descrption">{descrption}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
});

export default WorkDetailsContent;
