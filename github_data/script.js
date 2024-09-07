// https://api.github.com/users

async function github() {
    let response = await fetch('https://api.github.com/users');
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data[0].avatar_url);
    let display = data.map((user) =>{
        return `<div class="cards">
        <img src="${user.avatar_url}" alt="${user.login}">
        <h1>${user.login}</h1>
    </div>`;
    }).join('');

    document.getElementById('cont').innerHTML = display;

    await new Promise((resolve, reject)=>{
        setTimeout((resolve),2000);
    });
    console.log("updated");
}

github();