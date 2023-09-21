import Projects from 'components/projects/Projects';
import './App.css';
import Info from 'components/Info';
import { useRef } from 'react';

function App() {
  const projectRef = useRef(null);

  const ClickMove = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Info event={ClickMove} />
      <Projects ref={projectRef} />
    </>
  );
}

export default App;
