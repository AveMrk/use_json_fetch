import './App.css';
import useJsonFetch from "./hooks/useJsonFetch";
import ComponentUseFetch from './component/ComponentUseFetch';

export default function App() {
  const [data, loading, error] = useJsonFetch(`http://localhost:7070/data`);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ComponentUseFetch url={`http://localhost:7070/http://localhost:7070/data`}/>
      <ComponentUseFetch url={`http://localhost:7070/http://localhost:7070/loading`}/>
      <ComponentUseFetch url={`http://localhost:7070/http://localhost:7070/error`}/>
    </div>
  );
}
