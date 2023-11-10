let questions = document.querySelector(".question");
let container = document.querySelector(".container");
let options = document.querySelector(".options");
let answersContainer = document.querySelector(".answers-container");
let btn = document.querySelector("button");
console.log(btn);

let quizesData = [
  {
    Question: "which Language runs in a web browser?",
    options: ["java", "C", "Python", "JavScript", "Hi"],
    answer: 0,
  },
  {
    Question: "Kotak?",
    options: ["apple", "mango"],
    answer: 1,
  },
  {
    Question: "kunna?",
    options: ["java", "C", "Python", "JavScript", "Hi"],
    answer: 2,
  },
];

let answers = [0];

let currentQuiz = 0;

loadQuiz();


btn.addEventListener("click", function () {
  //find selected input
  let selected = getSelected();
  if (selected === undefined) {
    alert("Please select");
  } else {
    // answers.push(selected);
    answers[currentQuiz] = selected;
    //load next question
    if (currentQuiz < quizesData.length - 1) {
      currentQuiz++;
      loadQuiz();
    } else {
      showScore();
    }
  }
});

function loadQuiz() {
    //load currentQuiz data
    let quizData = quizesData[currentQuiz];
    console.log(quizData);
    // let start =  quizData[currentQuiz];
    questions.innerHTML = quizData.Question;
    options.innerHTML = "";
    //loop on quiz.options and get index
    for (let index in quizData.options) {
      //get option
      let opt = quizData.options[index];
      //create option div
      let option = document.createElement("div");
      option.classList.add("Q-1");
      option.innerHTML = `<input value="${index}" name="answer" type="radio" />
          <p class="p1">${opt}</p>`;
      options.append(option);
    }
  }
  


function getSelected() {
    let options = document.querySelectorAll("input");
    let selected = undefined;
    for (let opt of options) {
      if (opt.checked) {
        selected = opt.value;
        break;
      }
    }
    return selected;
  }

function showScore(){
    container.style.display = 'none';
    for(let index in quizesData)
    {

    }
    answersContainer.innerHTML = "";
}
