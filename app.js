const menu = document.querySelector("#icon");
const navbar = document.querySelector("nav");
/* const header = document.querySelector('header'); */

menu.addEventListener("click", () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("nav-toggle");
});

window.addEventListener("scroll", () => {
	menu.classList.remove("fa-times");
	navbar.classList.remove("nav-toggle");
});

/* ****************************** Dynamically injected content  ******************* */
const works = [
	{
		title: "Tonic",
		info: ["Canopy", " • Backend End Dev", " • 2015"],
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled  it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
		skills: ["html", "css", "javascript", "github", "ruby", "Bootstrap"],
		image: "img/desktop/desktop-img1.jpg",
		liveLink: "see live",
		sourceLink: "see source",
	},
	{
		title: "Multi-Post Stories",
		info: ["Facebook", " • Full Stack Dev", " • 2015"],
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
		skills: ["html", "css", "javascript", "github", "ruby", "Bootstrap"],
		image: "img/desktop/desktop-img2.jpg",
		liveLink: "see live",
		sourceLink: "see source",
	},
	{
		title: "Facebook 360",
		info: ["Facebook", " • Full Stack Dev", " • 2015"],
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
		skills: ["html", "css", "javascript", "github", "ruby", "Bootstrap"],
		image: "img/desktop/desktop-img3.jpg",
		liveLink: "see live",
		sourceLink: "see source",
	},
	{
		title: "Uber Navigation",
		info: ["UBER", " • Lead Developer", " • 2018"],
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
		skills: ["html", "css", "javascript", "github", "ruby", "Bootstrap"],
		image: "img/desktop/desktop-img4.jpg",
		liveLink: "see live",
		sourceLink: "see source",
	},
];

const projectContainer = document.querySelector(".works");
const container = document.querySelector(".popup-container");

window.addEventListener("DOMContentLoaded", () => {
	let project = works.map(
		(item) => `
    <div class="card">
      <img src=${item.image} alt="" />
      <div class="card-container swap">
        <h1>${item.title}</h1>
        <div class="card-details">
          <h3>${item.info[0]}</h3>
          <h4>${item.info[1]}</h4>
          <h4>${item.info[2]}</h4>
        </div>
        <p class="card-description">
          ${item.description}
        </p>
        <div class="card-skills">
          <ul>
            <li>${item.skills[0]}</li>
            <li class="ruby">${item.skills[1]}</li>
            <li>${item.skills[2]}</li>
            <li>${item.skills[3]}</li>
          </ul>
        </div>
          <button class="btn" id="workbtn">see project</button>
      </div>
    </div>
    `
	);

	project = project.join("");
	projectContainer.innerHTML = project;
	/* *********************** Pop UP Window *************************** */
	const buttons = document.querySelectorAll("#workbtn");

	function open(index) {
		const { title, info, description, skills, image } = works[index];
		const [info1, info2, info3] = info;
		const [skill1, skill2, skill3, skill4, skill5, skill6] = skills;
		const workSection = document.querySelector(".works");
		container.innerHTML = `
    <div class="main-container">
    <div class="content-container">
    <div class="header">
      <h1>${title}</h1>
      <div id="btn-close" class="fas fa-times"></div>
    </div>
    <ul class="info">
      <li>${info1}</li>
      <li>${info2}</li>
      <li>${info3}</li>
    </ul>
    <div class="image-container">
      <img
      src=${image}
      class="card-image"
      alt=""
      />
    </div>
    <div class="container-secondary">
      <p>
      ${description}
      </p>
      <div class="skills-info">
        <ul>
          <li>${skill1}</li>
          <li>${skill2}</li>
          <li>${skill3}</li>
          <li>${skill4}</li>
          <li>${skill5}</li>
          <li>${skill6}</li>
        </ul>
        <hr class="line">
        <div class="buttons-container">
          <button type="button">
          see live <i class="fas fa-check"></i>
          </button>
          <button type="button">
          see source <i class="fab fa-github"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>
  `;
		container.classList.add("showPopUp");
		workSection.appendChild(container);
		const btnClose = document.querySelector("#btn-close");
		function close() {
			container.classList.remove("showPopUp");
		}
		btnClose.addEventListener("click", close);
	}

	buttons.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			open(index);
		});
	});
});

/* ******************Form Validation********************************** */
const form = document.querySelector("#form");
const email2 = document.querySelector("#email");
const validation = document.querySelector(".validation");

function showError(input, message) {
	validation.innerHTML = message;
}

form.addEventListener("submit", (e) => {
	const { value } = email2;
	if (value !== value.toLowerCase()) {
		e.preventDefault();
		showError(email2, "Email must contain only lowercase characteres");
	}
});

/* ****************** Local Storage ********************************** */
const userName = document.querySelector("#name");
const textMessage = document.querySelector("#text");

function setLocalStorage(obj) {
	localStorage.setItem("formData", JSON.stringify(obj));
}

function showData(data) {
	userName.value = data.formName;
	textMessage.value = data.formMessage;
	email2.value = data.formEmail;
}

form.addEventListener("submit", () => {
	const infoObject = {
		formName: userName.value,
		formEmail: email2.value,
		formMessage: textMessage.value,
	};
	setLocalStorage(infoObject);
});

const getData = JSON.parse(localStorage.getItem("formData"));
showData(getData);
