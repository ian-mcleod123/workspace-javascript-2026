const foodDatabase = [
    {name: "Apple (1 medium)", cal: 95},
    {name: "Banana (1 medium)", cal: 105},
    {name: "Orange (1 medium)", cal: 62}
];

let food = {name: "Chicken(1 Piece)", cal: 335};
food.cal = 1000;
console.log(food);
//add one more food item to the database
foodDatabase.push({name: "pizza (1 slice)", cal: 375});
console.log(foodDatabase);
// foodDatabase.forEach(food => console.log(food));
for (let i in foodDatabase) {
    let name = foodDatabase[i].name;   //object
    let cal = foodDatabase[i].cal;
    if (cal > 100) {
        console.log("index " + i + " name: " + name + " cal: " + cal);
    } 
}
//hotel reservation problem---database(array) to stop the reservations
let reservationList=[];
function saveReservation() {
    let reservation = {
        name: document.querySelector("#name").value,
        roomtype: document.querySelector("#roomtype").value,
        checkin: document.querySelector("#checkin").value,
        checkout: document.querySelector("#checkout").value
    };
    reservationList.push(reservation);
    console.log("The reservation list is: ", reservation);
    console.log(reservationList);
    displayReservationList();
}
//Event -----> Action
const sE = document.querySelector("#submitEvent");
if (sE) {
    sE.addEventListener("click", saveReservation);
}

//implememnt display reservation list
function displayReservationList() {
    const table = document.createElement("table");
    reservationList.forEach(reservation => {
        const row = document.createElement("tr");
        [reservation.name, reservation.roomtype, reservation.checkin, reservation.checkout]
            .forEach(value => {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });
        table.appendChild(row);
    });
    const completeListDiv = document.querySelector("#completelist");
    if (completeListDiv) {
        completeListDiv.innerHTML = "";
        completeListDiv.appendChild(table);
    } else {
        console.warn('Element with id "completelist" not found.');
    }
}
    
   


