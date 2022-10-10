const line = 'jorge,pedro,andrea,melissa,carmen,carmela,gloria,renzo,cesar';
/* const namesList = line.split(',');

const namesCapitalLetter = namesList.map((name) => name.toUpperCase());

const sortedNames = namesCapitalLetter.sort();

const namesWithHypens = sortedNames.join('-');

console.log(namesWithHypens); */

const names = line
  .split(',')
  .map((name) => name.toUpperCase())
  .sort()
  .join('-');

console.log(names);

const dataCSV =
  'sergio,jessica,javier\nluis,Adriana,LuCia\nLuis,Alfonso,jessica';

// resultado = ["adriana","alfonso","javier","jessica","lucia","luis","sergio"]
// split, map, reduce, sort
