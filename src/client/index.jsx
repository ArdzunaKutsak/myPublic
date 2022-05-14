import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../App';
// import { Header } from '../shared/Header';
// import {StarWarsName} from '../shared/temp'

window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('react_root');
    const root = createRoot(container);
    root.render(<App />);
})
