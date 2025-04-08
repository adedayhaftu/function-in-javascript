//number 1,

function sorting(items) {
    return items
      .map(items => items.split('').sort((a, b) => b.localeCompare(a)).join(''))
      .sort();
  }
  let names=["adeday","yalem","Rediet"]
 console.log(sorting(names));

 // number 2,

function checking(arr) {
    return arr.map(num => {
        if (num > 0) {
            return "is positive";
        } else if (num < 0) {
            return "is negative";
        } else {
            return "is zero";
        }
    });
 }
 console.log(checking([-4, 3, -6, 2])
 );
 
 //num 3,

function salary(employees) {
    return [...employees].sort((a, b) => a.salary - b.salary);
 }
 let employees = [
    { id: 'employee 1', name: "Adeday", salary: 500 },
    { id: 'employee 2', name: "Yalem", salary: 700 },
    { id: 'employee 3', name: "Fana", salary: 300 }
 ];
 const sortingEmployees = salary(employees);
 console.log(sortingEmployees);

 //number 4,

function multipliedNumbers(numbers) {
    numbers.forEach(item => console.log(item * 2));
 }
 multipliedNumbers([30, 60, 70, 90, 100]);
 
 //number 5,

 function calculationArray(numbers) {
    for (let i = 0; i < 4 && i < numbers.length; i++) {
      numbers[i] *= 8;
    }
    for (let i = numbers.length - 2; i < numbers.length; i++) {
      numbers[i] += 5;
    }
    console.log(numbers);
  }
  calculationArray([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])

 
 
 
 