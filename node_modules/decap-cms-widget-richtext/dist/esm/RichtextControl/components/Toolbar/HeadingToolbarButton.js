import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React from 'react';
import PropTypes from 'prop-types';
import { unwrapList } from '@platejs/list-classic';
import { Dropdown, DropdownButton, DropdownItem } from 'decap-cms-ui-default';
import { ParagraphPlugin, useEditorRef, useEditorSelector } from 'platejs/react';
import ToolbarButton from './ToolbarButton';
import { jsx as ___EmotionJSX } from "@emotion/react";
const ToolbarDropdownWrapper = /*#__PURE__*/_styled("div", {
  target: "ex9kp2e0",
  label: "ToolbarDropdownWrapper"
})(process.env.NODE_ENV === "production" ? {
  name: "11ffxfj",
  styles: "display:inline-block;position:relative"
} : {
  name: "11ffxfj",
  styles: "display:inline-block;position:relative/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvY29tcG9uZW50cy9Ub29sYmFyL0hlYWRpbmdUb29sYmFyQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN5QyIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvUmljaHRleHRDb250cm9sL2NvbXBvbmVudHMvVG9vbGJhci9IZWFkaW5nVG9vbGJhckJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgdW53cmFwTGlzdCB9IGZyb20gJ0BwbGF0ZWpzL2xpc3QtY2xhc3NpYyc7XG5pbXBvcnQgeyBEcm9wZG93biwgRHJvcGRvd25CdXR0b24sIERyb3Bkb3duSXRlbSB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcbmltcG9ydCB7IFBhcmFncmFwaFBsdWdpbiwgdXNlRWRpdG9yUmVmLCB1c2VFZGl0b3JTZWxlY3RvciB9IGZyb20gJ3BsYXRlanMvcmVhY3QnO1xuXG5pbXBvcnQgVG9vbGJhckJ1dHRvbiBmcm9tICcuL1Rvb2xiYXJCdXR0b24nO1xuXG5jb25zdCBUb29sYmFyRHJvcGRvd25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5mdW5jdGlvbiBIZWFkaW5nVG9vbGJhckJ1dHRvbih7IGRpc2FibGVkLCBpc1Zpc2libGUsIHQgfSkge1xuICBjb25zdCBoZWFkaW5nT3B0aW9ucyA9IHtcbiAgICAnaGVhZGluZy1vbmUnOiB0KCdlZGl0b3IuZWRpdG9yV2lkZ2V0cy5oZWFkaW5nT3B0aW9ucy5oZWFkaW5nT25lJyksXG4gICAgJ2hlYWRpbmctdHdvJzogdCgnZWRpdG9yLmVkaXRvcldpZGdldHMuaGVhZGluZ09wdGlvbnMuaGVhZGluZ1R3bycpLFxuICAgICdoZWFkaW5nLXRocmVlJzogdCgnZWRpdG9yLmVkaXRvcldpZGdldHMuaGVhZGluZ09wdGlvbnMuaGVhZGluZ1RocmVlJyksXG4gICAgJ2hlYWRpbmctZm91cic6IHQoJ2VkaXRvci5lZGl0b3JXaWRnZXRzLmhlYWRpbmdPcHRpb25zLmhlYWRpbmdGb3VyJyksXG4gICAgJ2hlYWRpbmctZml2ZSc6IHQoJ2VkaXRvci5lZGl0b3JXaWRnZXRzLmhlYWRpbmdPcHRpb25zLmhlYWRpbmdGaXZlJyksXG4gICAgJ2hlYWRpbmctc2l4JzogdCgnZWRpdG9yLmVkaXRvcldpZGdldHMuaGVhZGluZ09wdGlvbnMuaGVhZGluZ1NpeCcpLFxuICB9O1xuXG4gIC8vIE1hcCBzY2hlbWEgYnV0dG9uIG5hbWVzIHRvIFBsYXRlIGJsb2NrIHR5cGVzXG4gIGNvbnN0IGJ1dHRvblRvQmxvY2tUeXBlID0ge1xuICAgICdoZWFkaW5nLW9uZSc6ICdoMScsXG4gICAgJ2hlYWRpbmctdHdvJzogJ2gyJyxcbiAgICAnaGVhZGluZy10aHJlZSc6ICdoMycsXG4gICAgJ2hlYWRpbmctZm91cic6ICdoNCcsXG4gICAgJ2hlYWRpbmctZml2ZSc6ICdoNScsXG4gICAgJ2hlYWRpbmctc2l4JzogJ2g2JyxcbiAgfTtcblxuICBjb25zdCBibG9ja1R5cGVUb0J1dHRvbiA9IHtcbiAgICBoMTogJ2hlYWRpbmctb25lJyxcbiAgICBoMjogJ2hlYWRpbmctdHdvJyxcbiAgICBoMzogJ2hlYWRpbmctdGhyZWUnLFxuICAgIGg0OiAnaGVhZGluZy1mb3VyJyxcbiAgICBoNTogJ2hlYWRpbmctZml2ZScsXG4gICAgaDY6ICdoZWFkaW5nLXNpeCcsXG4gIH07XG5cbiAgY29uc3QgZWRpdG9yID0gdXNlRWRpdG9yUmVmKCk7XG5cbiAgY29uc3QgdmFsdWUgPSB1c2VFZGl0b3JTZWxlY3RvcihlZGl0b3IgPT4ge1xuICAgIGlmICghZWRpdG9yLmFwaS5pc0V4cGFuZGVkKCkpIHtcbiAgICAgIGNvbnN0IGVudHJ5ID0gZWRpdG9yLmFwaS5ibG9jaygpO1xuXG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5WzBdLnR5cGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFBhcmFncmFwaFBsdWdpbi5rZXk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoYnV0dG9uTmFtZSkge1xuICAgIGNvbnN0IGJsb2NrVHlwZSA9IGJ1dHRvblRvQmxvY2tUeXBlW2J1dHRvbk5hbWVdO1xuICAgIHVud3JhcExpc3QoZWRpdG9yKTtcbiAgICBlZGl0b3IudGYudG9nZ2xlQmxvY2soYmxvY2tUeXBlKTtcbiAgICBlZGl0b3IudGYuZm9jdXMoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtPYmplY3Qua2V5cyhoZWFkaW5nT3B0aW9ucykuc29tZShpc1Zpc2libGUpICYmIChcbiAgICAgICAgPFRvb2xiYXJEcm9wZG93bldyYXBwZXI+XG4gICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICBkcm9wZG93bldpZHRoPVwibWF4LWNvbnRlbnRcIlxuICAgICAgICAgICAgZHJvcGRvd25Ub3BPdmVybGFwPVwiMzZweFwiXG4gICAgICAgICAgICByZW5kZXJCdXR0b249eygpID0+IChcbiAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiaGVhZGluZ3NcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2VkaXRvci5lZGl0b3JXaWRnZXRzLm1hcmtkb3duLmhlYWRpbmdzJyl9XG4gICAgICAgICAgICAgICAgICBpY29uPVwiaE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9eyFkaXNhYmxlZCAmJiBibG9ja1R5cGVUb0J1dHRvblt2YWx1ZV0gIT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKGhlYWRpbmdPcHRpb25zKS5tYXAoXG4gICAgICAgICAgICAgICAgKG9wdGlvbktleSwgaWR4KSA9PlxuICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlKG9wdGlvbktleSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2hlYWRpbmdPcHRpb25zW29wdGlvbktleV19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtibG9ja1R5cGVUb0J1dHRvblt2YWx1ZV0gPT09IG9wdGlvbktleSA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZShvcHRpb25LZXkpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L1Rvb2xiYXJEcm9wZG93bldyYXBwZXI+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5IZWFkaW5nVG9vbGJhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGlzVmlzaWJsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZ1Rvb2xiYXJCdXR0b247XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
function HeadingToolbarButton({
  disabled,
  isVisible,
  t
}) {
  const headingOptions = {
    'heading-one': t('editor.editorWidgets.headingOptions.headingOne'),
    'heading-two': t('editor.editorWidgets.headingOptions.headingTwo'),
    'heading-three': t('editor.editorWidgets.headingOptions.headingThree'),
    'heading-four': t('editor.editorWidgets.headingOptions.headingFour'),
    'heading-five': t('editor.editorWidgets.headingOptions.headingFive'),
    'heading-six': t('editor.editorWidgets.headingOptions.headingSix')
  };

  // Map schema button names to Plate block types
  const buttonToBlockType = {
    'heading-one': 'h1',
    'heading-two': 'h2',
    'heading-three': 'h3',
    'heading-four': 'h4',
    'heading-five': 'h5',
    'heading-six': 'h6'
  };
  const blockTypeToButton = {
    h1: 'heading-one',
    h2: 'heading-two',
    h3: 'heading-three',
    h4: 'heading-four',
    h5: 'heading-five',
    h6: 'heading-six'
  };
  const editor = useEditorRef();
  const value = useEditorSelector(editor => {
    if (!editor.api.isExpanded()) {
      const entry = editor.api.block();
      if (entry) {
        return entry[0].type;
      }
    }
    return ParagraphPlugin.key;
  }, []);
  function handleChange(buttonName) {
    const blockType = buttonToBlockType[buttonName];
    unwrapList(editor);
    editor.tf.toggleBlock(blockType);
    editor.tf.focus();
  }
  return ___EmotionJSX(React.Fragment, null, Object.keys(headingOptions).some(isVisible) && ___EmotionJSX(ToolbarDropdownWrapper, null, ___EmotionJSX(Dropdown, {
    dropdownWidth: "max-content",
    dropdownTopOverlap: "36px",
    renderButton: () => ___EmotionJSX(DropdownButton, null, ___EmotionJSX(ToolbarButton, {
      type: "headings",
      label: t('editor.editorWidgets.markdown.headings'),
      icon: "hOptions",
      disabled: disabled,
      isActive: !disabled && blockTypeToButton[value] !== undefined
    }))
  }, !disabled && Object.keys(headingOptions).map((optionKey, idx) => isVisible(optionKey) && ___EmotionJSX(DropdownItem, {
    key: idx,
    label: headingOptions[optionKey],
    className: blockTypeToButton[value] === optionKey ? 'active' : '',
    onMouseDown: e => e.preventDefault(),
    onClick: () => handleChange(optionKey)
  })))));
}
HeadingToolbarButton.propTypes = {
  isVisible: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  t: PropTypes.func.isRequired
};
export default HeadingToolbarButton;