// ---------------- Part 1: Variables and Conditionals ----------------

// Ask for user's name and greet them
let userName = prompt("Enter your name:");
if (userName) {
  document.getElementById("welcomeMessage").textContent = "Welcome, " + userName + "!";
} else {
  document.getElementById("welcomeMessage").textContent = "Welcome, Guest!";
}

// ---------------- Part 2: Functions ----------------

// Function to calculate a total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format a string
function formatString(str) {
  return str.toUpperCase();
}

// Event listener for total calculation
document.getElementById("calculateBtn").addEventListener("click", function() {
  let total = calculateTotal(50, 3); // Example: price = 50, quantity = 3
  document.getElementById("totalOutput").textContent = "Total: KSH" + total;
});

// ---------------- Part 3: Loops ----------------

// For loop example: generate numbers
document.getElementById("loopBtn").addEventListener("click", function() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear existing list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
});

// While loop example: countdown in console
let count = 5;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// ---------------- Part 4: DOM Manipulation ----------------

// Toggle a CSS class
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Change text on hover
document.getElementById("toggleText").addEventListener("mouseover", function() {
  this.textContent = "Mouse is over me!";
});
document.getElementById("toggleText").addEventListener("mouseout", function() {
  this.textContent = "Watch me change color!";
});

// Create new element dynamically
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created with JavaScript!";
document.body.appendChild(newParagraph);
