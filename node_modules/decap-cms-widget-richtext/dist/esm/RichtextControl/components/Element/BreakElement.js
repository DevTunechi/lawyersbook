function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { PlateElement } from 'platejs/react';
import { jsx as ___EmotionJSX } from "@emotion/react";
function BreakElement(props) {
  return ___EmotionJSX(PlateElement, _extends({
    as: "span",
    contentEditable: false
  }, props), ___EmotionJSX("br", null));
}
export default BreakElement;