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
  switch (type) {
    case 'demo':
      let demoDisplay = document.getElementsByClassName('demo-open')[0];
      demoDisplay.classList.remove('hidden');
      break;
    case 'help':
      let helpDisplay = document.getElementsByClassName('help-open')[0];
      helpDisplay.classList.remove('hidden');
      break;
  }
}

const closeModal = (e) => {
  e.currentTarget.classList.add('hidden');
  let demoDisplay = document.getElementsByClassName('demo-open')[0];
  demoDisplay.classList.add('hidden');
  let helpDisplay = document.getElementsByClassName('help-open')[0];
  helpDisplay.classList.add('hidden');
}