import '../styles/toggleMode.scss'
import { useEffect, useState } from 'react';

export function ToggleMode() {
  let [mode, setMode] = useState(Boolean);

  useEffect(() => {
    const storageMode = localStorage.getItem('mode') === 'true';
    setMode(storageMode)
    document.body.className = storageMode ? 'ligth-theme' : 'dark-theme';
  }, [mode])

  const changeMode = (event: any) => {
    setMode(event.target.checked);
    localStorage.setItem('mode', event.target.checked.toString());
  }

  return (
    <div className="toggle-switch">
      <label>
        <input type="checkbox" checked={mode} onChange={changeMode} />
        <span className="slider"></span>
      </label>
    </div>
  )
}