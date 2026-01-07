import { Link } from 'react-router-dom';

function Error() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Something went wrong</h1>
      <p>An unexpected error occurred. Please try again.</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Error;
