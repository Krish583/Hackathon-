'use strict'
const containerRepositories= document.querySelector('.repositories');
console.log("Hello WOrld")
async function getRepository(){
    const data = await fetch("https://api.github.com/users/Krish583/repos") 
    const users= await data.json();
    console.log(users)
    
}

getRepository();

async function displayRepositories() {
    
    const data = await fetch("https://api.github.com/users/Krish583/repos");
    const users= await data.json();
    
    containerRepositories.innerHTML = '';
    users.forEach(function (mov, i){
      console.log(i, mov["name"])
      const type = mov["private"] ? 'Private' : 'Public';   
    const html = `
    <div class="repositories">
    <div class="privacy">
      <h3><a href="${mov["html_url"]}">${mov["name"]}</a> </h3> 
      <span  class="btnType">${type}</span> 
        </div>
      <div class="language">${mov["language"]} </div>
     
     </div>
       `;
    containerRepositories.insertAdjacentHTML('beforebegin', html);
  });

};


displayRepositories();