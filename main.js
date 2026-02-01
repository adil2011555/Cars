const cars = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/BMW_M5_E34_front.jpg/500px-BMW_M5_E34_front.jpg",
        carname: "M5 E34",
        a: "https://commons.wikimedia.org/wiki/File:BMW_M5_E34_front.jpg?uselang=ru",
        p: "Машина для реальных любителей заряженной классики ",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Tino_Rossini%27s_Reviews_-_031_-_2007_Mercedes-Benz_E350.jpg/500px-Tino_Rossini%27s_Reviews_-_031_-_2007_Mercedes-Benz_E350.jpg",
        carname: "E55 W211",
        a: "https://ru.wikipedia.org/wiki/Mercedes-Benz_W211",
        p: "Машина для реальных пацанов",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/2021-22_RAM_1500_TRX.jpg/500px-2021-22_RAM_1500_TRX.jpg",
        carname: "Ram trx",
        a: "https://en.wikipedia.org/wiki/Ram_1500_TRX",
        p: "Машина для реальных мужиков",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/2011_Toyota_Land_Cruiser_%28UZJ200R%29_Sahara_wagon_%282011-11-18%29_01.jpg/500px-2011_Toyota_Land_Cruiser_%28UZJ200R%29_Sahara_wagon_%282011-11-18%29_01.jpg",
        carname: "land cruiser 200",
        a: "https://commons.wikimedia.org/wiki/File:2011_Toyota_Land_Cruiser_(UZJ200R)_Sahara_wagon_(2011-11-18)_01.jpg?uselang=ru",
        p: "Машина для реальных рыбаловов",
    },
];

let container = document.getElementById("main");

let box = document.createElement("div");
box.classList.add("box")

container.append(box);


cars.forEach((car)=>{
    box.innerHTML += `
    <div class="car">
    <img src="${car.img}">
    <h3>${car.carname}</h3>
    <p>${car.p}</p>
    <a href="${car.a}">посмотреть информацию</a>
    </div>
    `
})


