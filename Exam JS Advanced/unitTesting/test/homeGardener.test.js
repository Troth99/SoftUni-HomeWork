import homeGardener from "../homeGardener.js";
import { expect } from "chai";

describe("Tests …", function () {

    describe("Tests for plantCareInstructions", function () {
        it("Should return Succulents require minimal watering, indirect sunlight, and well-draining soil if its a succulent", function () {
            expect(homeGardener.plantCareInstructions('succulent')).to.equal(`Succulents require minimal watering, indirect sunlight, and well-draining soil.`)
        });
        it('Should return correct message if the plantTYpe is vegetable', function () {
            expect(homeGardener.plantCareInstructions('vegetable')).to.equal("Vegetables need full sun, regular watering, and nutrient-rich soil.")
        })
        it('Should return correct message if the plantTYpe is flowering', function () {
            expect(homeGardener.plantCareInstructions('flowering')).to.equal("Flowering plants require moderate watering, occasional fertilization, and pruning.")
        })
        it('Should return correct message if the plantTYpe is tree', function () {
            expect(homeGardener.plantCareInstructions('tree')).to.equal("Trees need deep watering, proper spacing, and regular mulching.")
        })
        it('Should throw an error if its different type', function () {
            expect(() => homeGardener.plantCareInstructions(null)).to.throw("Invalid plant type!")
            expect(() => homeGardener.plantCareInstructions(0)).to.throw("Invalid plant type!")
            expect(() => homeGardener.plantCareInstructions([])).to.throw("Invalid plant type!")
            expect(() => homeGardener.plantCareInstructions({})).to.throw("Invalid plant type!")
            expect(() => homeGardener.plantCareInstructions(undefined)).to.throw("Invalid plant type!")
            expect(() => homeGardener.plantCareInstructions(-5)).to.throw("Invalid plant type!")
        })
    });

    describe("Tests for availablePlants", function () {

        it("should return correct count when valid array and number are provided", function () {
            expect(homeGardener.availablePlants([20, 30, 50, 10], 30)).to.equal(
                "There are 3 plants suitable for your garden height criteria!"
            );
        });

        it("should return 0 when no plants meet the criteria", function () {
            expect(homeGardener.availablePlants([40, 50, 60], 30)).to.equal(
                "There are 0 plants suitable for your garden height criteria!"
            );
        });

        it("should throw an error if plantSizes is not an array", function () {
            expect(() => homeGardener.availablePlants("not an array", 30)).to.throw("Invalid Information!");
        });

        it("should throw an error if maxHeight is not a number", function () {
            expect(() => homeGardener.availablePlants([20, 30, 50], "30")).to.throw("Invalid Information!");
        });

        it("should throw an error if maxHeight is less than 1", function () {
            expect(() => homeGardener.availablePlants([20, 30, 50], 0)).to.throw("Invalid Information!");
        });

        it("should throw an error if plantSizes is an empty array", function () {
            expect(() => homeGardener.availablePlants([], 30)).to.throw("Invalid Information!");
        });

    });

    describe("Tests for gardenExpenses", function () {

        it("should calculate total cost without discount", function () {
            expect(homeGardener.gardenExpenses(["shovel", "rake"], ["vegetable seeds", "herb seeds"], false)).to.equal(
                "You spent $48.00 on tools and seeds!"
            );
        });

        it("should calculate total cost with discount", function () {
            expect(homeGardener.gardenExpenses(["shovel", "watering can"], ["flower seeds"], true)).to.equal(
                "You spent $38.70 on tools and seeds with a 10% discount!"
            );
        });

        it("should handle empty arrays and return 0 cost", function () {
            expect(homeGardener.gardenExpenses([], [], false)).to.equal(
                "You spent $0.00 on tools and seeds!"
            );
        });

        it("should throw an error if tools is not an array", function () {
            expect(() => homeGardener.gardenExpenses("shovel", ["vegetable seeds"], false)).to.throw("Invalid Information!");
        });

        it("should throw an error if seeds is not an array", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], "vegetable seeds", false)).to.throw("Invalid Information!");
        });

        it("should throw an error if discount is not a boolean", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], ["vegetable seeds"], "false")).to.throw("Invalid Information!");
        });

        it("should ignore invalid tool names and only sum valid ones", function () {
            expect(homeGardener.gardenExpenses(["shovel", "invalid tool"], ["vegetable seeds"], false)).to.equal(
                "You spent $30.00 on tools and seeds!"
            );
        });

        it("should ignore invalid seed names and only sum valid ones", function () {
            expect(homeGardener.gardenExpenses(["shovel"], ["vegetable seeds", "unknown seed"], false)).to.equal(
                "You spent $30.00 on tools and seeds!"
            );
        });

    });
});
