// CursorContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CursorContext = createContext();

const initialCursorState = {
  position: { x: 0, y: 0 },
  variant: 'cursorDefault',
};

const cursorReducer = (state, action) => {
  switch (action.type) {
    case 'setPosition':
      return { ...state, position: action.position };
    case 'setVariant':
      return { ...state, variant: action.variant };
    default:
      return state;
  }
};

const CursorProvider = ({ children }) => {
  const [cursorState, dispatchCursor] = useReducer(
    cursorReducer,
    initialCursorState
  );

  return (
    <CursorContext.Provider value={{ cursorState, dispatchCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

export { CursorProvider, useCursor };
