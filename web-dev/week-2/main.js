
// Classes in JavaScript

// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area() {
//         const area = this.width * this.height;
//         return area;
//     }

//     paint() {
//         console.log(`Painting with color` + this.color);
//     }
// }

// const rect = new Rectangle(2, 4, "red");
// const area = rect.area();
// rect.paint();
// console.log(area);








// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log("My name is " + this.name + " and I am " + this.age + " years old.");
//     }
// }

// const john = new Person("John", 30);
// john.greet();






// // Predefined Classes

// const now = new Date();
// console.log(now.getDate());


// const map = new Map();
// map.set("name", 'John');
// map.set("age" , 20);
// console.log(map.get("name"));






function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}