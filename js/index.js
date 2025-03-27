function load(){
    getTime();
    countPoints();
}

function getTime() {
    const date = new Date();

    const time = document.getElementById("time");
    time.innerText = date;
}

setInterval(function () {
    getTime();
}, 1000);

function countPoints () {
    const array = [
        {driver: 'Verstappen', points: 0},
        {driver: 'Ocon', points: 0},
        {driver: 'Kubica', points: 0},
        {driver: 'Gasly', points: 0}
    ];

    for(let i=0; i<4; i++) {
        const driverElements = document.querySelectorAll(`.driver${i+1}`);
        driverElements.forEach(item => {
            array[i].points += parseInt(item.innerText);
        })
    }

    for(let i=0; i<4; i++){
        document.getElementById(`driver${i+1}-pos`).innerText = array[i].driver;
        document.getElementById(`driver${i+1}-result`).innerText = array[i].points;
    }
}