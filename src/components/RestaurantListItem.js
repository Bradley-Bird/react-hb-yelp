import { Link } from 'react-router-dom';
export const RestaurantListItem = ({ name, rating, alias }) => {
  return (
    <Link to={`/restaurant/${alias}`}>
      <p>
        {name}
        {Array(Math.floor(rating)).fill('⭐️')}
      </p>
    </Link>
  );
};
