import useJsonFetch from "../hooks/useJsonFetch";
export default function ComponentUseFetch({url}) {
  const [data, loading, error] = useJsonFetch(
    url,
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
