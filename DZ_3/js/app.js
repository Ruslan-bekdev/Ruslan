const tabContent = document.querySelectorAll('.tabcontent');
const tabHeaderItem = document.querySelectorAll('.tabheader__item');
const tabHeaderItems = document.querySelector('.tabheader__items');

const hideAll = () => {
    tabContent.forEach(item => {
        item.style.display = 'none';
    });
    tabHeaderItem.forEach(item => {
        item.classList.remove('tabheader__item_active');
    })
}
const showItem = (i = 0) => {
    hideAll();
    tabContent[i].style.display = 'block';
    tabHeaderItem[i].classList.add('tabheader__item_active');
}
showItem();
let index = 0;

tabHeaderItems.addEventListener('click', (event,i) => {
    const target = event.target;
    if (target.classList.contains('tabheader__item')){
        tabHeaderItem.forEach((item,i) => {
            if (item === target){
                index = i
                showItem(i);
            }
        })
    }
});

const max = tabHeaderItem.length-1;
setInterval(() => {
    if (index === max) {
        index = 0;
        return showItem();
    }
    index++
    showItem(index);
},6000);

const modalWindow = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const showModalWindow = () => {
    modalWindow.classList.add('show');
    document.body.style.overflow = 'hidden';
}
const hideModalWindow = () => {
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
}
closeModal.addEventListener('click', hideModalWindow)

// scrollTop не работает
// document.body.scrollTop всё время выдаёт 0
// Это наилучшее решение, которое я смог найти
window.onscroll = () => {
    if ((window.innerHeight + window.pageYOffset)+1 >= document.body.offsetHeight)
        showModalWindow();
}