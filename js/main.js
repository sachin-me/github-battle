let btn = document.querySelector('.main-btn');
let mainDiv = document.querySelector('.main-div');
let mainWrapper = document.querySelector('.user-data');
let winner = document.querySelector('#winner');
let displayUser1Id;
let displayId;
console.log(mainDiv);
btn.addEventListener("click" ,function(e){
  let formDisplay = createForm();
  mainDiv.append(formDisplay);
  btn.style.display = 'none';
  // User1 data
  let user1Text = document.querySelector('.user1-text');
  let user1Btn = document.querySelector('.user1-btn');
  user1Btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (user1Text.value) {
      var userData = fetch(`https://api.github.com/users/${user1Text.value}`).then(d => d.json()).then(data => displayUser1Id = data).then(displayUser1Data);
    }
    user1Text.value = "";
    console.log(userData);
  })

  // User2 data
  let user2Text = document.querySelector('.user2-text');
  let user2Btn = document.querySelector('.user2-btn');
  user2Btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (user2Text.value) {
      var data = fetch(`https://api.github.com/users/${user2Text.value}`).then(d => d.json()).then(data => displayId = data).then(displayUser2Data);
    }
    user2Text.value = "";
  })
  
})

function displayUser1Data() {
  let user1Data = document.querySelector('.user1-data');
  let avatar = document.createElement('img');
  avatar.setAttribute('src', `${displayUser1Id.avatar_url}`);
  user1Data.appendChild(avatar);
  let gitData = document.createElement('div');
  gitData.classList.add("data-info");
  gitData.innerText = `
    Name: ${displayUser1Id.name}
    Bio: ${displayUser1Id.bio}
    Followers: ${displayUser1Id.followers}
    Following: ${displayUser1Id.following}
    Repos: ${displayUser1Id.public_repos}
  `
  user1Data.appendChild(gitData);
}

function displayUser2Data() {
  let user2Data = document.querySelector('.user2-data');
  let avatar2 = document.createElement('img');
  avatar2.setAttribute('src', `${displayId.avatar_url}`);
  user2Data.appendChild(avatar2);
  let gitData2 = document.createElement('div');
  gitData2.classList.add("data-info");
  gitData2.innerText = `
    Name: ${displayId.name}
    Bio: ${displayId.bio}
    Followers: ${displayId.followers}
    Following: ${displayId.following}
    Repos: ${displayId.public_repos}
  `
  user2Data.appendChild(gitData2);
  let battleWrapper = document.createElement('div');
  battleWrapper.classList.add("battle-wrapper");
  let startBattle = document.createElement('button');
  startBattle.innerText = 'Start Battle';
  battleWrapper.appendChild(startBattle);
  mainWrapper.appendChild(battleWrapper);
  startBattle.addEventListener("click", battleFunc);
}


function battleFunc() {
  let user1Info = displayUser1Id.followers + displayUser1Id.public_repos;
  let user2Info = displayId.followers + displayId.public_repos
  if (user1Info > user2Info) {
    winner.textContent =  `Winner is ${displayUser1Id.name} !!!`;
  } 
  else if (user2Info > user1Info) {
    winner.textContent = `Winner is ${displayId.name} !!!`;
  }
}


