//Array Manipulation Methods//
//1//
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.push("Pineapple", "strawberry", "dragon fruit");
console.log(fruits);
//["Apple", "Banana", "Mango", "Orange", "Grapes", "Pinapple", "Strawberry", "Dragon fruit"]//
//2//
let number = [1, 2, 3, 4, 5, 6];
let removedNumber = number.pop();
console.log("Removed element:", removedNumber);
console.log("updated array:", number);//Removed element: 6// // updated array: [1, 2, 3, 4, 5]
//3//
let names = ["ravi", "selvi", "babu", "david", "ammu"];
let removedName = names.shift();
console.log("Removed element:", removedName);
console.log("Updated array:", names);
//removed element:ravi, Updated array: (4)['selvi', 'babu', 'david', 'ammu']
//4//
let numbers1 = [3, 4, 5, 6];
numbers1.unshift(1, 2);
console.log(numbers1);
//(6) [1, 2, 3, 4, 5, 6]
//5// 
let arr = [10, 20, 30, 40, 50];
let removedElements = arr.splice(1, 2);
console.log("Removed elements:", removedElements);
//removed element: (2)[20,30]
//6//
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(2, 1, 100);
console.log(arr1);
//(5) [1, 2, 100, 4, 5]//
//7//
let arr2 = [10, 20, 30, 40, 50];
arr2.fill("hello", 2, 4);
console.log(arr2);
//(5){10,20,hello,hello,50}
//8//
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray);
//(6)[1,2,3,4,5,6]
//9//
let arr3 = [10,20,30,40,50,60];
let result = arr3.slice(1,4);
console.log(result);
//(3)[20,30,40]
//10// 
let nestedarr4 = [1,[2,3],[4,[5,6,[7,8]]]];
let flatarr4 = nestedarr4.flat(Infinity);
console.log(flatarr4);
// (8)[1,2,3,4,5,6,7,8]
//11//
let arr4 = [10, 20, 30, 40, 50];
let exists = arr4.includes(30);
console.log(exists);
//true
//12//
let arr5 = [5, 10, 15, 20, 25];
let index = arr5.indexOf(20);
console.log(index);
//3
//13//
let arr6 = [1, 2, 3, 2, 1, 2];
let lastIndex = arr6.lastIndexOf(2);
console.log(lastIndex);
// 5
//14// 
let arr7 = [40, 10, 100, 5, 25];
arr7.sort((a, b) => a - b);
console.log(arr7);
// (5)5,10,25,40,100
//15//
let arr8 = [10, 20, 30, 40, 50, 60, 70];
arr8.reverse();
console.log(arr8);
//(7)70,60,50,40,30,20,10
//16//
let arr11= [1, 2, 3, 4];
let arr22 = [5, 6, 7, 8];
let mergedArr = [...arr11, ...arr22];
console.log(mergedArr);
//(8)[1,2,3,4,5,6,7,8]
//17//
let studentDetails = {
  name: "ravi",
  age: 22,
  major: "Computer Science"
};
let jobDetails = {
  jobTitle: "Software Engineer Intern",
  company: "Tech Corp",
  location: "Remote"
};
let mergedProfile = { ...studentDetails, ...jobDetails };
console.log(mergedProfile);
//name: 'ravi', age: 22, major: 'Computer Science', jobTitle: 'Software Engineer Intern', company: 'Tech Corp',
//18//
 function summarizeScores(studentName, courseName, ...scores) {
  console.log("Student:", studentName);
  console.log("Course:", courseName);
  console.log("Remaining scores (array):", scores);
}
summarizeScores("selvi", "JavaScript 101", 85, 90, 95, 100);
//Student: selvi ,javascript2.js:105 ,Remaining scores (array): (4) [85, 90, 95, 100]
//19//
function one(a, b, ...c) {
  let sum = a + b + c[0] + c[1];
  console.log("Sum:", sum);
}
one(10, 20, 30, 40, 50, 60);
//Sum: 100
//20//
let originalArr = [10, 20, 30, 40];
let copiedArr = [...originalArr];
console.log(copiedArr);
//()4)[10 20,30,40]
//21//
let arr9 = [10, 20, 30, 40];
let [a, b, c, d] = arr9;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
//10,20,30,40
//22// 
let nested = [1, 2, [3, 4, [5, 6]]];
let [a1, b1, [c1, d1, [e1, f1]]] = nested;
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
console.log(e1);
console.log(f1);
//1 2 3 4 5 6 
//23//
let student = ["Ammu", 22, 3.8];
let [name, age, cgpa] = student;
console.log("Name:", name);
console.log("Age:", age);
console.log("CGPA:", cgpa);
// name: ammu, age: 22, cgpa: 3.8//
//24//
let user = {
  name11: "babu",
  role11: "Frontend Developer",
  location11: "New York"
};
let { name11, role11, location11 } = user;
console.log("Name:", name11);
console.log("Role:", role11);
console.log("Location:", location11);
//25//
let student1 = {
  name: "senthil",
  address: {
    city: "Chennai",
    state: "Tamil Nadu"
  }
};
let { address: { city, state } } = student1;
console.log("City:", city);  
console.log("State:", state);
//chennai, state:tamilnadu

//26//
let person = {
    name47: "Ravi",
    role: "Student",
    location: {
        mainLocation: "Chennai",
        currentLocation: "Coimbatore"
    }
};

let {name47, role, location: {mainLocation, currentLocation}} = person;

console.log("Name:", name47);
console.log("Role:", role);
console.log("Main Location:", mainLocation);
console.log("Current Location:", currentLocation);
//NAme: Ravi Role: Student Main Location: Chennai Current Location: coimbatore//
//27// 
let J = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

J.shift();
J.pop();

J.unshift(5, 15);

console.log(J); // [5, 15, 20, 30, 40, 50, 60, 70, 80, 90]
//28//
let m = [10, 20, 30, 20, 40, 20];
let n = 20;
console.log(m.includes(n));
console.log(m.indexOf(n));
console.log(m.lastIndexOf(n));// true 1 5//
//29//
let x = {
    name9: "Ravi"
};
let y = {
    role9: "Manager"
};
let employee = {...x, ...y};
let {name9, role9} = employee;
console.log(name9);
console.log(role9);// Ravi Manager//
//30//
let p = [10, [20, 30], [40, [50, 60]]];

let q = p.flat(Infinity);

q.reverse();

console.log(q); //(6) [60, 50, 40, 30, 20, 10]