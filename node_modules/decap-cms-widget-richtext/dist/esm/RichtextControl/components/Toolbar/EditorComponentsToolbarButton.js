import _styled from "@emotion/styled/base";
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownButton, DropdownItem } from 'decap-cms-ui-default';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { useEditorRef } from 'platejs/react';
import ToolbarButton from './ToolbarButton';
import { jsx as ___EmotionJSX } from "@emotion/react";
const ToolbarDropdownWrapper = /*#__PURE__*/_styled("div", {
  target: "ehrzbyj0",
  label: "ToolbarDropdownWrapper"
})(process.env.NODE_ENV === "production" ? {
  name: "11ffxfj",
  styles: "display:inline-block;position:relative"
} : {
  name: "11ffxfj",
  styles: "display:inline-block;position:relative/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvY29tcG9uZW50cy9Ub29sYmFyL0VkaXRvckNvbXBvbmVudHNUb29sYmFyQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVV5QyIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvUmljaHRleHRDb250cm9sL2NvbXBvbmVudHMvVG9vbGJhci9FZGl0b3JDb21wb25lbnRzVG9vbGJhckJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBEcm9wZG93biwgRHJvcGRvd25CdXR0b24sIERyb3Bkb3duSXRlbSB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcbmltcG9ydCB7IExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IHVzZUVkaXRvclJlZiB9IGZyb20gJ3BsYXRlanMvcmVhY3QnO1xuXG5pbXBvcnQgVG9vbGJhckJ1dHRvbiBmcm9tICcuL1Rvb2xiYXJCdXR0b24nO1xuXG5jb25zdCBUb29sYmFyRHJvcGRvd25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5mdW5jdGlvbiBFZGl0b3JDb21wb25lbnRzVG9vbGJhckJ1dHRvbih7IGRpc2FibGVkLCBlZGl0b3JDb21wb25lbnRzLCBhbGxvd2VkRWRpdG9yQ29tcG9uZW50cywgdCB9KSB7XG4gIGNvbnN0IGVkaXRvciA9IHVzZUVkaXRvclJlZigpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIHBsdWdpbiA9PiB7XG4gICAgICBjb25zdCBkZWZhdWx0VmFsdWVzID0gcGx1Z2luLmZpZWxkc1xuICAgICAgICAudG9NYXAoKVxuICAgICAgICAubWFwS2V5cygoXywgZmllbGQpID0+IGZpZWxkLmdldCgnbmFtZScpKVxuICAgICAgICAubWFwKGZpZWxkID0+IGZpZWxkLmdldCgnZGVmYXVsdCcsICcnKSk7XG5cbiAgICAgIGVkaXRvci50Zi5pbnNlcnROb2RlcyhcbiAgICAgICAge1xuICAgICAgICAgIGNoaWxkcmVuOiBbeyB0ZXh0OiAnJyB9XSxcbiAgICAgICAgICB0eXBlOiAnc2hvcnRjb2RlJyxcbiAgICAgICAgICBpc0VsZW1lbnQ6IHRydWUsXG4gICAgICAgICAgaXNWb2lkOiB0cnVlLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHNob3J0Y29kZTogcGx1Z2luLmlkLFxuICAgICAgICAgICAgc2hvcnRjb2RlTmV3OiB0cnVlLFxuICAgICAgICAgICAgc2hvcnRjb2RlRGF0YTogZGVmYXVsdFZhbHVlcy50b0pTKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJlbW92ZUVtcHR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9LFxuICAgIFtlZGl0b3JdLFxuICApO1xuXG4gIGNvbnN0IGVkaXRvckNvbXBvbmVudE9wdGlvbnMgPSBlZGl0b3JDb21wb25lbnRzXG4gICAgPyBlZGl0b3JDb21wb25lbnRzXG4gICAgICAgIC50b0xpc3QoKVxuICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IChhbGxvd2VkRWRpdG9yQ29tcG9uZW50cyA/IGFsbG93ZWRFZGl0b3JDb21wb25lbnRzLmluY2x1ZGVzKGlkKSA6IHRydWUpKVxuICAgIDogTGlzdCgpO1xuXG4gIGNvbnN0IHNob3dFZGl0b3JDb21wb25lbnRzID0gZWRpdG9yQ29tcG9uZW50T3B0aW9ucy5zaXplID49IDE7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dFZGl0b3JDb21wb25lbnRzICYmIChcbiAgICAgICAgPFRvb2xiYXJEcm9wZG93bldyYXBwZXI+XG4gICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICBkcm9wZG93bldpZHRoPVwibWF4LWNvbnRlbnRcIlxuICAgICAgICAgICAgZHJvcGRvd25Ub3BPdmVybGFwPVwiMzZweFwiXG4gICAgICAgICAgICByZW5kZXJCdXR0b249eygpID0+IChcbiAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiaGVhZGluZ3NcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2VkaXRvci5lZGl0b3JXaWRnZXRzLm1hcmtkb3duLmFkZENvbXBvbmVudCcpfVxuICAgICAgICAgICAgICAgICAgaWNvbj1cImFkZC13aXRoXCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWRpc2FibGVkICYmXG4gICAgICAgICAgICAgIGVkaXRvckNvbXBvbmVudE9wdGlvbnMubWFwKG9wdGlvbiA9PiAoXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24uaWR9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZShvcHRpb24pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvVG9vbGJhckRyb3Bkb3duV3JhcHBlcj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbkVkaXRvckNvbXBvbmVudHNUb29sYmFyQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgZWRpdG9yQ29tcG9uZW50czogSW1tdXRhYmxlUHJvcFR5cGVzLm1hcCxcbiAgYWxsb3dlZEVkaXRvckNvbXBvbmVudHM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JDb21wb25lbnRzVG9vbGJhckJ1dHRvbjtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
function EditorComponentsToolbarButton({
  disabled,
  editorComponents,
  allowedEditorComponents,
  t
}) {
  const editor = useEditorRef();
  const handleChange = useCallback(plugin => {
    const defaultValues = plugin.fields.toMap().mapKeys((_, field) => field.get('name')).map(field => field.get('default', ''));
    editor.tf.insertNodes({
      children: [{
        text: ''
      }],
      type: 'shortcode',
      isElement: true,
      isVoid: true,
      data: {
        shortcode: plugin.id,
        shortcodeNew: true,
        shortcodeData: defaultValues.toJS()
      }
    }, {
      removeEmpty: true
    });
  }, [editor]);
  const editorComponentOptions = editorComponents ? editorComponents.toList().filter(({
    id
  }) => allowedEditorComponents ? allowedEditorComponents.includes(id) : true) : List();
  const showEditorComponents = editorComponentOptions.size >= 1;
  return ___EmotionJSX(React.Fragment, null, showEditorComponents && ___EmotionJSX(ToolbarDropdownWrapper, null, ___EmotionJSX(Dropdown, {
    dropdownWidth: "max-content",
    dropdownTopOverlap: "36px",
    renderButton: () => ___EmotionJSX(DropdownButton, null, ___EmotionJSX(ToolbarButton, {
      type: "headings",
      label: t('editor.editorWidgets.markdown.addComponent'),
      icon: "add-with",
      disabled: disabled,
      isActive: false
    }))
  }, !disabled && editorComponentOptions.map(option => ___EmotionJSX(DropdownItem, {
    key: option.id,
    label: option.label,
    className: '',
    onMouseDown: e => e.preventDefault(),
    onClick: () => handleChange(option)
  })))));
}
EditorComponentsToolbarButton.propTypes = {
  editorComponents: ImmutablePropTypes.map,
  allowedEditorComponents: ImmutablePropTypes.list,
  disabled: PropTypes.bool,
  t: PropTypes.func.isRequired
};
export default EditorComponentsToolbarButton;