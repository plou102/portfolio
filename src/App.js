import Projects from 'components/projects/Projects';
import './App.css';
import Info from 'components/Info';
import { useRef } from 'react';
import { DataProvider } from 'context/DataContext';

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
      </DataProvider>
    </>
  );
}

export default App;
