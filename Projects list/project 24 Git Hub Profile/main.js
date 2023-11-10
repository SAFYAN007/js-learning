// const APIURI = "https://api.github.com/users/";
let title = document.querySelector(".title");
let para = document.querySelector(".para");
let followers = document.querySelector(".followers");
let followings = document.querySelector(".followings");
let respons = document.querySelector(".respons");
let avatar = document.querySelector(".avatar");
let repos = document.querySelector(".repos");
let input = document.querySelector(".input");
let form = document.querySelector(".user-form");
// getUser("blendlight");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let value = input.value;
  input.value = "";
  getUser(value);
});

async function getUser(username) {
  let response = await fetch("https://api.github.com/users/" + username);
  let data = await response.json();
  console.log("userdata", data);
  title.innerHTML = data.name ? data.name : data.login;
  para.innerHTML = data.bio;
  followers.innerHTML = data.followers;
  followings.innerHTML = data.following;
  respons.innerHTML = data.public_repos;
  avatar.src = data.avatar_url;

  let response2 = await fetch(data.repos_url);
  let data2 = await response2.json();
  console.log("repo", data2);
  if (data2.length) {
    repos.innerHTML = "";
    for (let repo of data2.slice(0, 5)) {
      repos.innerHTML += `<a href="${repo.html_url}" class="repo">${repo.name}</a>`;
    }
  } else {
    repos.innerHTML = "No repos found";
  }
}
