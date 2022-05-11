import axios from 'axios';
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const getRandomMeal = async () => {
  const response = await axios.get(baseUrl);

  return response.data.meals[0];
};

const getInitialMeals = async () => {
  let initalMeals = [];

  for (let i = 0; i < 4; i++) {
    const response = await axios.get(baseUrl);
    initalMeals.push(response.data.meals[0]);
  }

  return initalMeals;
};

export default { getRandomMeal, getInitialMeals };
