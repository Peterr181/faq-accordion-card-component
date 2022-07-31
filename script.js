let toggles = document.getElementsByClassName("button");
let contentDiv = document.getElementsByClassName("answer");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (!contentDiv[i].classList.contains("hidden")) {
      contentDiv[i].classList.add("hidden");
      toggles[i].classList.remove("bolding");
    } else {
      contentDiv[i].classList.remove("hidden");
      toggles[i].classList.add("bolding");
    }
  });
}
