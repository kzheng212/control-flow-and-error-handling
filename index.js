// ==========================
// Part 1: Growing Pains
// ==========================

// Global Variables
// Plants are contained in a raidus of 5 meters
const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
console.log("Your Available Space for Plant Growth is", area, "square meters");
// Minimum Required Plant Space for each plant
// Units are in m^2
const minAreaPerPlant = 0.8;

// Initial Number of Plants
const startNumOfPlants = 20;
console.log("Starting Plant Capacity: ", startNumOfPlants);

// Plant Growth Rate Multiplier per Week
const plantGrowthRate = 2;

// Objectives

// Goal #1: Predict Plant Growth after a specific Amount of weeks

// Goal #2: Setup a Control Flow run these protocols
//     - Pruned
//         - When Plant Count after a given amount of weeks > 80%
//           of the maximum capacity of the garden.
//     - Monitored
//         - After a given number of weeks and the plant count is (50, 80) Percentage
//           of maximum capacity of garden
//     - Planted
//         - Condition should be met if the plant count after the given
//            number of weeks is < 50% of max capacity of garden
//
/* Within your submission include Results for the 1st, 2nd, 3d weeks 
of growth as input */

let numOfWeeks = parseInt(prompt("Enter the number of weeks: "));
console.log("Number of Weeks:", numOfWeeks);

let currentNumOfPlants = startNumOfPlants;
console.log("Initial Plant Capacity:", currentNumOfPlants);

// Updates to Current Plant Count
currentNumOfPlants = startNumOfPlants * numOfWeeks * 2;
console.log("Current Plant Capacity:", currentNumOfPlants);

// Updated Current Area of Total Plants
let currentArea = currentNumOfPlants * minAreaPerPlant;
console.log("Current Area:", currentArea);

// Current Percentage of Current Amount of Plant to Total Plants Ratio
let currentPercentage = currentArea / area;
console.log("Current Percentage:", currentPercentage);

if (currentPercentage > 0.8) {
  console.log("Pruned");
} else if (currentPercentage >= 0.5 && currentPercentage <= 0.8) {
  console.log("Monitored - within Percentage(50, 80)");
} else {
  console.log("Planted - There is more room to plant");
}

// ==========================
// Part 2: Thinking Bigger
// ==========================



// ==========================
// Part 3: Errors in Judgement
// ==========================
