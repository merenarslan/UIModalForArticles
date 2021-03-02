/*
    Name : Melih Arslan
    Project Name : UI Project
    Start Date : 03-01-2021
    Last Update : 03-02-2021
*/

'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  }
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    modal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
// Close model with exit button
for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', closeModal);
}
// Close modal out of box
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    for (let i = 0; i < modal.length; i++)
      if (!modal[i].classList.contains('hidden')) {
        closeModal();
      }
  }
});
