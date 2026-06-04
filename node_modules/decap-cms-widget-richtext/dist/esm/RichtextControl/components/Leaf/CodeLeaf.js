import _styled from "@emotion/styled/base";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { colors, lengths } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
const StyledCode = /*#__PURE__*/_styled("code", {
  target: "ep5r8zv0",
  label: "StyledCode"
})("background-color:", colors.background, ";border-radius:", lengths.borderRadius, ";padding:0 2px;font-size:85%;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvY29tcG9uZW50cy9MZWFmL0NvZGVMZWFmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUk4QiIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvUmljaHRleHRDb250cm9sL2NvbXBvbmVudHMvTGVhZi9Db2RlTGVhZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjb2xvcnMsIGxlbmd0aHMgfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmNvbnN0IFN0eWxlZENvZGUgPSBzdHlsZWQuY29kZWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmFja2dyb3VuZH07XG4gIGJvcmRlci1yYWRpdXM6ICR7bGVuZ3Rocy5ib3JkZXJSYWRpdXN9O1xuICBwYWRkaW5nOiAwIDJweDtcbiAgZm9udC1zaXplOiA4NSU7XG5gO1xuXG5mdW5jdGlvbiBDb2RlTGVhZih7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZENvZGUgYXNDaGlsZCB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3R5bGVkQ29kZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZUxlYWY7XG4iXX0= */"));
function CodeLeaf({
  children,
  ...props
}) {
  return ___EmotionJSX(StyledCode, _extends({
    asChild: true
  }, props), children);
}
export default CodeLeaf;