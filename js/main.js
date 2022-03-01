const btn = document.querySelector('.mb-menu');
const menu = document.querySelector('.hamburger');
const menuList = document.querySelectorAll('.mb-menu-list a');
const workBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal_container');
const closeBtn = document.querySelector('.modalcross');

const workData = [
  {
    name: 'Multi-Post Stories',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    ImgUrl: 'works.png',
    tech: ['html', 'css', 'js'],
    demoUrl: 'https://maxthestranger.github.io/mts_portfolio/',
    gitUrl: 'https://github.com/maxthestranger/mts_portfolio',
  },
  {
    name: 'Project 1',
    description: 'some value',
    ImgUrl: 'img/project1.jpg',
    tech: ['html', 'css', 'js'],
    demoUrl: 'htps:/.,laksdljsa',
    gitUrl: 'htosidjosdnks',
  },
  {
    name: 'Project 1',
    description: 'some value',
    ImgUrl: 'img/project1.jpg',
    tech: ['html', 'css', 'js'],
    demoUrl: 'htps:/.,laksdljsa',
    gitUrl: 'htosidjosdnks',
  },
  {
    name: 'Project 1',
    description: 'some value',
    ImgUrl: 'img/project1.jpg',
    tech: ['html', 'css', 'js'],
    demoUrl: 'htps:/.,laksdljsa',
    gitUrl: 'htosidjosdnks',
  },
];

function matchModal(id) {
  const { ImgUrl, name, description, tech, demoUrl, gitUrl } = workData[id];
  const modalContainer = document.querySelector('.modal_container');
  const modal = document.createElement('div');
  modal.innerHTML = `
  <div class="modal">
        <div class="modal_img">
          <img src="img/${ImgUrl}" alt="${name}" />
          <img class="modalcross" src="img/Icon-Cancel.svg" alt="crossbtn" />
        </div>

        <h2 class="modal_title">${name}</h2>
        <ul class="tags">
          ${tech.map((tech) => {
            return `<li>
            <a href="#"> ${tech} </a>
          </li>`;
          })}
        </ul>
        <p class="modal_desc">
          ${description}
        </p>
        <div class="modal_btn">
          <a href="${demoUrl}" class="btn"
            >See Live <img src="img/export.svg" alt="see live"
          /></a>
          <a href="${gitUrl}" class="btn"
            >See Source <img src="img/github_ic.svg" alt="see live"
          /></a>
        </div>
      </div>
      `;

  modalContainer.appendChild(modal);
}

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

menuList.forEach((list) => {
  list.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

workBtns.forEach((workBtn) => {
  workBtn.addEventListener('click', () => {
    matchModal(workBtn.dataset.id);
    modal.classList.add('active');
    // document.body.classList.add('no-scroll');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  // document.body.classList.remove('no-scroll');
});
