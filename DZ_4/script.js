const wrapper = document.querySelector('.wrapper');
const userData = document.querySelectorAll('span');
const showBtn = document.querySelectorAll('.show-btn');
const show = (i,arr) => {
    showBtn[i].style.display = 'none';
    userData[i].innerText += ` ${arr[i]}`;
}

wrapper.addEventListener('click', (event) => {
    const target = event.target;
    const request = new XMLHttpRequest();
    request.open('GET','data.json');
    request.setRequestHeader('Content-type','application/json');
    request.send();
    request.addEventListener('load',() => {
        const data = JSON.parse(request.response);
        const dataArr = [];
        for (const obj in data){
            dataArr.push(data[obj])
        }

        if (target.classList.contains('show-btn')){
            showBtn.forEach((item,i) => {
                if (item === target) {
                    show(i,dataArr);
                }
            })
        }
    })
})