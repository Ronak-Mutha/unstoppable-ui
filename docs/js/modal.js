const dialogContainer = document.querySelector('.dialog-container');
const btnModalOpen = document.querySelector('.btn-modal-open');
const btnModalClose = document.querySelectorAll('.btn-modal-close');

btnModalOpen.addEventListener('click', () => {
    dialogContainer.classList.toggle('display-none');
});

btnModalClose.forEach(btn => {
    btn.addEventListener('click', () => {
        dialogContainer.classList.add('display-none');
    })
});
