import React, { createContext, useContext } from 'react';
import { jsx as ___EmotionJSX } from "@emotion/react";
const EditorContext = /*#__PURE__*/createContext(null);
export function useEditorContext() {
  return useContext(EditorContext);
}
export function EditorProvider({
  children,
  editorControl,
  editorComponents
}) {
  const value = {
    editorControl,
    editorComponents
  };
  return ___EmotionJSX(EditorContext.Provider, {
    value: value
  }, children);
}