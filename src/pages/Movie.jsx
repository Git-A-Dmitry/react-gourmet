import { useParams, useNavigate, Link } from 'react-router-dom';

function Movie() {
  const { title } = useParams();
  const navigate = useNavigate();
  // const history = useNavigate();

  // function goBack(e) {
  //   e.preventDefault();
  //   history('/');
  // }

  // const value = useParams();
  // console.log(value);
  return (
    <>
      <h2>Favorite movie: {title}</h2>
      {/* <Link to='movies/:title'>Title</Link> */}
      <button className='btn' onClick={() => navigate(-1)}>
        Go back
      </button>
      {/* <button className='btn' onClick={goBack}>
        Go back
      </button> */}
    </>
  );
}

export { Movie };
