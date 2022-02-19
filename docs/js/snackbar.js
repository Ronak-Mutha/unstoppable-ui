const btnBaseline = document.querySelector('.btn-baseline');
const btnLeading = document.querySelector('.btn-leading');
const btnStacked = document.querySelector('.btn-stacked');
const baseline = document.querySelector('.baseline');
const leading = document.querySelector('.leading');
const stacked = document.querySelector('.stacked');

btnBaseline.addEventListener('click', () => {
    displayForThreeSeconds(baseline);
});

btnLeading.addEventListener('click', () => {
    displayForThreeSeconds(leading);
});

btnStacked.addEventListener('click', () => {
    displayForThreeSeconds(stacked);
});

function displayForThreeSeconds(el){
    el.classList.remove('display-none');
    setTimeout(() => {
        el.classList.add('display-none');
    }, 3000);
};
