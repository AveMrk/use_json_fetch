import useJsonFetch from "../hooks/useJsonFetch";
export default function Loading() {
  const [{ data, loading, error }] = useJsonFetch(
    `http://localhost:7070/loading`,
    []
  );
  return (
    <div>
      {console.log(data)}
      {loading && <p className="loading">Loading...</p>}
      {data && <p className="success"> Data is loaded</p>}
      {error && <p className="error"> Error</p>}
    </div>
  );
}
