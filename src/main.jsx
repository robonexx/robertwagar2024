import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './globals.scss';
import { CursorProvider } from './context/CustomCursorContext.jsx';
import CustomCursor from './components/cursor/CustomCursor.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CursorProvider>
      <CustomCursor />
      <Router>
        <App />
      </Router>
    </CursorProvider>
  </React.StrictMode>
);
