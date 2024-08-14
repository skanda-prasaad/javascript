const numbers = [1,2,3,4,5,6,7,8,9,10];

// Long version :-
// const evenNumbers = numbers.filter(function(number){
//     return number % 2 == 0;
// })

// Short version :-

const evenNumbers = numbers.filter(number => number %2 == 0);
// console.log(evenNumbers);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];

// Get only retials companies :- 

const onlyRetails = companies.filter((Company) => Company.category === "Retail");
console.log(onlyRetails);

// Get companies that started in or after 1980 and ended in or before 2005 :-

const oldCompanies = companies.filter((companies) => companies.start >= 1980 && companies.end < 2005);
console.log(oldCompanies);

// Get companies which lasted ten years or more :-

const longCompanies = companies.filter(
    (companies) => companies.end - companies.start >= 10
);

console.log(longCompanies);
