/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>

           
*/






/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/






/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

//Here im using saved.then in order to pull the info saved on step 1

//im creating a function to pass the value into the carComponets function

function cardComponents(singleObject) {
    const div1Component = document.createElement("div");
    const imgComponent = document.createElement("img");
    const div2Component = document.createElement("div");
    const h3Component = document.createElement("h3");
    const p1Component = document.createElement("p");
    const p2Component = document.createElement("p");
    const p3Component = document.createElement("p");
    const aComponent = document.createElement("a");
    const p4Component = document.createElement("p");
    const p5Component = document.createElement("p");
    const p6Component = document.createElement("p");

    div1Component.classList.add("card");
    div2Component.classList.add("card-info");
    h3Component.classList.add("name");
    p1Component.classList.add("username");


    const mainDiv = document.querySelector(".cards");

    mainDiv.appendChild(div1Component);
    div1Component.appendChild(imgComponent);
    div1Component.appendChild(div2Component);
    div2Component.appendChild(h3Component);
    div2Component.appendChild(p1Component);
    div2Component.appendChild(p2Component);
    div2Component.appendChild(p3Component);
    div2Component.appendChild(p4Component);
    div2Component.appendChild(p5Component);
    div2Component.appendChild(p6Component);

    for (let [key, value] of Object.entries(singleObject)) {
        imgComponent.setAttribute("src", singleObject.avatar_url);
        h3Component.textContent = singleObject.name;
        p1Component.textContent = singleObject.login;
        p2Component.textContent = ` Location: ${singleObject.location}`;
        p3Component.textContent = "Profile:";
        p3Component.appendChild(aComponent);
        aComponent.textContent = "  Click here!"
        aComponent.setAttribute("href", singleObject.html_url);
        aComponent.style.textDecoration = "none";
        aComponent.style.color = "red";
        p4Component.textContent = ` Followers: ${singleObject.followers}`;
        p5Component.textContent = ` Following: ${singleObject.following}`;
        p6Component.textContent = ` Bio: ${singleObject.bio}`;



    }
    return mainDiv;
}
//here im passing the value into the carComponets function as an argument so i could use
//all over the place in my component function !

let followersArray = ["bigtonito39", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
const mainCardDiv = document.querySelector("cards");
followersArray.forEach((Follow) => {
    axios.get(`https://api.github.com/users/${Follow}`)
        .then(response => {
            const data = new cardComponents(response.data);
            mainCardDiv.appendChild(data);
            return response.data;
        })
        .catch(err => {
            console.log("it didnt work");
        });

});