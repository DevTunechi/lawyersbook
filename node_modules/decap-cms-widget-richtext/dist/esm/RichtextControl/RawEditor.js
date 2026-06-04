import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { css, ClassNames } from '@emotion/react';
import { lengths, fonts } from 'decap-cms-ui-default';
import { ParagraphPlugin, Plate, usePlateEditor } from 'platejs/react';
import { SingleBlockPlugin } from 'platejs';
import { editorContainerStyles, EditorControlBar } from '../styles';
import defaultEmptyBlock from './defaultEmptyBlock';
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import ParagraphElement from './components/Element/ParagraphElement';
import { jsx as ___EmotionJSX } from "@emotion/react";
function editorStyles({
  minimal
}) {
  return /*#__PURE__*/css("position:relative;overflow:hidden;overflow-x:auto;min-height:", minimal ? 'auto' : lengths.richTextEditorMinHeight, ";font-family:", fonts.mono, ";display:flex;flex-direction:column;;label:editorStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvUmF3RWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVZIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9SaWNodGV4dENvbnRyb2wvUmF3RWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1tdXRhYmxlUHJvcFR5cGVzIGZyb20gJ3JlYWN0LWltbXV0YWJsZS1wcm9wdHlwZXMnO1xuaW1wb3J0IHsgY3NzLCBDbGFzc05hbWVzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgbGVuZ3RocywgZm9udHMgfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5pbXBvcnQgeyBQYXJhZ3JhcGhQbHVnaW4sIFBsYXRlLCB1c2VQbGF0ZUVkaXRvciB9IGZyb20gJ3BsYXRlanMvcmVhY3QnO1xuaW1wb3J0IHsgU2luZ2xlQmxvY2tQbHVnaW4gfSBmcm9tICdwbGF0ZWpzJztcblxuaW1wb3J0IHsgZWRpdG9yQ29udGFpbmVyU3R5bGVzLCBFZGl0b3JDb250cm9sQmFyIH0gZnJvbSAnLi4vc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0RW1wdHlCbG9jayBmcm9tICcuL2RlZmF1bHRFbXB0eUJsb2NrJztcbmltcG9ydCBUb29sYmFyIGZyb20gJy4vY29tcG9uZW50cy9Ub29sYmFyJztcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9jb21wb25lbnRzL0VkaXRvcic7XG5pbXBvcnQgUGFyYWdyYXBoRWxlbWVudCBmcm9tICcuL2NvbXBvbmVudHMvRWxlbWVudC9QYXJhZ3JhcGhFbGVtZW50JztcblxuZnVuY3Rpb24gZWRpdG9yU3R5bGVzKHsgbWluaW1hbCB9KSB7XG4gIHJldHVybiBjc3NgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAke21pbmltYWwgPyAnYXV0bycgOiBsZW5ndGhzLnJpY2hUZXh0RWRpdG9yTWluSGVpZ2h0fTtcbiAgICBmb250LWZhbWlseTogJHtmb250cy5tb25vfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGA7XG59XG5cbmZ1bmN0aW9uIFJhd0VkaXRvcihwcm9wcykge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgZmllbGQsIGlzU2hvd01vZGVUb2dnbGUsIHQsIG9uQ2hhbmdlLCB2YWx1ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaW5pdGlhbFZhbHVlID0gW2RlZmF1bHRFbXB0eUJsb2NrKHZhbHVlIHx8ICcnKV07XG5cbiAgY29uc3QgZWRpdG9yID0gdXNlUGxhdGVFZGl0b3Ioe1xuICAgIHBsdWdpbnM6IFtTaW5nbGVCbG9ja1BsdWdpbl0sXG4gICAgb3ZlcnJpZGU6IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgW1BhcmFncmFwaFBsdWdpbi5rZXldOiBQYXJhZ3JhcGhFbGVtZW50LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHZhbHVlOiBpbml0aWFsVmFsdWUsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLnBlbmRpbmdGb2N1cykge1xuICAgICAgZWRpdG9yLnRmLmZvY3VzKHsgZWRnZTogJ2VuZEVkaXRvcicgfSk7XG4gICAgICBwcm9wcy5wZW5kaW5nRm9jdXMoKTtcbiAgICB9XG4gIH0sIFtwcm9wcy5wZW5kaW5nRm9jdXNdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVUb2dnbGVNb2RlKCkge1xuICAgIHByb3BzLm9uTW9kZSgncmljaF90ZXh0Jyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoeyB2YWx1ZSB9KSB7XG4gICAgb25DaGFuZ2UodmFsdWUubWFwKGxpbmUgPT4gbGluZS5jaGlsZHJlblswXS50ZXh0KS5qb2luKCdcXG4nKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQbGF0ZSBlZGl0b3I9e2VkaXRvcn0gdmFsdWU9e2luaXRpYWxWYWx1ZX0gaW5pdGlhbFZhbHVlPXtpbml0aWFsVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgPENsYXNzTmFtZXM+XG4gICAgICAgIHsoeyBjeCwgY3NzIH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICAgICAke2VkaXRvckNvbnRhaW5lclN0eWxlc31cbiAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEVkaXRvckNvbnRyb2xCYXI+XG4gICAgICAgICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgICAgICAgb25Ub2dnbGVNb2RlPXtoYW5kbGVUb2dnbGVNb2RlfVxuICAgICAgICAgICAgICAgIGJ1dHRvbnM9e2ZpZWxkLmdldCgnYnV0dG9ucycpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgcmF3TW9kZVxuICAgICAgICAgICAgICAgIGlzU2hvd01vZGVUb2dnbGU9e2lzU2hvd01vZGVUb2dnbGV9XG4gICAgICAgICAgICAgICAgdD17dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRWRpdG9yQ29udHJvbEJhcj5cbiAgICAgICAgICAgIDxkaXYgY3NzPXtlZGl0b3JTdHlsZXMoeyBtaW5pbWFsOiBmaWVsZC5nZXQoJ21pbmltYWwnKSB9KX0+XG4gICAgICAgICAgICAgIDxFZGl0b3IgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9DbGFzc05hbWVzPlxuICAgIDwvUGxhdGU+XG4gICk7XG59XG5cblJhd0VkaXRvci5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbk1vZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmllbGQ6IEltbXV0YWJsZVByb3BUeXBlcy5tYXAuaXNSZXF1aXJlZCxcbiAgaXNTaG93TW9kZVRvZ2dsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhd0VkaXRvcjtcbiJdfQ== */"));
}
function RawEditor(props) {
  const {
    className,
    field,
    isShowModeToggle,
    t,
    onChange,
    value
  } = props;
  const initialValue = [defaultEmptyBlock(value || '')];
  const editor = usePlateEditor({
    plugins: [SingleBlockPlugin],
    override: {
      components: {
        [ParagraphPlugin.key]: ParagraphElement
      }
    },
    value: initialValue
  });
  useEffect(() => {
    if (props.pendingFocus) {
      editor.tf.focus({
        edge: 'endEditor'
      });
      props.pendingFocus();
    }
  }, [props.pendingFocus]);
  function handleToggleMode() {
    props.onMode('rich_text');
  }
  function handleChange({
    value
  }) {
    onChange(value.map(line => line.children[0].text).join('\n'));
  }
  return ___EmotionJSX(Plate, {
    editor: editor,
    value: initialValue,
    initialValue: initialValue,
    onChange: handleChange
  }, ___EmotionJSX(ClassNames, null, ({
    cx,
    css
  }) => ___EmotionJSX("div", {
    className: cx(className, css`
                ${editorContainerStyles}
              `)
  }, ___EmotionJSX(EditorControlBar, null, ___EmotionJSX(Toolbar, {
    onToggleMode: handleToggleMode,
    buttons: field.get('buttons'),
    disabled: true,
    rawMode: true,
    isShowModeToggle: isShowModeToggle,
    t: t
  })), ___EmotionJSX("div", {
    css: editorStyles({
      minimal: field.get('minimal')
    })
  }, ___EmotionJSX(Editor, null)))));
}
RawEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  onMode: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  field: ImmutablePropTypes.map.isRequired,
  isShowModeToggle: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};
export default RawEditor;