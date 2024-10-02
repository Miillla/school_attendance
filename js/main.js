const currentStudent = new Student("John", "Holyo", "07.12.1186");

currentStudent.present();
currentStudent.absent();
currentStudent.absent();
currentStudent.addScore(50);
currentStudent.addScore(40);

const currentStudent2 = new Student("Mary", "lllll", "07.11.1286");
currentStudent2.present();
currentStudent2.present();
currentStudent2.present();

currentStudent2.addScore(80);
currentStudent2.addScore(70);

const currentStudent3 = new Student("Mary", "lllll", "07.11.1286");
currentStudent3.present();
currentStudent3.present();
currentStudent3.present();
currentStudent3.addScore(90);
currentStudent3.addScore(100);

console.log(currentStudent.summary());
console.log(currentStudent2.summary());
console.log(currentStudent3.summary());
