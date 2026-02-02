// Controllo: funziona? vedo qualcosa in console? ho collegato file JS eHTML?
console.log("It's working");

/* WHAT WE NEED:
  - variables
  - prompt()
  - JS operators
  - if/else
  - Number()

*/

// Collect data
let kilometers, price_km_based, output_price, user_price, age

  // Aks User for kilometers amount - PROMPT, convert from string to number - NUMBER(), store the value in a variable
  kilometers = 100/* Number(prompt('How many kilometers long is your railway route?')); // console.log(kilometers) */

  // Aks User for traveler age - PROMPT, convert from string to number - NUMBER(), store the value in a variable
  age = Number(prompt('How old is the passenger?'));  // console.log(age)    
    

// Determin total ticket price amount

  // Calc starting price based on km (and store the value in a variable)
  price_km_based = (kilometers * 0.21); // console.log(price_km_based)

  // Check if the User classifies for a discount (and eventually apply it)

  // IF underage -> apply 20% discount (and store the value in a variable)
    if (age < 18) {
      output_price = (price_km_based - (price_km_based / 100) * 20);
    } else if (age >= 65) {
      // ELSE/IF over 65 -> apply 40% discount (and store the value in a variable)
      output_price = (price_km_based - (price_km_based / 100) * 40);
    } else {      
    // ELSE do not apply discount (and store the value in a variable)
    output_price = price_km_based;
    }
    //console.log(output_price)

  // Convert final price into a human friendly form: no more than 2 decimal places (and store value)
  user_price = output_price.toFixed(2);  console.log(user_price)


  

