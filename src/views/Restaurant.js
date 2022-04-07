import { useEffect, useState } from 'react';
import { fetchBusinessDetail } from '../services/yelp';
import { useParams } from 'react-router-dom';

function Restaurant() {
  const [restaurant, setRestaurant] = useState({});
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBusinessDetail(params.alias);
      setRestaurant(data);
    };
    fetchData();
  }, [params]);

  return <div>{restaurant.name}</div>;
}

export default Restaurant;
