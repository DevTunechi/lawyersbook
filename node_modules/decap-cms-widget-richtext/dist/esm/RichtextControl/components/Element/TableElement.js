import _styled from "@emotion/styled/base";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import { jsx as ___EmotionJSX } from "@emotion/react";
const StyledTable = /*#__PURE__*/_styled("table", {
  target: "e2gq61v0",
  label: "StyledTable"
})(process.env.NODE_ENV === "production" ? {
  name: "1ewy569",
  styles: "border-collapse:collapse;margin-bottom:16px;width:100%"
} : {
  name: "1ewy569",
  styles: "border-collapse:collapse;margin-bottom:16px;width:100%/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvY29tcG9uZW50cy9FbGVtZW50L1RhYmxlRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZ0MiLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL1JpY2h0ZXh0Q29udHJvbC9jb21wb25lbnRzL0VsZW1lbnQvVGFibGVFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuY29uc3QgU3R5bGVkVGFibGUgPSBzdHlsZWQudGFibGVgXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuZnVuY3Rpb24gVGFibGVFbGVtZW50KHsgY2hpbGRyZW4sIGF0dHJpYnV0ZXMsIG5vZGVQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFRhYmxlIHsuLi5hdHRyaWJ1dGVzfSB7Li4ubm9kZVByb3BzfT5cbiAgICAgIDx0Ym9keT57Y2hpbGRyZW59PC90Ym9keT5cbiAgICA8L1N0eWxlZFRhYmxlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUVsZW1lbnQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
function TableElement({
  children,
  attributes,
  nodeProps
}) {
  return ___EmotionJSX(StyledTable, _extends({}, attributes, nodeProps), ___EmotionJSX("tbody", null, children));
}
export default TableElement;