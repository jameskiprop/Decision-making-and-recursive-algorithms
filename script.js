// //SWITCH CASE
// function clothingAdvisor() {
//   let temp = parseFloat(prompt("Please enter the current temperature (°C):"));
//   let raining = prompt("Is it raining? (yes/no):").toLowerCase();
//   //defining the different temperature categories
//   let tempCategory;
//   if (temp > 0 && temp < 27) {
//     tempCategory = "cool";
//   } else if (temp > 27 && temp <= 33) {
//     tempCategory = "moderate";
//   } else {
//     tempCategory = "warm";
//   }
//   //switching to the various categories
//   switch (tempCategory) {
//     case "cool":
//       if (raining === "yes") {
//         console.log("Gloomy weather, wear waterproof clothing and keep warm.");
//       } else {
//         console.log("Cool weather, wear something warm.");
//       }
//       break;

//     case "moderate":
//       if (raining === "yes") {
//         console.log(
//           "It's warm, but since it's raining, carry a light waterproof jacket."
//         );
//       } else {
//         console.log("Cloudy atmosphere, carry a fleece or light sweater.");
//       }
//       break;

//     case "warm":
//       if (raining === "yes") {
//         console.log(
//           "Warm weather, but still dress lightly and carry a waterproof jacket."
//         );
//       } else {
//         console.log("Warm weather, dress lightly today.");
//       }
//       break;

//     default:
//       console.log("Temperature out of expected range.");
//       break;
//   }
// }
// clothingAdvisor();

/*Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket 
based on the following criteria:

Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20 */

function ticketPrice() {
  let age = prompt("Please enter your age:");

  age = Number(age); //converting the age from being a string to a number
  let price;
  switch (true) {
    case age <= 12:
      price = 10;
      break;

    case age >= 13 && age <= 17:
      price = 15;
      break;

    case age >= 18:
      price = 20;
      break;

    default:
      alert("Please enter a valid age.");
      return;
  }

  alert("The ticket price is $" + price);
}
ticketPrice();
