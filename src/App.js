import Projects from 'components/projects/Projects';
import Info from 'components/Info';
import { useRef } from 'react';
import { DataProvider } from 'context/DataContext';
import Skills from 'components/Skills';
import Education from 'components/Education';

function App() {
  const projectRef = useRef(null);

  const ClickMove = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <DataProvider>
        <Info event={ClickMove} />
        <Projects ref={projectRef} />
        <Skills />
        <Education />
      </DataProvider>
    </>
  );
}

export default App;
