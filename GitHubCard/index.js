/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const getGithubUserData = () => {
  let userData;
  axios
    .get("https://api.github.com/users/aapetsi")
    .then(res => (userData = res.data))
    .catch(error => {
      console.log(error);
    });
  return userData;
};

const githubUserData = getGithubUserData();

console.log(githubUserData.data);
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

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

*/
const githubCardCreator = userInfo => {
  // select parent div
  const parentDiv = document.querySelector(".cards");
  // create dom elements
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const userImage = document.createElement("img");
  userImage.src = "";

  const userProfileLink = document.createElement("a");
  userProfileLink.href = "";

  const divCardInfo = document.createElement("div");
  divCardInfo.classList.add("card-info");

  const h3 = document.createElement("h3");
  h3.classList.add("name");

  // create 7 paragraph tags
  const paragraphList = [];
  for (let i = 0; i <= 6; i++) {
    paragraphList.push(document.createElement("p"));
  }

  const [
    userName,
    location,
    profile,
    followers,
    following,
    bio
  ] = paragraphList;

  userName.classList.add("username");

  // append created elements to parent div
  parentDiv.appendChild(divCard);
  divCard.appendChild(userImage);
  divCard.appendChild(divCardInfo);
  divCardInfo.appendChild(h3);
  divCardInfo.appendChild(userName);
  divCardInfo.appendChild(location);
  divCardInfo.appendChild(profile);
  profile.appendChild(userProfileLink);
  divCardInfo.appendChild(followers);
  divCardInfo.appendChild(following);
  divCardInfo.appendChild(bio);

  return divCard;
};

githubCardCreator();

/*

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
