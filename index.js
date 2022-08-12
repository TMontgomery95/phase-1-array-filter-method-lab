// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, someName) {
    return drivers.filter (matchingName =>
        matchingName.toLowerCase() === someName.toLowerCase()
    )
}

function fuzzyMatch(drivers, someLetters) {
    return drivers.filter(matchingName => 
        matchingName.toLowerCase().indexOf(someLetters.toLowerCase()) === 0    
    )
}

function matchName(drivers, exactName) {
    return drivers.filter(drivers => drivers.name === exactName);  
}