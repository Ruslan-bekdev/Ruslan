const obj = {
    name: 'Ruslan',
    age: '16'
}

const req = new XMLHttpRequest();
req.open('POST','server.php');
req.setRequestHeader('Content-tupe','application/json');
req.send(JSON.stringify(obj));

req.addEventListener('load', () => {
    req.status === 200
        ?console.log('Всё ок')
        :console.log('Ошибка');
})