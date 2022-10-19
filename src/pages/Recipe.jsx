import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='recipe'>
          <div className='description'>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className='info'>
              <h1>{recipe.strMeal}</h1>
              <h5>Category: {recipe.strCategory}</h5>
              {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
              <p>{recipe.strInstructions}</p>
            </div>
            {/* <img src={recipe.strMealThumb} alt={recipe.strMeal} /> */}
          </div>

          {/* {recipe.strYoutube ? (
            <div className='row'>
              <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
              <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen />
            </div>
          ) : null} */}
        </div>
      )}

      <button className='btn green lighten-2' onClick={() => navigate(-1)}>
        Back
      </button>
    </>
  );
}

export { Recipe };
