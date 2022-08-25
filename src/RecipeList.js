import React from "react";
import RecipeView from "./RecipeView";

// Display the list of recipes using the structure of table that is provided.

function RecipeList({ recipes, deleteRecipe }) {
  console.log(recipes)
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
            <RecipeView
              deleteRecipe={() => deleteRecipe(index)} // deletes post
              key={index}
              recipe={recipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

 


