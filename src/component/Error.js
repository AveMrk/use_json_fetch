import useJsonFetch from "../hooks/useJsonFetch";
export default function Error() {
  const [{ data, loading, error }] = useJsonFetch(
    `http://localhost:7070/error`,
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
