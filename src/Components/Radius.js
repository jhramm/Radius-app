import React, { useState } from 'react'

export default function Radius() {
const [radius, setRadius] = useState('');
const [volume, setVolume] = useState(null);

const calculateVolume = (r) => {
    return (4 / 3) * Math.PI * Math.pow(r, 3);
};

const handleSubmit = (e) => {
 e.preventDefault();
 const r = parseFloat(radius);
 if (r > 0) {
    setVolume(calculateVolume(r).toFixed(2));
 }
 else {
    setVolume('Invalid radius');
 }
};
  return (
    <div className="radius-container">
      <h1>Volume Calculator</h1>
      <form onSubmit={handleSubmit} className="radius">
        <label htmlFor="">Radius</label>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          step="any"
        />

        <button type="submit"> Calculate Volume</button>
      </form>
      {volume !== null && (
        <div>
          <h2>Volume: {volume}</h2>
        </div>
      )}
    </div>
  );
}
