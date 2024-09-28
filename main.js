function Student(firstName, lastName, birthday) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = birthday;
  this.scores = new Array();
  this.attendance = new Array(25).fill(null);
  this.present = () => {
    const nextIndex = this.attendance.indexOf(null);
    if (nextIndex !== -1) {
      this.attendance[nextIndex] = true;
    } else {
      console.log("Attendance record is already full!");
    }
  };

  this.absent = () => {
    const nextIndex = this.attendance.indexOf(null);
    if (nextIndex !== -1) {
      this.attendance[nextIndex] = false;
    } else {
      console.log("Attendance record is already full!");
    }
  };
  this.summary = () => {
    const classDay = this.attendance.indexOf(null);
    const visits = this.attendance.filter((status) => status === true).length;

    const calculate = visits / classDay;
    console.log(calculate);
    // 70
    // 0.9
    if (calculate > 0.9 && this.getAverageScore() > 0.9) {
      return "Well done!";
    }
    console.log(this.getAverageScore());
    if (calculate > 0.9 || this.getAverageScore() > 0.9) {
      return "Good, but it can be better";
    }
    return "Radish!";
  };
  this.getAverageScore = () => {
    if (this.scores.length === 0) return 0;
    const total = this.scores.reduce((acc, score) => acc + score, 0);
    return total / this.scores.length / 100;
  };

  this.addScore = (score) => {
    this.scores.push(score);
  };

  this.showInfo = function () {
    document.write(`
        firstName: ${this.firstName}<br>
        lastName: ${this.lastName}<br>
        birthday: ${this.birthday}<br>
      `);
  };
}
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
