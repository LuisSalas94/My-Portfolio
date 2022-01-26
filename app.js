const menu = document.querySelector('#icon');
const navbar = document.querySelector('nav');
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('nav-toggle');
});

/* ************************** Pop Up  ******************************************* */

const works = [
  {
    title: 'Tonic',
    info: ['Ranjeet', ' • backend', ' • 2021'],
    description:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    skills: ['html', 'css', 'javascript', 'ruby on rails'],
    image: 'img/desktop/desktop-img1.jpg',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
  {
    title: 'Multi-Post Stories',
    info: ['Ranjeet', ' • backend', ' • 2021'],
    description:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    skills: ['html', 'css', 'javascript', 'ruby on rails'],
    image: 'img/desktop/desktop-img2.jpg',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
  {
    title: 'Facebook 360',
    info: ['Ranjeet', ' • backend', ' • 2021'],
    description:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    skills: ['html', 'css', 'javascript', 'ruby on rails'],
    image: 'img/desktop/desktop-img3.jpg',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
  {
    title: 'Uber Navigation',
    info: ['UBER', ' • Lead Developer', ' • 2021'],
    description:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    skills: ['html', 'css', 'javascript', 'ruby on rails'],
    image: 'img/desktop/desktop-img4.jpg',
    liveLink: 'see live',
    sourceLink: 'see source',
  },
];

const buttons = document.querySelectorAll('.works .btn');
const container = document.querySelector('.popup-container');

function close() {
  container.style.display = 'none';
}

function open(index) {
  // Destructuring
  const {
    title, info, description, skills, image,
  } = works[index];
  const [info1, info2, info3] = info;
  const [skill1, skill2, skill3, skill4] = skills;

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
	</ul>
	<div class="buttons-container">
	<button type="button">
	see live <i class="fas fa-check"></i>
	</button>
	<button type="button">
	see live <i class="fab fa-github"></i>
	</button>
	</div>
	</div>
	</div>
	</div>
	</div>
	`;
  container.style.display = 'block';
  const btnClose = document.querySelector('#btn-close');
  btnClose.addEventListener('click', close);
}

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    open(index);
  });
});
