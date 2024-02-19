import React, { useState } from 'react';
import '../css/InteractiveFretboard.css';
import Fretboard from '../components/Fretboard';

const InteractiveFretboard = () => {
  const singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
  const doubleFretMarkPositions = [12, 24];
  const notesFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  const notesSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const [fretboard, setFretboard] = useState('');
  const [instrument, setInstrument] = useState('Guitar (6 strings)');
  const instrumentTuningPresets = {
    'Guitar (6 strings)': [4, 11, 7, 2, 9, 4],
    'Guitar (7 strings)': [4, 11, 7, 2, 9, 4, 11],
    'Guitar (8 strings)': [4, 11, 7, 2, 9, 4, 11, 6],
    'Bass (4 strings)': [7, 2, 9, 4],
    'Bass (5 strings)': [7, 2, 9, 4, 11],
    'Ukulele': [9, 4, 0, 7]
  };

  const setSelectedInstrument = () => {

  }

  return (
    <div className='interactive-fretboard'>
    <div class="settings">
        <label for="instrument-selector">Selected instrument:</label>
        <select name="instrument-selector" id="instrument-selector">
          {Object.keys(instrumentTuningPresets).map((instrument, index) => {
            return (
              <option key={index}>{instrument}</option>
            );
          })}
        </select>
        <div class="accidental-selector">
          <input type="radio" class="acc-select" id="flats" name="accidentals" value="flats" />
          <label for="flats">♭</label>
          <input type="radio" class="acc-select" id="sharps" name="accidentals" value="sharps" checked />
          <label for="sharps">♯</label>
        </div>
        <label for="number-of-frets">Number of frets:</label>
        <input type="number" id="number-of-frets" min="5" max="30" value="12" />
        <label for="show-all-notes">Show all notes:</label>
        <input type="checkbox" id="show-all-notes" />
        <label for="show-multiple-notes">Show multiple notes:</label>
        <input type="checkbox" id="show-multiple-notes" />
      </div>
    <div>
      <Fretboard />
    </div>
    <div class="note-name-section"></div>
    </div>
  )
}

export default InteractiveFretboard