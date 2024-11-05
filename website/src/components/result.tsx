import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  results: { functionName: string; dateString: string }[];
};

export default function ResultComponent({ results }: Props) {
  return (
    <>
      {results.map(result => (
        <div key={result.functionName} className="pt-4">
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {`${result.functionName} // ${result.dateString}`}
          </SyntaxHighlighter>
        </div>
      ))}
    </>
  );
}
