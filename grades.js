function grade(marks) {
    if (marks > 90) {
        return "Grade: A";
    } 
    else if (marks > 75) {
        return "Grade: B";
    } 
    else if (marks > 60) {
        return "Grade: C";
    } 
    else {
        return "Fail";
    }
}
let marks = 84;
console.log("Marks: " + grade(marks));