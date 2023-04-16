import './App.css';
import Project from './components/Project';
import Skills from './components/Skills';
import Title from './components/Title';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Title />
      <Skills />
      <Work />
      <Project />
    </div>
  );
}

export default App;
