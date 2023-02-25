const faker = require("faker");
const appRouter = function(app) {
  const recipes = require("./recipes-controller.js");

 
  app.post("/recipes", recipes.create);

  
  app.get("/recipes", recipes.findAll);

  
  app.get("/recipes/:recipeID", recipes.findOne);

  
  app.put("/recipes/:recipeID", recipes.update);


  app.delete("/recipes/:recipeID", recipes.delete);
};

module.exports = appRouter;
