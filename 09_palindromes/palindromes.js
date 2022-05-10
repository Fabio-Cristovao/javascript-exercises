const palindromes = function (string) {

   let lowerCase = string.toLowerCase();
   let noSpaces = lowerCase.replace(' ', '');
   let noPunct = noSpaces.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

   Math.floor(noPunct.length / 2);
   for (let index = 0; index < noPunct.length; index++) {

      if (noPunct[index] === noPunct[noPunct.length - index - 1]) return true;
      return false;
   }
}

// Do not edit below this line
module.exports = palindromes;
