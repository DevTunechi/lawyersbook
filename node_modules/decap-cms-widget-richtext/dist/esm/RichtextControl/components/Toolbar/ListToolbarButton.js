import React from 'react';
import { useListToolbarButton, useListToolbarButtonState } from '@platejs/list-classic/react';
import ToolbarButton from './ToolbarButton';
import { jsx as ___EmotionJSX } from "@emotion/react";
function ListToolbarButton({
  label,
  icon,
  type,
  disabled
}) {
  const state = useListToolbarButtonState({
    nodeType: type
  });
  const {
    props: {
      pressed,
      onClick
    }
  } = useListToolbarButton(state);
  return ___EmotionJSX(ToolbarButton, {
    label: label,
    icon: icon,
    onClick: onClick,
    isActive: pressed,
    disabled: disabled
  });
}
export default ListToolbarButton;