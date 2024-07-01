function calculateGrade() {
    let marks = prompt("Enter the student's marks (between 0 and 100):");

    while (isNaN(marks) || marks < 0 || marks > 100) {
      marks = prompt("Invalid input. Please enter a number between 0 and 100:");
    }

    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "B";
    } else if (marks >= 49) {
      grade = "C";
    } else if (marks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
    alert(`The student's grade is: ${grade}`);
  }
  calculateGrade();