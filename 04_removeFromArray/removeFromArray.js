const removeFromArray = function (array, ...args) {
   console.log(array, args);
   let newArray = [];
   newArray = array.filter(item => !args.includes(item));

   return newArray;
}



// Do not edit below this line
module.exports = removeFromArray;

