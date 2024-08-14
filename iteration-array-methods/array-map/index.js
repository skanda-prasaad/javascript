const numbers = [1,2,3,4,5];

const doubleNumbers = numbers.map(
    (number) => number * 2
);

// console.log(doubleNumbers);

// Same by for each

const doubleNumbers2 = [];

numbers.forEach((numbers) => {
    doubleNumbers2.push(numbers * 2)
});

// console.log(doubleNumbers2);


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

  // create array of company names :-

//   const companyName = companies.map((company) => company.name);
//   console.log(companyName);
  
  // Create an array just company and category :-

  const companyNameCat = companies.map((company) => {
    return {
        name : company.name,
        category : company.category,
    }
  });
//   console.log(companyNameCat);
  
  // Create an array of objects with name and lenght of each companies in years :-

  const companyYears = companies.map((company) => {
    return {
        name : company.name,
        years : company.end - company.start,
    }
  });

//   console.log(companyYears);
  

  // chain map methods 

  const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((number) => number *2);
  console.log(squareAndDouble);
  