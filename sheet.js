let studentBtn = document.querySelector('#nav-student_js')
studentBtn.addEventListener('click',()=>{
  let sections = document.querySelector('.student-sections')
  sections.style = `overflow: visible;
                    height: fit-content;
                    padding: .5rem 0;
                   `
})
let sections = document.querySelector('.student-sections')
  sections.addEventListener('mouseleave',()=>{
  sections.style = `overflow: hidden;
                    height: 0;
                    padding: 0;
 ` 
})

let currentIndex = localStorage.getItem("Index") || 0;
let main = document.querySelector("main");
loadArticle(data[currentIndex]);

let rightButton = document.querySelector(".next-article-btn"),
  leftButton = document.querySelector(".previous-article-btn");
var currRoll, currId;

function loadArticle(data) {
  main.innerHTML = `<article data-index="0" data-status="visible">
    <div class="article-main-section article-section">
        <div>
            <div>
                <div class="student-img">
                    <img src=${data.image}>
                </div>
                <div> 
                    <input class="student-id" value="${data.id}" onkeyup="idIndex()" onclick="inputFcs()" onfocusout="inputFcsOut(event, currId)"> 
                </div>
                <div class="student-details"> 
                <table>
                    <tr>
                        <th>
                          <span>Father's name </span>
                        </th>
                        <td> 
                          <span>${data.details.father} </span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                          <span>Mother's name </span>
                        </th>
                        <td> 
                          <span>${data.details.mother} </span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                          <span>Religion </span>
                        </th>
                        <td>
                          <span>${data.details.religion} </span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                          <span>Exam </span>
                        </th>
                        <td>
                          <span>  </span>
                        </td>
                    </tr>
              </table>
                </div>
            </div>
        </div>
    </div>
    <div class="article-description-section article-section">
        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Doloribus porro qui odit?</strong> Omnis
            doloribus accusamus qui quia fugiat praesentium nostrum culpa saepe.Similique eius <strong>nostrum
                corporis atque,</strong> natus deserunt ad consequuntur <strong>officiis vel consectetur repellat?</strong></p>
        </div>
    </div>
    <div class="article-title-section article-section">
        <div class="article-title">
            <div class="article-heading">
                <h1>${data.name}<h1>
            </div>
            <input class="article-heading-icon" value="${data.roll}" onkeyup="rollIndex()" onclick="inputFcs()" onfocusout="inputFcsOut(event, currRoll)">
        </div>
    </div>
    <div class="article-button-section article-section">
        <div class="buttons">
            <i class='bx bx-left-arrow-circle previous-article-btn' onclick="previousArticle()"></i>
            <i class='bx bx-right-arrow-circle next-article-btn' onclick="newArticle()"></i>
        </div>
    </div>
    </article>`;
    currId = data.id
    currRoll = data.roll
}
function newArticle() {
  currentIndex < data.length ? currentIndex++ : currentIndex;
  loadArticle(data[currentIndex]);
  titleAnimation();
  dscAnimation();
  saveCrnIndex();
}

function previousArticle() {
  currentIndex != 0 ? currentIndex-- : currentIndex;
  loadArticle(data[currentIndex]);
  titleAnimation();
  dscAnimation();
  saveCrnIndex();
}
function saveCrnIndex() {
  localStorage.setItem("Index", currentIndex);
}
window.onresize = () => {
  if (window.innerWidth < 786) {
    convertIcon();
  } else {
    convertText();
  }
};
function titleAnimation() {
  let title = document.querySelector(".article-title-section");
  title.style.visibility = "hidden";
  setTimeout(() => {
    title.style.animation = "var(--animation)";
  }, 500);
  setTimeout(() => {
    title.style.visibility = "visible";
  }, 500);
}
function dscAnimation() {
  let dsc = document.querySelector(".article-description-section");
  dsc.style.visibility = "hidden";
  setTimeout(() => {
    dsc.style.animation = "var(--animation)";
  }, 300);
  setTimeout(() => {
    dsc.style.visibility = "visible";
  }, 700);
}
function convertIcon() {
  document.body.querySelector(
    "#js_home"
  ).innerHTML = `<i class='bx bx-home-alt-2' ></i>`;
  document.body.querySelector(
    "#js_blog"
  ).innerHTML = `<i class='bx bx-message-dots'></i>`;
  document.body.querySelector(
    "#js_result"
  ).innerHTML = `<i class='bx bx-notepad active' ></i>`;
}
function convertText() {
  document.body.querySelector("#js_home").innerHTML = "Home";
  document.body.querySelector("#js_blog").innerHTML = "Blog";
  document.body.querySelector("#js_result").innerHTML = "Result";
}



function rollIndex(e = event) {
  let input = document.querySelector('.article-heading-icon')
  let currRoll = input.value
  if(e.key == "Enter" && input.value < data.length){
    currentIndex = input.value - 1
    loadArticle(data[currentIndex])
    saveCrnIndex()
    document.body.onkeyup = arrowKeys;
  }
}

function idIndex(student = data, e = event){
  if(e.key > 0){
    setTimeout(()=>{
      let id = document.querySelector('.student-id')
        for (let i = 0; i< data.length; i++){
          if(student[i].id == id.value){
            currentIndex = i
            loadArticle(data[currentIndex])
            saveCrnIndex()
          }
        }
        
      },300)
      document.body.onkeyup = arrowKeys;
  }
}
function inputFcs(){
  document.body.onkeyup = null;
}

function inputFcsOut(e, currValue){
  e.target.value = currValue
  document.body.onkeyup = arrowKeys
}

document.body.onkeyup = arrowKeys;
function arrowKeys(e = event) {
  if (e.key == "ArrowLeft") {
    leftButton.click();
  } else if (e.key == "ArrowRight") {
    rightButton.click();
  }
}
