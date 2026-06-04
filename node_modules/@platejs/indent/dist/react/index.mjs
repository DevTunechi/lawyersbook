// src/react/IndentPlugin.tsx
import { toPlatePlugin } from "platejs/react";

// src/lib/BaseIndentPlugin.ts
import { createTSlatePlugin, KEYS } from "platejs";

// src/lib/withIndent.ts
import { getInjectMatch } from "platejs";

// src/lib/transforms/setIndent.ts
var setIndent = (editor, {
  getNodesOptions,
  offset = 1,
  setNodesProps,
  unsetNodesProps = []
}) => {
  const { nodeKey } = editor.getInjectProps(BaseIndentPlugin);
  const _nodes = editor.api.nodes({
    block: true,
    mode: "lowest",
    ...getNodesOptions
  });
  const nodes = Array.from(_nodes);
  editor.tf.withoutNormalizing(() => {
    nodes.forEach(([node, path]) => {
      const blockIndent = node[nodeKey] ?? 0;
      const newIndent = blockIndent + offset;
      const props = setNodesProps?.({ indent: newIndent }) ?? {};
      if (newIndent <= 0) {
        editor.tf.unsetNodes([nodeKey, ...unsetNodesProps], {
          at: path
        });
      } else {
        editor.tf.setNodes({ [nodeKey]: newIndent, ...props }, { at: path });
      }
    });
  });
};

// src/lib/transforms/indent.ts
var indent = (editor, options) => {
  setIndent(editor, { offset: 1, ...options });
};

// src/lib/transforms/outdent.ts
var outdent = (editor, options) => {
  setIndent(editor, { offset: -1, ...options });
};

// src/lib/withIndent.ts
var withIndent = ({
  editor,
  getOptions,
  plugin,
  tf: { normalizeNode, tab }
}) => {
  return {
    transforms: {
      normalizeNode([node, path]) {
        const { indentMax } = getOptions();
        const element = node;
        const { type } = element;
        const match = getInjectMatch(editor, plugin);
        if (type) {
          if (match(element, path)) {
            if (indentMax && element.indent && element.indent > indentMax) {
              editor.tf.setNodes({ indent: indentMax }, { at: path });
              return;
            }
          } else if (element.indent) {
            editor.tf.unsetNodes("indent", { at: path });
            return;
          }
        }
        return normalizeNode([node, path]);
      },
      tab: (options) => {
        const apply = () => {
          const match = getInjectMatch(editor, plugin);
          const entry = editor.api.block();
          if (!entry) return;
          const [element, path] = entry;
          if (!match(element, path)) return;
          if (options.reverse) {
            outdent(editor);
          } else {
            indent(editor);
          }
          return true;
        };
        if (apply()) return true;
        return tab(options);
      }
    }
  };
};

// src/lib/BaseIndentPlugin.ts
var BaseIndentPlugin = createTSlatePlugin({
  key: KEYS.indent,
  inject: {
    isBlock: true,
    nodeProps: {
      nodeKey: "indent",
      styleKey: "marginLeft",
      transformNodeValue: ({ getOptions, nodeValue }) => {
        const { offset, unit } = getOptions();
        return nodeValue * offset + unit;
      }
    },
    targetPlugins: [KEYS.p]
  },
  options: {
    offset: 24,
    unit: "px"
  }
}).overrideEditor(withIndent);

// src/react/IndentPlugin.tsx
var IndentPlugin = toPlatePlugin(BaseIndentPlugin);

// src/react/hooks/useIndentButton.ts
import { useEditorRef } from "platejs/react";
var useIndentButton = () => {
  const editor = useEditorRef();
  return {
    props: {
      onClick: () => {
        indent(editor);
      },
      onMouseDown: (e) => {
        e.preventDefault();
      }
    }
  };
};

// src/react/hooks/useOutdentButton.ts
import { useEditorRef as useEditorRef2 } from "platejs/react";
var useOutdentButton = () => {
  const editor = useEditorRef2();
  return {
    props: {
      onClick: () => {
        outdent(editor);
      },
      onMouseDown: (e) => {
        e.preventDefault();
      }
    }
  };
};
export {
  IndentPlugin,
  useIndentButton,
  useOutdentButton
};
//# sourceMappingURL=index.mjs.map