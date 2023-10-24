import logo from './logo.svg';
import './App.css';
import useJsonFetch from "./hooks/useJsonFetch";
import Loading from "./component/Loading";
import Success from "./component/Success";
import Error from "./component/Error";

export default function App() {
  const [data, loading, error] = useJsonFetch(`http://localhost:7070/data`);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Loading />
      <Success />
      <Error />
    </div>
  );
}
