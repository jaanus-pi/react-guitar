import './App.css';
import Fretboard from './components/fretboard/Fretboard';

function App() {
  return (
    <div className="App">
      <Fretboard numStrings={7} numFrets={24 + 1} />
    </div>
  );
}

export default App;
