function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { useEditorRef } from 'platejs/react';
import { useLinkToolbarButton, useLinkToolbarButtonState } from '@platejs/link/react';
import ToolbarButton from './ToolbarButton';
import { handleLinkClick } from '../../linkHandler';
import { jsx as ___EmotionJSX } from "@emotion/react";
function LinkToolbarButton({
  t,
  ...rest
}) {
  const state = useLinkToolbarButtonState();
  const {
    props: {
      pressed
    }
  } = useLinkToolbarButton(state);
  const editor = useEditorRef();
  function handleClick() {
    handleLinkClick({
      editor,
      t
    });
  }
  return ___EmotionJSX(ToolbarButton, _extends({
    isActive: pressed,
    onClick: handleClick
  }, rest));
}
export default LinkToolbarButton;