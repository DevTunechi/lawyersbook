import _styled from "@emotion/styled/base";
import React from 'react';
import PropTypes from 'prop-types';
import { Icon, buttons } from 'decap-cms-ui-default';
import { jsx as ___EmotionJSX } from "@emotion/react";
const StyledToolbarButton = /*#__PURE__*/_styled("button", {
  target: "eyszlec0",
  label: "StyledToolbarButton"
})(buttons.button, ";display:inline-block;padding:4px;margin:2px;border:none;background-color:", props => props.isActive ? '#e8f5fe' : 'transparent', ";font-size:16px;color:", props => props.isActive ? '#3a69c7' : 'inherit', ";cursor:pointer;&:disabled{cursor:auto;opacity:0.5;}", Icon, "{display:block;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvY29tcG9uZW50cy9Ub29sYmFyL1Rvb2xiYXJCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS3lDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvY29tcG9uZW50cy9Ub29sYmFyL1Rvb2xiYXJCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEljb24sIGJ1dHRvbnMgfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmNvbnN0IFN0eWxlZFRvb2xiYXJCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke2J1dHRvbnMuYnV0dG9ufTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmlzQWN0aXZlID8gJyNlOGY1ZmUnIDogJ3RyYW5zcGFyZW50Jyl9O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5pc0FjdGl2ZSA/ICcjM2E2OWM3JyA6ICdpbmhlcml0Jyl9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gICR7SWNvbn0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBUb29sYmFyQnV0dG9uKHsgdHlwZSwgbGFiZWwsIGljb24sIG9uQ2xpY2ssIGlzQWN0aXZlLCBkaXNhYmxlZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFRvb2xiYXJCdXR0b25cbiAgICAgIGlzQWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAgIG9uQ2xpY2s9e2UgPT4gb25DbGljayAmJiBvbkNsaWNrKGUsIHR5cGUpfVxuICAgICAgb25Nb3VzZURvd249e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgdGl0bGU9e2xhYmVsfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgID5cbiAgICAgIHtpY29uID8gPEljb24gdHlwZT17aWNvbn0gLz4gOiBsYWJlbH1cbiAgICA8L1N0eWxlZFRvb2xiYXJCdXR0b24+XG4gICk7XG59XG5cblRvb2xiYXJCdXR0b24ucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyQnV0dG9uO1xuIl19 */"));
function ToolbarButton({
  type,
  label,
  icon,
  onClick,
  isActive,
  disabled
}) {
  return ___EmotionJSX(StyledToolbarButton, {
    isActive: isActive,
    onClick: e => onClick && onClick(e, type),
    onMouseDown: e => e.preventDefault(),
    title: label,
    disabled: disabled
  }, icon ? ___EmotionJSX(Icon, {
    type: icon
  }) : label);
}
ToolbarButton.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool
};
export default ToolbarButton;