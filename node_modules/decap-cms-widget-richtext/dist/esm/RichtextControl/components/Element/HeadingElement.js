import _styled from "@emotion/styled/base";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { jsx as ___EmotionJSX } from "@emotion/react";
const headingVariants = {
  h1: {
    fontSize: '32px',
    marginTop: '16px'
  },
  h2: {
    fontSize: '24px',
    marginTop: '12px'
  },
  h3: {
    fontSize: '20px'
  },
  h4: {
    fontSize: '18px',
    marginTop: '8px'
  },
  h5: {
    fontSize: '16px',
    marginTop: '8px'
  },
  h6: {
    fontSize: '16px',
    marginTop: '8px'
  }
};
const StyledHeading = /*#__PURE__*/_styled("h1", {
  target: "e1kfgbz20",
  label: "StyledHeading"
})("font-weight:700;line-height:1;margin-top:", props => props.isFirstBlock ? '0' : headingVariants[props.variant].marginTop, ";font-size:", props => headingVariants[props.variant].fontSize, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvY29tcG9uZW50cy9FbGVtZW50L0hlYWRpbmdFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCK0IiLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL1JpY2h0ZXh0Q29udHJvbC9jb21wb25lbnRzL0VsZW1lbnQvSGVhZGluZ0VsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5jb25zdCBoZWFkaW5nVmFyaWFudHMgPSB7XG4gIGgxOiB7XG4gICAgZm9udFNpemU6ICczMnB4JyxcbiAgICBtYXJnaW5Ub3A6ICcxNnB4JyxcbiAgfSxcbiAgaDI6IHtcbiAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgIG1hcmdpblRvcDogJzEycHgnLFxuICB9LFxuICBoMzoge1xuICAgIGZvbnRTaXplOiAnMjBweCcsXG4gIH0sXG4gIGg0OiB7XG4gICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICBtYXJnaW5Ub3A6ICc4cHgnLFxuICB9LFxuICBoNToge1xuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgbWFyZ2luVG9wOiAnOHB4JyxcbiAgfSxcbiAgaDY6IHtcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIG1hcmdpblRvcDogJzhweCcsXG4gIH0sXG59O1xuXG5jb25zdCBTdHlsZWRIZWFkaW5nID0gc3R5bGVkLmgxYFxuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PiAocHJvcHMuaXNGaXJzdEJsb2NrID8gJzAnIDogaGVhZGluZ1ZhcmlhbnRzW3Byb3BzLnZhcmlhbnRdLm1hcmdpblRvcCl9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gaGVhZGluZ1ZhcmlhbnRzW3Byb3BzLnZhcmlhbnRdLmZvbnRTaXplfTtcbmA7XG5cbmZ1bmN0aW9uIEhlYWRpbmdFbGVtZW50KHsgdmFyaWFudCA9ICdoMScsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHsgZWxlbWVudCwgZWRpdG9yIH0gPSBwcm9wcztcbiAgY29uc3QgaXNGaXJzdEJsb2NrID0gZWxlbWVudCA9PT0gZWRpdG9yLmNoaWxkcmVuWzBdO1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRIZWFkaW5nIGFzQ2hpbGQgey4uLnByb3BzfSBpc0ZpcnN0QmxvY2s9e2lzRmlyc3RCbG9ja30gdmFyaWFudD17dmFyaWFudH0gYXM9e3ZhcmlhbnR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3R5bGVkSGVhZGluZz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZ0VsZW1lbnQ7XG4iXX0= */"));
function HeadingElement({
  variant = 'h1',
  children,
  ...props
}) {
  const {
    element,
    editor
  } = props;
  const isFirstBlock = element === editor.children[0];
  return ___EmotionJSX(StyledHeading, _extends({
    asChild: true
  }, props, {
    isFirstBlock: isFirstBlock,
    variant: variant,
    as: variant
  }), children);
}
export default HeadingElement;