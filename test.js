/*PROMPT*/
// Create a function called 'Multiplication' that returns the product of two input numbers
  
  /*UNIT TESTS*/
  // We expect multiplication to accept integers as arguements and return the product of those integers
  // We expect multiplication(5, 5) to return the product of 25
  // We expect multiplication('string', 5) to be an error
  // We expect multiplication(true, 5) to be an error
  
/*PROMPT*/
/*Create a function called 'concatOdds' that takes two arrays of integers as arguements.
  It should return a single array that only contains odd numbers, in ascending order, from both arrays*/

  /*UNIT TESTS*/
  // We expect concatOdds to accept two arrays and return a single array
  // We expect the array returned by concatOdds to contain all odd numbers in ascending order (odd numbers should include both arrays passed in)
  // We expect concatOdds([1, 2, 5, 6, 9], [10, 3, 6, -2, -3, -1]) to return [-3, -1, 1, 3, 5, 9]
  // We expect concatOdds(['apple', 'pear', 'pineapple', 'strawberry'], [1, 3, 2, 9, 'carrot']) to be an error

/*PROMPT*/
/*Create a shopping cart feature that allows a user to check out as a guest, with or without an account.*/

  /*FUNCTIONAL TESTS*/
  // When the user clicks  'Ready to checkout?', they should be given the option to checkout as a member or a guest. (Preferably answered through 'yes or no' text box)
    // If User clicks 'Yes' to the question 'Are you a member', if they are not already logged in, they will be sent to another page with a user sign-in text field
    // If User clicks 'No', they will be asked if they want to create an account, or proceed as a guest. If User decides to create an account, they will be taken to another page.
  // When User has signed in or proceeds as a guest, they will be shown their cart items and given a total of cart items prices.
  // The User will click 'Yes' or 'No' to the question 'Is this your order?'
    // If User clicks 'Yes', they will proceed to shippiung fulfillment method and payment info page.
    // If User clicks 'No', they will be taken back to cart items and be given the option to shop the 'store' again.
  // The User will input their payment info and shipping adress and confirm order.

  /*EDGE CASE*/
  // If User clicks "Ready to checkout?" while having an empty cart, they will have a pop-up saying "You have no items in cart".