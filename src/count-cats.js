const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {

  let numberOfCounts = 0;
  for (let i = 0; i < backyard.lemgth; i++);
  for (let j = 0; j < backyard.lemgth; j++)
  if(backyard[i][j] === '^^'){
    numberOfCounts+=1;
  }
  return numberOfCounts;
  
  
};
