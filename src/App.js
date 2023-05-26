import Dropdown from './components/Dropdown';
import './App.css';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title />

      <div style={{ width: 300, marginTop: 20 }}>
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
