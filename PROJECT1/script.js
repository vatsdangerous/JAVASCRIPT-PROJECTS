function changeBackgroundColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
const colorChangeButton = document.getElementById('colorChangeButton');
colorChangeButton.addEventListener('click', changeBackgroundColor);

function imageToggleVisibility() {
    const image = document.querySelector('main img');
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
}
const imageCheckBox = document.getElementById('imageCheckbox');
imageCheckBox.addEventListener("change", imageToggleVisibility);

const showAlert = () => {
    alert('you clicked a link');
}
const navigationLinks = document.querySelectorAll('nav a');
navigationLinks.forEach((link) => { link.addEventListener('click', showAlert); })