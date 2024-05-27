
                                                        //QNO:1

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

let People: any = {
  friends: [],
};

let friend1 = {
  firstName: "Muhammad",
  lastName: "Azan",
  id: 1,
};
let friend2 = {
  firstName: "Mohammad",
  lastName: "Huzaif",
  id: 2,
};
let friend3 = {
  firstName: "Ali",
  lastName: "Khan",
  id: 3,
};

People.friends = [friend1, friend2, friend3];  // putting people.friends[] arry equal to Arryof [object friend1, objec friend2, objec friend3]
console.log(People.friends);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

                                                                                //QNO:2
// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".

// The join method in JavaScript (and TypeScript) is used to concatenate all the elements of an array into a single string, with a specified separator string between each element like [arry.join(",")]
const scrambledArray: any[] = [
  "student",
  "of",
  true,
  123,
  "am",
  "a",
  "GIAIC",
  "I",
];
scrambledArray.splice(2, 2);

let RearrangeArry: string[] = [];

RearrangeArry.push(scrambledArray.find((Element) => Element === "I")); //find method is used to search through an array and return the first element that satisfies a provided condition
RearrangeArry.push(scrambledArray.find((Element) => Element === "am"));
RearrangeArry.push(scrambledArray.find((Element) => Element === "a"));
RearrangeArry.push(scrambledArray.find((Element) => Element === "student"));
RearrangeArry.push(scrambledArray.find((Element) => Element === "of"));
RearrangeArry.push(scrambledArray.find((Element) => Element === "GIAIC"));

console.log(RearrangeArry.join(" "));

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

                                                                                //QNO:3

// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.

let inventory: any[] = [];

let product1 = {
  name: "Laptop",
  model: "Dell",
  cost: 10000,
  quantity: 10,
};
let product2 = {
  name: "Mobile",
  model: "Samsung",
  cost: 5000,
  quantity: 20,
};
let product3 = {
  name: "Civic",
  model: "Honda",
  cost: 7000000,
  quality: 30,
};
let product4 = {
  name: "Headphones",
  model: "R-708",
  cost: 5000,
  quantity: 100,
};

 inventory = [product1, product2, product3,product4,]

let accessingProperty1 = (inventory[1].quantity = 50); // changing property by accessing it
let accessingProperty2 = inventory[3].quantity;
console.log(accessingProperty1, accessingProperty2);

console.log(inventory);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


                                                                    //QNO:4
// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

interface Student {
  name: string;
  seniorStatus: boolean;
  completedAssignments: boolean;
}

let students: Student[] = [
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
  let completedAssignments = students.filter(
    (student) =>
      student.completedAssignments === true && student.seniorStatus === true
  );
  console.log(completedAssignments);
  console.log("\n", `This Students have completed their assignments`);
}

completedAssignments();

function notCompletedAssignmnets() {
  let notCompletedAssignmnets = students.filter(
    (student) =>
      student.completedAssignments === false && student.seniorStatus === false
  );
  console.log(notCompletedAssignmnets);
  console.log("\n", `This Students have not completed their assignments`);
}
notCompletedAssignmnets();

function seniorStudents() {
  let seniorStudents = students.filter(
    (student) =>
      student.completedAssignments === false && student.seniorStatus === true
  );
  console.log(seniorStudents);
  console.log(
    "\n",
    `This Students are seniors but didn't complete their assignments`
  );
}

seniorStudents();

function notSeniorStudents() {
  let notSeniorStudents = students.filter(
    (student) =>
      student.completedAssignments === true && student.seniorStatus === false
  );
  console.log(notSeniorStudents);
  console.log(
    "\n",
    `This Students are not seniors but they complete their assignments`
  );
}

notSeniorStudents();
