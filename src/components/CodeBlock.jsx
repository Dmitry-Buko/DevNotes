import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import 'prism-themes/themes/prism-vsc-dark-plus.css';

const CodeBlock = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
console.log(JSON.stringify(code))
  return (
    <pre>
      <code className="language-jsx">{code}</code>
    </pre>
  );
};

export default CodeBlock;
