import './App.css';
import Project from './components/Project';
import Skills from './components/Skills';
import Title from './components/Title';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <Skills />
      <Work />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
