//if and else condition

let hour = 7;

if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

// switch

let day = "pizza";

switch (day) {
  case 1:
    console.log("it is Monday");
    break;
  case 2:
    console.log("it is Tuesday");
    break;
  case 3:
    console.log("it is Wednesday");
    break;
  case 4:
    console.log("it is Thursday");
    break;
  case 5:
    console.log("it is Friday");
    break;
  case 6:
    console.log("it is Saturday");
    break;
  case 7:
    console.log("it is Sunday");
    break;
  default:
    console.log(`${day} is not a day`);
}

let testScore = 75;
let letterGrade;

switch (true) {
  case testscore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testscore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}
