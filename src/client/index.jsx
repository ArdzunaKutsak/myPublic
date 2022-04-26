import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from '../shared/header';

window.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById('react_root');
    const root = createRoot(container);
    root.render(<Header tab="home" />);
})
