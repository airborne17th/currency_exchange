// John Kyker 5-21-2020
// Our URL we use to call the API to get our JSON data
let baseURL = "https://api.exchangeratesapi.io/latest?base=";
// We are going to use these for the DOM manipulation to display to the page. 
// Also allows us to change ID here and reference them elsewhere if we scale up the project.
let exRate = document.getElementById("exchange_rate");
let base_cur = document.getElementById("base_currency");
let output_cur = document.getElementById("output_currency");
let output_amount = document.getElementById("output_amount");
let input_amount = document.getElementById("input_amount");
let date = document.getElementById("date");
function convertCurrency(){
    // Get our user inputs
    input = document.getElementById("base").value;
    principal = document.getElementById("principal").value;
    output = document.getElementById("output").value;

    // combine the baseURL to our User Inputs to create the API call
    fetchURL = (baseURL + input + "&symbols=" + output);
    fetch(fetchURL)
    .then(response => response.json())
    .then(function(data){
      // Find the output amount of money based on the input and then reduce to 2 decimals
      result = principal * data.rates[output];
      result = result.toFixed(2);
      // Display info back to user.
      exRate.innerHTML = data.rates[output];
      base_cur.innerHTML = data.base;
      output_cur.innerHTML = output;
      output_amount.innerHTML = result;
      input_amount.innerHTML = principal;
      date.innerHTML = data.date;
      console.log(data);
    })
    .catch(function(error){
      window.alert("Cannot Find Data! Try Again Later.");
    });
}

