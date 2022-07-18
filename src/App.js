
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Project from './components/project/Project';
import SkillContainer from './components/SkillContainer/SkillContainer';
import TopContainer from './components/TopContainer/TopContainer';

function App() {
  return (
    <div className="App">
<Header/>
<TopContainer/>
<SkillContainer/>
<Project/>
<Contact/>
    </div>
  );
}

export default App;
