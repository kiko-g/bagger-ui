type SyntaxHighlighterStyle = { [key: string]: React.CSSProperties } | undefined

const colors = {
  keyword: "#bb88ff",
  string: "#61e57e",
  function: "#55ffff",
  variable: "#ffffff",
  class: "#ff88aa",
  tag: "#60a5fa",
}

export const baggerDark: SyntaxHighlighterStyle = {
  'code[class*="language-"]': {
    color: "#e3eaf2",
    background: "none",
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#e3eaf2",
    background: "#111b27",
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
  },
  'pre[class*="language-"]::-moz-selection': {
    background: "#3c526d",
  },
  'pre[class*="language-"] ::-moz-selection': {
    background: "#3c526d",
  },
  'code[class*="language-"]::-moz-selection': {
    background: "#3c526d",
  },
  'code[class*="language-"] ::-moz-selection': {
    background: "#3c526d",
  },
  'pre[class*="language-"]::selection': {
    background: "#3c526d",
  },
  'pre[class*="language-"] ::selection': {
    background: "#3c526d",
  },
  'code[class*="language-"]::selection': {
    background: "#3c526d",
  },
  'code[class*="language-"] ::selection': {
    background: "#3c526d",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#111b27",
    padding: "0.1em 0.3em",
    borderRadius: "0.3em",
    whiteSpace: "normal",
  },
  comment: {
    color: "#8da1b9",
  },
  prolog: {
    color: "#8da1b9",
  },
  doctype: {
    color: "#8da1b9",
  },
  cdata: {
    color: "#8da1b9",
  },
  punctuation: {
    color: "#e3eaf2",
  },
  "delimiter.important": {
    color: colors.variable,
    fontWeight: "inherit",
  },
  "selector.parent": {
    color: colors.variable,
  },
  tag: {
    color: colors.tag,
  },
  "tag.punctuation": {
    color: colors.variable,
  },
  "attr-name": {
    color: colors.class,
  },
  boolean: {
    color: colors.class,
  },
  "boolean.important": {
    color: colors.class,
  },
  number: {
    color: colors.class,
  },
  constant: {
    color: colors.class,
  },
  "selector.attribute": {
    color: colors.class,
  },
  "class-name": {
    color: "#6cb8e6",
  },
  key: {
    color: "#6cb8e6",
  },
  parameter: {
    color: "#6cb8e6",
  },
  property: {
    color: "#6cb8e6",
  },
  "property-access": {
    color: "#6cb8e6",
  },
  variable: {
    color: "#6cb8e6",
  },
  "attr-value": {
    color: colors.string,
  },
  inserted: {
    color: colors.string,
  },
  color: {
    color: colors.string,
  },
  "selector.value": {
    color: colors.string,
  },
  string: {
    color: colors.string,
  },
  "string.url-link": {
    color: colors.string,
  },
  builtin: {
    color: "#f4adf4",
  },
  "keyword-array": {
    color: "#f4adf4",
  },
  package: {
    color: "#f4adf4",
  },
  regex: {
    color: "#f4adf4",
  },
  function: {
    color: colors.function,
  },
  "selector.class": {
    color: colors.function,
  },
  "selector.id": {
    color: colors.function,
  },
  "atrule.rule": {
    color: colors.keyword,
  },
  combinator: {
    color: colors.keyword,
  },
  keyword: {
    color: colors.keyword,
  },
  operator: {
    color: colors.keyword,
  },
  "pseudo-class": {
    color: colors.keyword,
  },
  "pseudo-element": {
    color: colors.keyword,
  },
  selector: {
    color: colors.keyword,
  },
  unit: {
    color: colors.keyword,
  },
  deleted: {
    color: "#cd6660",
  },
  important: {
    color: "#cd6660",
    fontWeight: "bold",
  },
  "keyword-this": {
    color: "#6cb8e6",
    fontWeight: "bold",
  },
  this: {
    color: "#6cb8e6",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  entity: {
    cursor: "help",
  },
  ".language-markdown .token.title": {
    color: "#6cb8e6",
    fontWeight: "bold",
  },
  ".language-markdown .token.title .token.punctuation": {
    color: "#6cb8e6",
    fontWeight: "bold",
  },
  ".language-markdown .token.blockquote.punctuation": {
    color: "#f4adf4",
  },
  ".language-markdown .token.code": {
    color: "#66cccc",
  },
  ".language-markdown .token.hr.punctuation": {
    color: "#6cb8e6",
  },
  ".language-markdown .token.url .token.content": {
    color: colors.string,
  },
  ".language-markdown .token.url-link": {
    color: colors.class,
  },
  ".language-markdown .token.list.punctuation": {
    color: "#f4adf4",
  },
  ".language-markdown .token.table-header": {
    color: "#e3eaf2",
  },
  ".language-json .token.operator": {
    color: "#e3eaf2",
  },
  ".language-scss .token.variable": {
    color: "#66cccc",
  },
  "token.tab:not(:empty):before": {
    color: "#8da1b9",
  },
  "token.cr:before": {
    color: "#8da1b9",
  },
  "token.lf:before": {
    color: "#8da1b9",
  },
  "token.space:before": {
    color: "#8da1b9",
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
    color: "#111b27",
    background: "#6cb8e6",
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
    color: "#111b27",
    background: "#6cb8e6",
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
    color: "#111b27",
    background: "#6cb8e6da",
    textDecoration: "none",
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
    color: "#111b27",
    background: "#6cb8e6da",
    textDecoration: "none",
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
    color: "#111b27",
    background: "#6cb8e6da",
    textDecoration: "none",
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
    color: "#111b27",
    background: "#6cb8e6da",
    textDecoration: "none",
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
    color: "#111b27",
    background: "#8da1b9",
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
    color: "#111b27",
    background: "#8da1b9",
  },
  "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
    color: "#111b27",
    background: "#8da1b9",
  },
  ".line-highlight.line-highlight": {
    background: "linear-gradient(to right, #3c526d5f 70%, #3c526d55)",
  },
  ".line-highlight.line-highlight:before": {
    backgroundColor: "#8da1b9",
    color: "#111b27",
    boxShadow: "0 1px #3c526d",
  },
  ".line-highlight.line-highlight[data-end]:after": {
    backgroundColor: "#8da1b9",
    color: "#111b27",
    boxShadow: "0 1px #3c526d",
  },
  "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
    backgroundColor: "#8da1b918",
  },
  ".line-numbers.line-numbers .line-numbers-rows": {
    borderRight: "1px solid #0b121b",
    background: "#0b121b7a",
  },
  ".line-numbers .line-numbers-rows > span:before": {
    color: "#8da1b9da",
  },
  ".rainbow-braces .token.token.punctuation.brace-level-1": {
    color: colors.class,
  },
  ".rainbow-braces .token.token.punctuation.brace-level-5": {
    color: colors.class,
  },
  ".rainbow-braces .token.token.punctuation.brace-level-9": {
    color: colors.class,
  },
  ".rainbow-braces .token.token.punctuation.brace-level-2": {
    color: "#f4adf4",
  },
  ".rainbow-braces .token.token.punctuation.brace-level-6": {
    color: "#f4adf4",
  },
  ".rainbow-braces .token.token.punctuation.brace-level-10": {
    color: "#f4adf4",
  },
  ".rainbow-braces .token.token.punctuation.brace-level-3": {
    color: "#6cb8e6",
  },
  ".rainbow-braces .token.token.punctuation.brace-level-7": {
    color: "#6cb8e6",
  },
  ".rainbow-braces .token.token.punctuation.brace-level-11": {
    color: "#6cb8e6",
  },
  ".rainbow-braces .token.token.punctuation.brace-level-4": {
    color: colors.function,
  },
  ".rainbow-braces .token.token.punctuation.brace-level-8": {
    color: colors.function,
  },
  ".rainbow-braces .token.token.punctuation.brace-level-12": {
    color: colors.function,
  },
  "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
    backgroundColor: "#cd66601f",
  },
  "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
    backgroundColor: "#cd66601f",
  },
  "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
    backgroundColor: "#91d0761f",
  },
  "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
    backgroundColor: "#91d0761f",
  },
  ".command-line .command-line-prompt": {
    borderRight: "1px solid #0b121b",
  },
  ".command-line .command-line-prompt > span:before": {
    color: "#8da1b9da",
  },
}
