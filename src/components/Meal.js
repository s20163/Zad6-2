import { useState } from 'react';

const Meal = ({ meal }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, img] = [meal.strMeal, meal.strMealThumb];
  const instructions = meal.strInstructions.split('\n');

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const collapsedView = () => (
    <div className="collapsed-meal" onClick={handleClick}>
      <div className="title-card">
        <img src={img} width="250" alt="Meal" />
        <h2>{name}</h2>
      </div>
    </div>
  );

  const expandedView = () => (
    <div className="expanded-meal" onClick={handleClick}>
      <div className="title-card">
        <img src={img} width="250" alt="Meal" />
        <h2>{name}</h2>
      </div>
      <div className="instructions">
        <h4>Instructions:</h4>
        {instructions.map((instruction, i) => (
          <p key={i}>{instruction}</p>
        ))}
      </div>
    </div>
  );

  return <>{isExpanded ? expandedView() : collapsedView()}</>;
};

export default Meal;
