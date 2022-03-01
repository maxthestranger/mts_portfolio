// hambuger menu imports
const btn = document.querySelector('.mb-menu');
const menu = document.querySelector('.hamburger');
const menuList = document.querySelectorAll('.mb-menu-list a');

// hambuger menu implementation
btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

menuList.forEach((list) => {
  list.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// modal implementation
const modalContainer = document.querySelector('.modal_container');
const workBtns = document.querySelectorAll('.show-modal');

// modal data
const workData = [
  {
    name: 'Keeping track of hundreds of components 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLore",
    ImgUrl: 'work.png',
    tech: ['Ruby on rails', 'css', 'javascript'],
    demoUrl: 'https://maxthestranger.github.io/mts_portfolio/',
    gitUrl: 'https://github.com/maxthestranger/mts_portfolio',
  },
  {
    name: 'Keeping track of hundreds of components 2',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    ImgUrl: 'work.png',
    tech: ['Ruby on rails', 'css', 'javascript'],
    demoUrl: 'https://maxthestranger.github.io/mts_portfolio/',
    gitUrl: 'https://github.com/maxthestranger/mts_portfolio',
  },
  {
    name: 'Keeping track of hundreds of components 3',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    ImgUrl: 'work.png',
    tech: ['Ruby on rails', 'css', 'javascript'],
    demoUrl: 'https://maxthestranger.github.io/mts_portfolio/',
    gitUrl: 'https://github.com/maxthestranger/mts_portfolio',
  },
  {
    name: 'Keeping track of hundreds of components 4',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    ImgUrl: 'work.png',
    tech: ['Ruby on rails', 'css', 'javascript'],
    demoUrl: 'https://maxthestranger.github.io/mts_portfolio/',
    gitUrl: 'https://github.com/maxthestranger/mts_portfolio',
  },
  {
    name: 'Keeping track of hundreds of components 5',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    ImgUrl: 'work.png',
    tech: ['Ruby on rails', 'css', 'javascript'],
    demoUrl: 'https://maxthestranger.github.io/mts_portfolio/',
    gitUrl: 'https://github.com/maxthestranger/mts_portfolio',
  },
  {
    name: 'Keeping track of hundreds of components 6',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    ImgUrl: 'work.png',
    tech: ['Ruby on rails', 'css', 'javascript'],
    demoUrl: 'https://maxthestranger.github.io/mts_portfolio/',
    gitUrl: 'https://github.com/maxthestranger/mts_portfolio',
  },
];

// create modal
function generateModal({
  ImgUrl, name, description, tech, demoUrl, gitUrl,
}) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  modal.innerHTML = `
    <button type="button" class="modalcross">
      <span></span>
      <span></span>
    </button>
    <div class="modal_img">
      <img src="img/${ImgUrl}" alt="${name}" />
    </div>

    <div class="modal_d">
      <h2 class="modal_title">${name}</h2>
      <div class="modal_btn desktop">
        <a href="${demoUrl}" class="btn"
          ><span>See Live</span> <img src="img/export.svg" alt="see live"
        /></a>
        <a href="${gitUrl}" class="btn"
          ><span>See Source</span> <img src="img/github_ic.svg" alt="see live"
        /></a>
      </div>
    </div>
    <ul class="tags">
      ${tech.map(
    (tec) => `<li>
        <a href="#"> ${tec} </a>
      </li>`,
  )}
    </ul>
    <p class="modal_desc">
      ${description}
    </p>
    <div class="modal_btn mobile">
      <a href="${demoUrl}" class="btn"
        ><span>See Live</span> <img src="img/export.svg" alt="see live"
      /></a>
      <a href="${gitUrl}" class="btn"
        ><span>See Source</span> <img src="img/github_ic.svg" alt="see live"
      /></a>
    </div>
  `;

  modalContainer.appendChild(modal);
}

function closeBtn() {
  document.querySelector('.modalcross').addEventListener('click', () => {
    modalContainer.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
}

workBtns.forEach((workBtn) => {
  workBtn.addEventListener('click', () => {
    modalContainer.innerHTML = '';
    generateModal(workData[workBtn.dataset.id]);
    closeBtn();
    modalContainer.classList.add('active');
    document.body.classList.add('no-scroll');
  });
});
