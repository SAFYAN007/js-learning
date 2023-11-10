let arry = [
  "Abc",
  "Bcd",
  "Channel",
  "CodingLab",
  "CodingNepal",
  "Def",
  "Efg",
  "Ghi",
  "Jkl",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to became Freelancer",
  "How to became Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];
let searchInput = document.getElementById("search");
let suggestionsList = document.getElementById("suggestions");

searchInput.addEventListener("input", function () {
    let input = searchInput.value.toLowerCase();
    let suggestions = arry.filter((item) => item.toLowerCase().includes(input));
    displaySuggestions(suggestions);
});
function displaySuggestions(suggestions) {
    suggestionsList.innerHTML = "";
  
    for (let suggestion of suggestions) {
      let listItem = document.createElement("li");
      listItem.textContent = suggestion;
      listItem.addEventListener("click", function () {
        searchInput.value = suggestion;
        suggestionsList.innerHTML = "";
        // suggestions.style.display= "block"
      });
      suggestionsList.appendChild(listItem);
      focus();
    }
  }


