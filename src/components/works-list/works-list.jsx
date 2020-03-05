import React, { useEffect } from "react";
import { observer } from "mobx-react";
import useStores from "../../hooks/use-stores";
import useServiceContext from "../../hooks/use-service-context";
import WorksListItem from "../works-list-item";
import Link from "next/link";
import Spinner from "../spinner";

const WorksList = observer(() => {
  const {
    worksStore: { works, getAllWorks }
  } = useStores();
  const { portfolioService } = useServiceContext();
  useEffect(() => {
    if (!works.length) {
      getAllWorks(portfolioService);
    }
  }, []);
  return (
    <div className="works-list">
      <ul>
        {works.map(work => (
          <li key={work.id}>
            <WorksListItem
              title={work.title}
              subtitle={work.subtitle}
              imageDefault={work.imageDefault}
              imageWebp={work.imageWebp}
              id={work.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});

export default WorksList;
