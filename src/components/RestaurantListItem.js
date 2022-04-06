import { Link } from 'react-router-dom';
export const RestaurantListItem = ({ name, rating }) => {
  return (
    <Link to="/restaurant">
      <p>
        {name}
        {Array(Math.floor(rating)).fill('⭐️')}
      </p>
    </Link>
  );
};
