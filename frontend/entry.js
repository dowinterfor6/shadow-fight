import Arena from "./game";

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  new Arena(canvas);
  attachEventListeners();
});

const attachEventListeners = () => {
  let demoIcon = document.getElementsByClassName('demo-icon-container')[0];
  let helpIcon = document.getElementsByClassName('help-icon-container')[0];
  let modalBackground = document.getElementsByClassName('modal-background')[0];
  let modalChild = document.getElementsByClassName('modal-child')[0];

  modalChild.addEventListener('mousedown', (e) => e.stopPropagation());
  modalBackground.addEventListener('mousedown', (e) => closeModal(e));
  demoIcon.addEventListener('mousedown', () => openModal('demo', modalBackground));
  helpIcon.addEventListener('mousedown', () => openModal('help', modalBackground));
}

const openModal = (type, modalBackground) => {
  modalBackground.classList.remove('hidden');
  console.log(type);
}

const closeModal = (e) => {
  e.currentTarget.classList.add('hidden');
}