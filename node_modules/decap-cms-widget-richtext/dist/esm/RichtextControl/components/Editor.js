import React from 'react';
import { PlateContent } from 'platejs/react';
import { ClassNames } from '@emotion/react';
import { jsx as ___EmotionJSX } from "@emotion/react";
function Editor(props) {
  const {
    isDisabled,
    onPaste
  } = props;
  return ___EmotionJSX(ClassNames, null, ({
    css
  }) => ___EmotionJSX(PlateContent, {
    className: css`
            flex-grow: 1;
            padding: 8px 20px 0;
            outline: none;
          `,
    disableDefaultStyles: true,
    readOnly: isDisabled,
    "aria-disabled": isDisabled,
    onPaste: onPaste
  }));
}
export default Editor;