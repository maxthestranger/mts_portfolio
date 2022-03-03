import workData from './data.js';

const workOuterContainer = document.querySelector('.works');

// create works
function generateWorks({ name, tech, ImgUrl }, index) {
  const workContainer = document.createElement('div');
  workContainer.classList.add('works-item');

  workContainer.innerHTML = `
  <div class="work-img">
    <div class="proj-image">
      <img src="img/${ImgUrl}" alt="${name}" />
    </div>
  </div>
  <div class="lower">
    <h3>${name}</h3>
    <ul class="tags">
    ${tech.map(
      (tec) => `<li>
      <a href="#"> ${tec} </a>
    </li>`
    )}
    </ul>
    <button class="btn show-modal" data-id="${index}" type="button">
      See Project
    </button>
  </div>
  `;

  workOuterContainer.appendChild(workContainer);
}

// create works section
workData.forEach((work, index) => {
  generateWorks(work, index);
});

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

// create modal
function generateModal({ ImgUrl, name, description, tech, demoUrl, gitUrl }) {
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
      </li>`
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

// mail validation
const form = document.querySelector('.form');
const MAIL_ERROR = 'Please enter your email address in lower case';

function displayErr(input, msg) {
  const msgCon = input.parentNode.querySelector('small');

  msgCon.innerText = msg;
}

function handleMailValidation(input, msg) {
  const inputVal = input.value.trim().toLowerCase();
  if (inputVal !== input.value.trim()) {
    displayErr(input, msg);
    return false;
  } else {
    displayErr(input, '');
    return true;
  }
}

// local Storage

function createUserData(formElement) {
  return {
    f_name: formElement.elements.f_name.value.trim(),
    l_name: formElement.elements.l_name.value.trim(),
    email_address: formElement.elements.email_address.value.trim(),
    comment: formElement.elements.comment.value.trim(),
  };
}

function storeInfo(formElement) {
  localStorage.setItem('userInfo', JSON.stringify(createUserData(formElement)));
}

// submit form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let submit = handleMailValidation(form.elements.email_address, MAIL_ERROR);

  if (submit) {
    storeInfo(form);
    form.submit();
  }
});

// load form with data from local storage
function mapDataForm(data) {
  if (Object.entries(data).length > 0) {
    let { f_name, l_name, email_address, comment } = data;
    form.elements.f_name.value = f_name;
    form.elements.l_name.value = l_name;
    form.elements.email_address.value = email_address;
    form.elements.comment.value = comment;
  }
}

function loadFormData() {
  let userData =
    localStorage.length > 0 ? JSON.parse(localStorage.getItem('userInfo')) : {};

  mapDataForm(userData);
}

loadFormData();
