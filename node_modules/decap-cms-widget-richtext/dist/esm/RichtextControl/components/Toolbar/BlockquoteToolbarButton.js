function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { useEditorRef, useEditorSelector } from 'platejs/react';
import { BlockquotePlugin } from '@platejs/basic-nodes/react';
import { unwrapList } from '@platejs/list-classic';
import ToolbarButton from './ToolbarButton';
import { jsx as ___EmotionJSX } from "@emotion/react";
function BlockquoteToolbarButton(props) {
  const editor = useEditorRef();
  const pressed = useEditorSelector(editor => !!editor.api.node({
    match: {
      type: BlockquotePlugin.key
    }
  }), []);
  function handleClick() {
    unwrapList(editor);
    editor.tf.toggleBlock(BlockquotePlugin.key, {
      wrap: true
    });
    editor.tf.focus();
  }
  return ___EmotionJSX(ToolbarButton, _extends({
    isActive: pressed,
    onClick: handleClick
  }, props));
}
export default BlockquoteToolbarButton;