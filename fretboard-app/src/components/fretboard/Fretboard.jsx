import React from 'react';
import './Fretboard.css'

const Fretboard = ({ numStrings, numFrets }) => {
  const strings = [];
  const singleDotPositions = [3, 5, 7, 9, 15, 17, 19, 21];
  const doubleDotPositions = [12, 24]

  for (let i = 0; i < numStrings; i++) {
    const frets = [];
    for (let j = 0; j < numFrets; j++) {
      let fretContent = <div className="fret note" key={j}></div>;
      // Determine if it's a note with single or double dot
      if (i === 0 && singleDotPositions.includes(j)) {
        fretContent = <div className='fret note single-dot'></div>
      } else if (i === 0 && doubleDotPositions.includes(j)) {
        fretContent = (
          <div className="fret note" key={j}>
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