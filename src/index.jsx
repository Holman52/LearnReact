import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

console.log('s')
const root = createRoot(document.getElementById("root"))
root.render(<App />);