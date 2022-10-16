const nameList = ['Carlos', 'Lorena', 'Silvia'];
const nameListCopy = nameList;
const nameListCopyReal = [...nameList];

nameList.push('Sergio');
console.log('nameList', nameList);
console.log('nameListCopy', nameListCopy);
console.log('nameListCopyReal', nameListCopyReal);

const prices = [20, 60, 40, 89, 10, 5, 90, 123, 76, 34];

const highest = Math.max(...prices);
const lowest = Math.min(...prices);
console.log('highest', highest);
console.log('lowest', lowest);

const nameMenList = ['Pedro', 'Luis', 'Alfonso'];
const nameWomenList = ['Carmen', 'Sara', 'Adriana', 'Gloria', 'Johana'];

const nameListTotal = [...nameMenList, ...nameWomenList].sort();
//console.log('nameListTotal', nameListTotal.sort());
console.log('nameListTotal', nameListTotal);
const nameListConcated = nameMenList.concat(nameWomenList).sort();
console.log('nameListConcated', nameListConcated);
