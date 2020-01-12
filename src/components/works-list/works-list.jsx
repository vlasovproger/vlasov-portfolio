import React, { useEffect } from "react";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import useServiceContext from "../../hooks/use-service-context";
import WorksListItem from "../works-list-item";
import Link from "next/link";
import "./works-list.scss";

const WorksList = observer(() => {
  const {
    uiStore: { works, getAllWorks }
  } = useStores();
  const { portfolioService } = useServiceContext();
  useEffect(() => {
    getAllWorks(portfolioService);
  }, []);
  return (
    <div className="works-list">
      <ul>
        {works.map(work => (
          <li key={work.id}>
            <WorksListItem
              title={work.title}
              subtitle={work.subtitle}
              imageUrl={work.screenshots[0]}
              id={work.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default WorksList;
