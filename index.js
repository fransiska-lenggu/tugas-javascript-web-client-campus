function calculateRectangleArea(length, width) {
    return length * width;
}
console.log(calculateRectangleArea(5, 3)); // 
//=========task 2==========
function circleCalculations(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);
    return {
        diameter: diameter,
        circumference: circumference.toFixed(4),
        area: area.toFixed(3)
    };
}
console.log(circleCalculations(5));
=============task 3============
function findThirdAngle(a, b) {
    return 180 - (a + b);
}
console.log(findThirdAngle(80, 65)); 
===============task 4============
function dateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let difference = Math.abs(d2 - d1);
    
    return difference / (1000 * 60 * 60 * 24); // Konversi dari milidetik ke hari
}
console.log(dateDifference("2024-03-19", "2024-03-21")); 
===========task 5==============
function getInitials(name) {
    let words = name.split(" ");
    let initials = words.map(word => word[0].toUpperCase()).join("");
    return initials;
}
console.log(getInitials("John Doe")); 
