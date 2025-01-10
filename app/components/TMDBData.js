
export default function TMDBData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!data) {
      fetch('/tmdb')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('Failed to fetch data.');
        })
        .then((data) => {
          if (data) {
            setData(data);
          } else {
            setError('Failed to fetch data.');
          }
        })
        .catch((err) => {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('Failed to fetch data.');
          }
        });
    }
  }, [data]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      {data && (
        <pre>
          {JSON.stringify(data, (key, value) =>
            typeof value === 'object' && value !== null
              ? value
              : String(value)
          )}
        </pre>
      )}
      {!data && <p>Loading...</p>}
    </div>
  );
}
