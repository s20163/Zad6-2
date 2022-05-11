import { useEffect, useState } from 'react';
import Meal from './components/Meal';
import mealService from './services/meals';

const App = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    mealService.getInitialMeals().then(meals => setMeals(meals));
  }, []);

  const handleClick = () => {
    mealService.getRandomMeal().then(meal => {
      if (!meals.find(m => m.idMeal === meal.idMeal)) {
        setMeals(meals.concat(meal));
      } else {
        handleClick();
      }
    });
  };

  return (
    <div className="wrapper">
      <div className="meals-container">
        {meals.map(meal => (
          <Meal meal={meal} key={meal.idMeal} />
        ))}
      </div>
      <div>
        <button onClick={handleClick}>Show me another!</button>
      </div>
    </div>
  );
};

export default App;
