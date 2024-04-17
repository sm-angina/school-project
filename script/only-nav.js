let studentBtn = document.querySelector("#nav-student_js");
studentBtn.addEventListener("click", () => {
  let sections = document.querySelector(".student-sections");
  sections.style = `overflow: visible;
                    height: fit-content;
                    padding: .5rem 0;
                   `;
});
let sections = document.querySelector(".student-sections");
sections.addEventListener("mouseleave", () => {
  sections.style = `overflow: hidden;
                    height: 0;
                    padding: 0;
 `;
});

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
  