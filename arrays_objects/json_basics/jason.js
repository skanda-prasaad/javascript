const post = {
    id : 1,
    title : "Post one",
    body : "This is body",
};

// Convert to JSON string :- 
const str = JSON.stringify(post);
// We can't able to access property from Json (eg : id).
// First we need to parse it and we can access 

// Parse JSON :-
const obj = JSON.parse(str);

console.log(obj);
