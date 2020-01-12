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
    return (
      <div className="work-details-content">
        <div className="wrapper">
          <h1 className="page-title">{currentWork.title}</h1>
          <div className="page-subtitle">
            <hr />
            <h4>{currentWork.subtitle}</h4>
            <hr />
          </div>
          <div className="info"></div>
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
});

export default WorkDetailsContent;
