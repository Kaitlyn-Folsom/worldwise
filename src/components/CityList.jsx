/* eslint-disable react/prop-types */
import CityItem from './CityItem';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import Message from './Message';

function CityList({ cities, isLoading }) {
  console.log('loading', isLoading);
  console.log(cities);
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message={'Add you first city by clicking a city on the map'} />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
