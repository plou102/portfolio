import Title from 'components/Title';
import React, { forwardRef, useContext } from 'react';
import Project from './project/Project';
import DataContext from 'context/DataContext';

const Projects = forwardRef((props, ref) => {
  const { data } = useContext(DataContext);
  return (
    <div ref={ref}>
      <Title />

      {data.map((item, idx) => {
        return <Project item={item} idx={idx} />;
      })}
    </div>
  );
});

export default Projects;
