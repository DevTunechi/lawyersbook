function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { useMarkToolbarButton, useMarkToolbarButtonState } from 'platejs/react';
import ToolbarButton from './ToolbarButton';
import { jsx as ___EmotionJSX } from "@emotion/react";
function MarkToolbarButton({
  clear,
  nodeType,
  ...rest
}) {
  const state = useMarkToolbarButtonState({
    clear,
    nodeType
  });
  const {
    props: {
      pressed,
      onClick
    }
  } = useMarkToolbarButton(state);
  return ___EmotionJSX(ToolbarButton, _extends({
    isActive: pressed,
    onClick: onClick
  }, rest));
}
export default MarkToolbarButton;