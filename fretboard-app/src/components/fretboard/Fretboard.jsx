import React from 'react';
import './Fretboard.css'

const Fretboard = ({ numStrings, numFrets }) => {
  const singleDotPositions = [3, 5, 7, 9, 15, 17, 19, 21];
  const doubleDotPositions = [12, 24];
  const notesFlat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  const notesSharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  let accidentals = 'sharps';
  const guitarTuning = [4, 11, 7, 2, 9, 4];

  const strings = [];

  const generateNoteNames = (noteIndex) => {
    noteIndex = noteIndex % 12;
    let noteName;
    if (accidentals === 'flats') {
      noteName = notesFlat[noteIndex];
    } else if (accidentals === 'sharps') {
      noteName = notesSharp[noteIndex];
    }
    return noteName;
  }

  for (let i = 0; i < numStrings; i++) {
    const frets = [];
    for (let j = 0; j < numFrets; j++) {
      let noteName = generateNoteNames(j + guitarTuning[i]);
      let fretContent = <div className="fret note" key={j} data-note={noteName}></div>;
      // Determine if it's a note with single or double dot
      if (i === 0 && singleDotPositions.includes(j)) {
        fretContent = <div className='fret note single-dot' data-note={noteName}></div>
      } else if (i === 0 && doubleDotPositions.includes(j)) {
        fretContent = (
          <div className="fret note" data-note={noteName} key={j}>
            <div className="double-dot"></div>
          </div>);
      }
      frets.push(fretContent);
    }
    strings.push(<div className="string" key={i}>{frets}</div>);
  }

  return (
    <div className="fretboard">
      {strings}
    </div>
  )
}

export default Fretboard