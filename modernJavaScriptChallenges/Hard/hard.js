let redButton = document.querySelector('.button-red');
let whiteButton = document.querySelector('.button-white');

redButton.addEventListener('click', () => {
    updateTheBackground('red');
});


whiteButton.addEventListener('click', () => {
    updateTheBackground('white');
});

window.updateTheBackground =  function(className) {
    document.body.classList = className;
}
