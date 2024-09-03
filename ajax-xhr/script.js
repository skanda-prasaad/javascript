const jokes = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

generateJoke = () => {
    const xhr = new XMLHttpRequest;
    xhr.open('GET','https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                jokes.innerHTML = JSON.parse(this.responseText).value;
            }
            else{
                jokes.innerHTML = "something went wrong."
            }
        }
    }
    xhr.send();
}


jokeBtn.addEventListener('click', generateJoke);
