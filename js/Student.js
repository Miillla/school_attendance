function Student(firstName, lastName, birthday) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = birthday;
  this.scores = new Array();
  this.attendance = new Array(25).fill(null);
}
Student.prototype.absent = function () {
  const nextIndex = this.attendance.indexOf(null);
  if (nextIndex !== -1) {
    this.attendance[nextIndex] = false;
  } else {
    console.log("Attendance record is already full!");
  }
};

Student.prototype.present = function () {
  const nextIndex = this.attendance.indexOf(null);
  if (nextIndex !== -1) {
    this.attendance[nextIndex] = true;
  } else {
    console.log("Attendance record is already full!");
  }
};

Student.prototype.summary = function () {
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

Student.prototype.getAverageScore = function () {
  if (this.scores.length === 0) return 0;
  const total = this.scores.reduce((acc, score) => acc + score, 0);
  return total / this.scores.length / 100;
};

Student.prototype.addScore = function (score) {
  this.scores.push(score);
};

Student.prototype.showInfo = function () {
  document.write(`
          firstName: ${this.firstName}<br>
          lastName: ${this.lastName}<br>
          birthday: ${this.birthday}<br>
        `);
};
