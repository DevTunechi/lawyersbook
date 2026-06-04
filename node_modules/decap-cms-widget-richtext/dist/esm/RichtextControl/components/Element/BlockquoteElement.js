import _styled from "@emotion/styled/base";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { colors } from 'decap-cms-ui-default';
import { PlateElement } from 'platejs/react';
import { jsx as ___EmotionJSX } from "@emotion/react";
const bottomMargin = '16px';
const StyledBlockQuote = /*#__PURE__*/_styled("blockquote", {
  target: "e6q7s9z0",
  label: "StyledBlockQuote"
})("padding-left:16px;border-left:3px solid ", colors.background, ";margin-left:0;margin-right:0;margin-bottom:", bottomMargin, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvY29tcG9uZW50cy9FbGVtZW50L0Jsb2NrcXVvdGVFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU8wQyIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvUmljaHRleHRDb250cm9sL2NvbXBvbmVudHMvRWxlbWVudC9CbG9ja3F1b3RlRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5pbXBvcnQgeyBQbGF0ZUVsZW1lbnQgfSBmcm9tICdwbGF0ZWpzL3JlYWN0JztcblxuY29uc3QgYm90dG9tTWFyZ2luID0gJzE2cHgnO1xuXG5jb25zdCBTdHlsZWRCbG9ja1F1b3RlID0gc3R5bGVkLmJsb2NrcXVvdGVgXG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAke2NvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogJHtib3R0b21NYXJnaW59O1xuYDtcblxuZnVuY3Rpb24gQmxvY2txdW90ZUVsZW1lbnQoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxQbGF0ZUVsZW1lbnQgYXNDaGlsZCB7Li4ucHJvcHN9PlxuICAgICAgPFN0eWxlZEJsb2NrUXVvdGU+e2NoaWxkcmVufTwvU3R5bGVkQmxvY2tRdW90ZT5cbiAgICA8L1BsYXRlRWxlbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2txdW90ZUVsZW1lbnQ7XG4iXX0= */"));
function BlockquoteElement({
  children,
  ...props
}) {
  return ___EmotionJSX(PlateElement, _extends({
    asChild: true
  }, props), ___EmotionJSX(StyledBlockQuote, null, children));
}
export default BlockquoteElement;