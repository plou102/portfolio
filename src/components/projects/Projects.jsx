import Title from 'components/Title';
import React, { forwardRef, useContext } from 'react';
import Project from './project/Project';
import DataContext from 'context/DataContext';

const Projects = forwardRef((props, ref) => {
  const { data } = useContext(DataContext);
  return (
    <div ref={ref}>
      <Title title="Projects" />

      {data.map((item, idx) => {
        return <Project item={item} idx={idx} key={idx + 1} />;
      })}
    </div>
  );
});

export default Projects;
