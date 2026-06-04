function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { PlateElement } from 'platejs/react';
import { useLink } from '@platejs/link/react';
import { jsx as ___EmotionJSX } from "@emotion/react";
function LinkElement({
  children,
  element,
  ...rest
}) {
  const {
    props: linkProps
  } = useLink({
    element
  });
  return ___EmotionJSX(PlateElement, _extends({
    as: "a",
    element: element,
    style: {
      textDecoration: 'underline',
      fontSize: 'inherit',
      maxWidth: '100%',
      fontWeight: 'inherit'
    }
  }, linkProps, rest), children);
}
export default LinkElement;