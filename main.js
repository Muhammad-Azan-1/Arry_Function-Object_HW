// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.
let students = [
    { name: "Azan", seniorStatus: true, completedAssignments: true },
    { name: "huzaif", seniorStatus: false, completedAssignments: false },
    { name: "Anus", seniorStatus: true, completedAssignments: true },
    { name: "Azlan", seniorStatus: true, completedAssignments: true },
    { name: "Faizan", seniorStatus: false, completedAssignments: false },
    { name: "Awais", seniorStatus: true, completedAssignments: true },
    { name: "Saad", seniorStatus: false, completedAssignments: false },
    { name: "Parveen", seniorStatus: true, completedAssignments: true },
    { name: "Zainab", seniorStatus: false, completedAssignments: false },
    { name: "Jevariya", seniorStatus: false, completedAssignments: false },
    { name: "Jawaria", seniorStatus: true, completedAssignments: false },
    { name: "maira", seniorStatus: false, completedAssignments: true },
    { name: "Jibran", seniorStatus: false, completedAssignments: true },
    { name: "Ayesha", seniorStatus: false, completedAssignments: true },
    { name: "Barerah", seniorStatus: true, completedAssignments: false },
    { name: "Ali", seniorStatus: true, completedAssignments: false },
];
function completedAssignments() {
    let completedAssignments = students.filter((student) => student.completedAssignments === true && student.seniorStatus === true);
    console.log(completedAssignments);
    console.log("\n", `This Students have completed their assignments`);
}
completedAssignments();
function notCompletedAssignmnets() {
    let notCompletedAssignmnets = students.filter((student) => student.completedAssignments === false && student.seniorStatus === false);
    console.log(notCompletedAssignmnets);
    console.log("\n", `This Students have not completed their assignments`);
}
notCompletedAssignmnets();
function seniorStudents() {
    let seniorStudents = students.filter((student) => student.completedAssignments === false && student.seniorStatus === true);
    console.log(seniorStudents);
    console.log("\n", `This Students are seniors but didn't complete their assignments`);
}
seniorStudents();
function notSeniorStudents() {
    let notSeniorStudents = students.filter((student) => student.completedAssignments === true && student.seniorStatus === false);
    console.log(notSeniorStudents);
    console.log("\n", `This Students are not seniors but they complete their assignments`);
}
notSeniorStudents();
export {};
