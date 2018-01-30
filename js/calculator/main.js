console.log('JS loaded');
var keepCalculating = true;

while (keepCalculating === true) {
  const type = window.prompt('What type of calculation to you want to do? \n Type \n a for addition \n s for substraction \n m for multiplication \n d for division \n r for square root \n p for power \n mr for MortgageRate \n b for BMI \n t for Trip Calculator');
  if (type === 'a') {
    var addition1 = parseFloat(window.prompt('Enter your first number'),10);
    var addition2 = parseFloat(window.prompt('Enter your second number'),10);
    var additionresult = addition1 + addition2;
    window.alert('Your result is ' + additionresult.toFixed(2));
    keepCalculating = window.confirm('Do you want to do another calculation? Press Ok if so.');
  } else if ( type === 's') {
    var subtraction1 = parseFloat(window.prompt('Enter your first number'),10);
    var subtraction2 = parseFloat(window.prompt('Enter your second number'),10);
    var subtractionresult = subtraction1 - subtraction2;
    window.alert('Your result is ' + subtractionresult.toFixed(2));
    keepCalculating = window.confirm('Do you want to do another calculation? Press Ok if so.');
  } else if ( type === 'm') {
    var multiply1 = parseFloat(window.prompt('Enter your first number'),10);
    var multiply2 = parseFloat(window.prompt('Enter your second number'),10);
    var multiplyresult = multiply1 * multiply2;
    window.alert('Your result is ' + multiplyresult.toFixed(2));
    keepCalculating = window.confirm('Do you want to do another calculation? Press Ok if so.');
  } else if ( type === 'd') {
    var division1 = parseFloat(window.prompt('Enter your first number'),10);
    var division2 = parseFloat(window.prompt('Enter your second number'),10);
    var divisionresult = division1 / division2;
    window.alert('Your result is ' + divisionresult.toFixed(2));
    keepCalculating = window.confirm('Do you want to do another calculation? Press Ok if so.');
  } else if ( type === 'r') {
    var root1 = parseFloat(window.prompt('Enter your number'),10);
    var rootresult = Math.sqrt(root1);
    window.alert('Your result is ' + rootresult.toFixed(2));
    keepCalculating = window.confirm('Do you want to do another calculation? Press Ok if so.');
  } else if ( type === 'p') {
    var power1 = parseFloat(window.prompt('Enter your number'),10);
    var power2 = parseFloat(window.prompt('Enter your second number'),10);
    var powerresult = Math.pow(power1, power2);
    window.alert('Your result is ' + powerresult.toFixed(2));
    keepCalculating = window.confirm('Do you want to do another calculation? Press Ok if so.');
  } else if ( type === 'mo') {
    var principal = parseFloat(window.prompt('Enter your principal'),10);
    var yearlyinterest = (parseFloat(window.prompt('Enter your yearly interest rate'),10)/100)/12;
    var numberofpayments = parseFloat(window.prompt('Enter your number of payments'),10);
    console.log(yearlyinterest);
    var paymentresult = principal * (yearlyinterest * Math.pow((1 + yearlyinterest),numberofpayments) / ((Math.pow((1 + yearlyinterest), numberofpayments) - 1)));
    window.alert('Your monthly rate is ' + paymentresult.toFixed(2));
    keepCalculating = window.confirm('Do you want to do another calculation? Press Ok if so.');
  } else if ( type === 'b') {
    var weight = parseFloat(window.prompt('Enter your weight in KG'),10);
    var height = parseFloat(window.prompt('Enter your Height in metres (e.g. 1.87)'),10);
    var bmiresult = (((weight / height) / height) * 10000);
    window.alert('Your BMI is ' + bmiresult.toFixed(2));
    keepCalculating = window.confirm('Do you want to do another calculation? Press Ok if so.');
  } else if ( type === 't') {
    var distance = parseFloat(window.prompt('Enter your trip distance'),10);
    var mileage = parseFloat(window.prompt('Enter your fuel efficiency in mpg'),10);
    var fuelcost = parseFloat((window.prompt('Enter your estimated cost per gallon in pounds (e.g. 2.87)')),10);
    var speed = parseFloat(window.prompt('Enter your estimated average speed in miles/hour (e.g 70)'),10);
    var timeresult = (distance / speed);
    var costresult = 0;
    if (speed <= 60) {
      costresult = (distance / mileage) * fuelcost;
    } else if (speed <= 70) {
      costresult = ((distance / (mileage - (2 * (speed - 60)))) * fuelcost);
    } else {
      window.alert('You should really slow down, we can not condone driving at these speeds');
      break;
    }
    window.alert('Your trip will take ' + timeresult.toFixed(2) + ' hours and cost $' + costresult.toFixed(2));
    keepCalculating = window.confirm('Do you want to do another calculation? Press Ok if so.');
  } else {
    keepCalculating = window.confirm('If you want to use the calculator please enter a valid calculation key.');
  }
}
