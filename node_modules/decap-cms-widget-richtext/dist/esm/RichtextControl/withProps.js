function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { jsx as ___EmotionJSX } from "@emotion/react";
export default function withProps(Component, defaultProps) {
  const ComponentWithClassName = Component;
  return /*#__PURE__*/React.forwardRef(function ExtendComponent(props, ref) {
    return ___EmotionJSX(ComponentWithClassName, _extends({
      ref: ref
    }, defaultProps, props));
  });
}