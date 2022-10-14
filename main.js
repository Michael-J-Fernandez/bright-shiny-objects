// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

// ----- createUser -----
console.log("\n----- createUser() -----");


function createUser(firstName, lastName) {
    let user = {
        firstName,
        lastName
    }
    return user;
}

console.log(createUser("Michael", "Fernandez"));





// ----- setAge -----
console.log("\n----- setAge() -----");


function setAge(user, age) {
    user.age = age;
    return user;
}

console.log(setAge(createUser("Michael", "Fernandez"), 35));





// ----- incrementAge -----
console.log("\n----- incrementAge() -----");


function incrementAge(user) {
    user.age++;
    return user;
}

console.log(incrementAge(setAge(createUser("Michael", "Fernandez"), 34)));





// ----- fixCar -----
console.log("\n----- fixCar() -----");

const car = {
    make : 'Ford',
    model : 'Mustang',
    year : 1969,
    needsMaintenance : true
};

function fixCar(car) {
    car.needsMaintenance = false;
    return car;
}

console.log(fixCar(car));





// ----- addGrades -----
console.log("\n----- addGrades() -----");


const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
};

const newGrades = [88, 70, 90];

function addGrades(student, newGrades) {

    student.grades = student.grades.concat(newGrades);

    return student;
}

console.log(addGrades(student, newGrades));





// ----- getDataType -----
console.log("\n----- getDataType() -----");


function getDataType(object, key) {
    return typeof object[key];
}

console.log(getDataType(car, 'make'));              // => 'string'
console.log(getDataType(car, 'model'));             // => 'string'
console.log(getDataType(car, 'year'));              // => 'number'
console.log(getDataType(car, 'needsMaintenance'));  // => 'boolean'




// ----- addTodo -----
console.log("\n----- addTodo() -----");

const todos = [
    { 
        title: 'Get gas', 
        isComplete: false },
    { 
        title: 'Buy bread', 
        isComplete: true  
    }
];

const newTodo = {
    title: 'Call mom', 
    isComplete: false
};


function addTodo(array, toDo) {
    array.push(toDo);
    return array;
}

console.log(addTodo(todos, newTodo));

console.log(addTodo(todos, { title: "Complete this problem", isComplete: false}));
console.log(addTodo(todos, { title: "Test this problem", isComplete: false}));
console.log(addTodo(todos, { title: "Profit", isComplete: false}));




// ----- addSong -----
console.log("----- addSong() -----");

const playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};

const newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
};


function addSong(playlistObj, songObj) {

    playlistObj.duration += songObj.duration;
    playlistObj.songs.push(songObj);
    
    return playlistObj;
}

console.log(addSong(playlist, newSong));





// ----- updateReportCard -----
console.log("----- updateReportCard() -----");

const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 96, 80]
};


function updateReportCard(reportCard, newGrade) {

    // adds newGrade to reportCard
    reportCard.grades.push(newGrade);

    for (let i = 0; i < reportCard.grades.length; i++) {

        // sets new lowestGrade
        if (reportCard.grades[i] < reportCard.lowestGrade) {
            reportCard.lowestGrade = reportCard.grades[i];
        }
        // sets new highestGrade
        if (reportCard.grades[i] > reportCard.highestGrade) {
            reportCard.highestGrade = reportCard.grades[i];
        }
    }
    // sets new average
    reportCard.averageGrade = reportCard.grades.reduce((a, b) => a + b) / reportCard.grades.length;

    return reportCard;
}

console.log(updateReportCard(reportCard, 62));
//=>
// {
//     lowestGrade: 62,
//     highestGrade: 96,
//     averageGrade: 77,
//     grades: [70, 96, 80, 62]
// }

console.log(updateReportCard(reportCard, 100));
// =>
// {
//     lowestGrade: 62,
//     highestGrade: 100,
//     averageGrade: 81.6,
//     grades: [70, 96, 80, 62, 100]
// }











// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
