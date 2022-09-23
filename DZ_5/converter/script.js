const body = document.querySelector('.wrapper');
const currency = document.querySelectorAll('input');
body.addEventListener('input',(e) => {
    const target = e.target;
    const convert = (item,data) => {
        (target.id === 'KGS')
            ?item.value = (target.value / data[item.id]).toFixed(2)
            :item.value = (target.value * data[target.id] / data[item.id]).toFixed(2)
    }

    const req = new XMLHttpRequest();
    req.open('GET','data.json');
    req.setRequestHeader('Content-type','application/json');
    req.send();
    req.addEventListener('load', () => {
        const data = JSON.parse(req.response);
        currency.forEach((item) => {
            if (item === target) return
            (!target.value)
                ?item.value = ''
                :convert(item,data)
        })
    })
})