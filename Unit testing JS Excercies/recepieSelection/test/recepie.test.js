import recipeSelection from "../recipeSelection.js"
import {expect} from "chai"
describe("Tests of recipeSelection", function() {

    describe("Test if the type is valid", function() {

        it("Should return invalid input of the type is not a string", function() {
            expect(() => recipeSelection.isTypeSuitable(null, 'test')).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isTypeSuitable(undefined, 'test')).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isTypeSuitable(0, 'test')).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isTypeSuitable(true, 'test')).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isTypeSuitable({}, 'test')).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isTypeSuitable([], 'test')).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isTypeSuitable('test', 0)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isTypeSuitable('test', null)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isTypeSuitable('test', undefined)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isTypeSuitable('test', true)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isTypeSuitable('test', {})).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isTypeSuitable('test', [])).to.throw(
                "Invalid input"
            )
        });
     });

     describe('IsTypeSuitable', function() {
         it("Should return error if the recipie is not suitable for vegetarians", function() {
 
             expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal(
                 "This recipe is not suitable for vegetarians"
             )
         })
         it('Should return if this recipie is not suitable for vegans', function() {
            expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.equal(
                "This recipe is not suitable for vegans"
            )
            expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.equal(
                "This recipe is not suitable for vegans"
            )
         })
         it("Any other case of the dairyInput and dietaryRestriction", function() {
            expect(recipeSelection.isTypeSuitable("Apple", "Vegan")).to.equal(
                "This recipe is suitable for your dietary restriction"
            )
            expect(recipeSelection.isTypeSuitable("cookies", "Vegetarian")).to.equal(
                "This recipe is suitable for your dietary restriction"
            )
         })

     })
     describe('isItAffordable', function() {

        it('Should throw error if the input is not a number', function(){
            expect(() => recipeSelection.isItAffordable('0', 5)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isItAffordable(null, 5)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isItAffordable([], 5)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isItAffordable({}, 5)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isItAffordable(true, 5)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isItAffordable(5, '0')).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isItAffordable(5, null)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isItAffordable(5, undefined)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.isItAffordable(5, true)).to.throw(
                "Invalid input"
            )
          
        })
        it('Should return you dont have enough budget', function() {
            expect(recipeSelection.isItAffordable(5, 0)).to.equal(
                "You don't have enough budget to afford this recipe"
            )
            expect(recipeSelection.isItAffordable(10, 0)).to.equal(
                "You don't have enough budget to afford this recipe"
            )
        })
        it("Should return the bough ingredients", function() {
            expect(recipeSelection.isItAffordable(5, 50)).to.equal(
                `Recipe ingredients bought. You have 45$ left`
            )
            expect(recipeSelection.isItAffordable(2, 20)).to.equal(
                `Recipe ingredients bought. You have 18$ left`
            )
        })
     })
     describe("getRecipesByCategory", function() {
        it('Should throw error if the type is not a string or not array', function(){
            expect(() => recipeSelection.getRecipesByCategory('test', 0)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.getRecipesByCategory(0, 0)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.getRecipesByCategory({}, 0)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.getRecipesByCategory(undefined, undefined)).to.throw(
                "Invalid input"
            )
              expect(() => recipeSelection.getRecipesByCategory(null, null)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.getRecipesByCategory(true, true)).to.throw(
                "Invalid input"
            )
            expect(() => recipeSelection.getRecipesByCategory(-1, 5)).to.throw(
                "Invalid input"
            )
        })
        it("Should return an empty array if no recipes match the category", function () {
            const recipes = [
              { title: "Spicy Tofu Stir-Fry", category: "Asian" },
              { title: "Pasta Carbonara", category: "Italian" },
            ];
            expect(recipeSelection.getRecipesByCategory(recipes, "Mexican")).to.deep.equal([]);
          });
          it("Should return correct filtered titles for a given category", function () {
            const recipes = [
              { title: "Spicy Tofu Stir-Fry", category: "Asian" },
              { title: "Pasta Carbonara", category: "Italian" },
              { title: "Sushi Rolls", category: "Asian" },
            ];
            expect(recipeSelection.getRecipesByCategory(recipes, "Asian")).to.deep.equal(["Spicy Tofu Stir-Fry", "Sushi Rolls"]);
          });
     })
    
});
