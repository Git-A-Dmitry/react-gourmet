import { Link } from 'react-router-dom';

function Meal(props) {
  const { strMeal, idMeal, strMealThumb } = props;
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={strMealThumb} alt={strMeal} />
      </div>

      <div className='card-content'>
        <span className='card-title'>{strMeal.slice(0, 20)}</span>
      </div>

      <div className='card-action'>
        <Link to={`/meal/${idMeal}`} className='btn'>
          Recipe
        </Link>
      </div>
    </div>
  );
}

export { Meal };
