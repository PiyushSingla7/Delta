let studentsdata = [];

function addstudent(roll_number, name, age, grade) {
  var newstudent = { roll_number, name, age, grade };
  studentsdata.push(newstudent);
}

addstudent(1, "Aman", 12, 60);
addstudent(2, "Rohan", 17, 80);
addstudent(3, "Sohan", 21, 90);
addstudent(4, "Mohan", 15, 90);

console.log(studentsdata);

function removestudent(roll_number) {
  for (let index = 0; index < studentsdata.length; index++) {
    if (studentsdata[index].roll_number == roll_number) {
      studentsdata.splice(index, 1);
      break;
    }
  }
}

removestudent(2);

console.log(studentsdata);

function getstudent(roll_number) {
  for (let index = 0; index < studentsdata.length; index++) {
    if (studentsdata[index].roll_number == roll_number) {
      return studentsdata[index];
    }
  }
  return "No Student Record Found...";
}

console.log(getstudent(3));
console.log(getstudent(5));

function getstudentwithmaxgrade() {
  if (studentsdata.length === 0) {
    return "No studentsdata Available";
  }

  let result = [];
  let maxGrade = studentsdata[0].grade;

  for (let index = 1; index < studentsdata.length; index++) {
    if (studentsdata[index].grade > maxGrade) {
      maxGrade = studentsdata[index].grade;
      result = [studentsdata[index]];
    } else if (studentsdata[index].grade === maxGrade) {
      result.push(studentsdata[index]);
    }
  }

  return result;
}

console.log(getstudentwithmaxgrade());
