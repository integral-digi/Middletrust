import { codeNode, codePython, codePHP, codeGolang } from "./CodeAPI";

export const code = [codeNode, codePython, codePHP, codeGolang];

export const CodeSnippet = ({ code }: any) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    // Code copied to clipboard
  };

  return (
    <div className="text-white">
      <pre>{code}</pre>
      <button
        onClick={copyToClipboard}
        aria-label="Copy code to clipboard"
        role="button"
        className=""
      >
        <img src="copy.svg" className="h-6 w-6"/>
      </button>
    </div>
  );
};