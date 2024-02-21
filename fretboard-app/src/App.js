import './App.css';
import Fretboard from './components/fretboard/Fretboard';

function App() {
  return (
    <div className="App">
      <Fretboard numStrings={6} numFrets={13} />
    </div>
  );
}

export default App;
