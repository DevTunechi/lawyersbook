function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { PlateElement } from 'platejs/react';
import { jsx as ___EmotionJSX } from "@emotion/react";
function isAbsoluteAssetUrl(url) {
  return /^(?:[a-z]+:)?\/\//i.test(url) || url.startsWith('data:') || url.startsWith('blob:');
}
function resolveImageSource(url, getAsset, field) {
  if (!url) {
    return '';
  }
  if (!getAsset || isAbsoluteAssetUrl(url)) {
    return url;
  }
  const asset = getAsset(url, field);
  return asset && typeof asset.toString === 'function' ? asset.toString() : asset;
}
function ImageElement({
  children,
  element,
  getAsset,
  field,
  ...props
}) {
  const {
    alt,
    title,
    url
  } = element?.data || {};
  const src = resolveImageSource(url, getAsset, field);
  return ___EmotionJSX(PlateElement, _extends({
    as: "span",
    element: element,
    contentEditable: false,
    style: {
      display: 'inline-block'
    }
  }, props), ___EmotionJSX("img", {
    src: src || '',
    alt: alt || '',
    title: title || '',
    style: {
      maxWidth: '100%',
      height: 'auto',
      verticalAlign: 'middle'
    }
  }), children);
}
export default ImageElement;