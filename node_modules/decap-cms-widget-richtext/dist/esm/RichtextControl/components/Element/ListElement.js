import _styled from "@emotion/styled/base";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import { PlateElement } from 'platejs/react';
import { jsx as ___EmotionJSX } from "@emotion/react";
const StyledList = /*#__PURE__*/_styled("li", {
  target: "e10xvw6m1",
  label: "StyledList"
})(process.env.NODE_ENV === "production" ? {
  name: "1ermwb4",
  styles: "margin-bottom:16px;padding-left:30px"
} : {
  name: "1ermwb4",
  styles: "margin-bottom:16px;padding-left:30px/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvY29tcG9uZW50cy9FbGVtZW50L0xpc3RFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUk0QiIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvUmljaHRleHRDb250cm9sL2NvbXBvbmVudHMvRWxlbWVudC9MaXN0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBQbGF0ZUVsZW1lbnQgfSBmcm9tICdwbGF0ZWpzL3JlYWN0JztcblxuY29uc3QgU3R5bGVkTGlzdCA9IHN0eWxlZC5saWBcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkTGlzdEVsZW1lbnQgPSBzdHlsZWQudWxgXG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuYDtcblxuZnVuY3Rpb24gTGlzdEVsZW1lbnQoeyBjaGlsZHJlbiwgdmFyaWFudCwgLi4ucHJvcHMgfSkge1xuICBjb25zdCBFbGVtZW50ID0gdmFyaWFudCA9PSAnbGknID8gU3R5bGVkTGlzdEVsZW1lbnQgOiBTdHlsZWRMaXN0O1xuXG4gIHJldHVybiAoXG4gICAgPFBsYXRlRWxlbWVudCBhc0NoaWxkIHsuLi5wcm9wc30+XG4gICAgICA8RWxlbWVudCB2YXJpYW50PXt2YXJpYW50fSBhcz17dmFyaWFudH0gey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9FbGVtZW50PlxuICAgIDwvUGxhdGVFbGVtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0RWxlbWVudDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const StyledListElement = /*#__PURE__*/_styled("ul", {
  target: "e10xvw6m0",
  label: "StyledListElement"
})(process.env.NODE_ENV === "production" ? {
  name: "183lvrs",
  styles: "margin-top:8px;margin-bottom:8px"
} : {
  name: "183lvrs",
  styles: "margin-top:8px;margin-bottom:8px/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvY29tcG9uZW50cy9FbGVtZW50L0xpc3RFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNtQyIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvUmljaHRleHRDb250cm9sL2NvbXBvbmVudHMvRWxlbWVudC9MaXN0RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBQbGF0ZUVsZW1lbnQgfSBmcm9tICdwbGF0ZWpzL3JlYWN0JztcblxuY29uc3QgU3R5bGVkTGlzdCA9IHN0eWxlZC5saWBcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkTGlzdEVsZW1lbnQgPSBzdHlsZWQudWxgXG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuYDtcblxuZnVuY3Rpb24gTGlzdEVsZW1lbnQoeyBjaGlsZHJlbiwgdmFyaWFudCwgLi4ucHJvcHMgfSkge1xuICBjb25zdCBFbGVtZW50ID0gdmFyaWFudCA9PSAnbGknID8gU3R5bGVkTGlzdEVsZW1lbnQgOiBTdHlsZWRMaXN0O1xuXG4gIHJldHVybiAoXG4gICAgPFBsYXRlRWxlbWVudCBhc0NoaWxkIHsuLi5wcm9wc30+XG4gICAgICA8RWxlbWVudCB2YXJpYW50PXt2YXJpYW50fSBhcz17dmFyaWFudH0gey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9FbGVtZW50PlxuICAgIDwvUGxhdGVFbGVtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0RWxlbWVudDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
function ListElement({
  children,
  variant,
  ...props
}) {
  const Element = variant == 'li' ? StyledListElement : StyledList;
  return ___EmotionJSX(PlateElement, _extends({
    asChild: true
  }, props), ___EmotionJSX(Element, _extends({
    variant: variant,
    as: variant
  }, props), children));
}
export default ListElement;