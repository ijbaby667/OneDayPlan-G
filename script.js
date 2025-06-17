// Arrays of options
const mornings = ["Yoga in the park", "Visit a local café", "Early morning walk", "Watch the sunrise", "Read a book with tea"];
const lunches = ["Jollof rice & chicken", "Suya wrap & Zobo", "Amala & Ewedu", "Burger & smoothie", "Nkwobi & Malt"];
const afternoons = ["Go to an art gallery", "Mini photoshoot", "Beach walk", "Board games with friends", "Watch a documentary"];
const dinners = ["Pasta night", "Pizza & chill", "Ice cream hangout", "Grilled fish & chips", "Rice & stew with fried plantain"];
const budgets = ["₦3,000", "₦5,000", "₦7,000", "₦10,000", "₦15,000"];
const moods = ["Relax & Recharge 💆‍♀️", "Fun & Active 🎉", "Romantic & Cozy ❤️", "Chill & Casual 😎", "Creative & Curious 🎨"];

// Get DOM elements
const generateBtn = document.getElementById("generateBtn");
const planOutput = document.getElementById("planOutput");

// Function to get a random item
function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Generate plan
function generatePlan() {
  const morning = randomFrom(mornings);
  const lunch = randomFrom(lunches);
  const afternoon = randomFrom(afternoons);
  const dinner = randomFrom(dinners);
  const budget = randomFrom(budgets);
  const mood = randomFrom(moods);

  // Display the plan
  planOutput.innerHTML = `
    <p><strong>🌅 Morning:</strong> ${morning}</p>
    <p><strong>🍽️ Lunch:</strong> ${lunch}</p>
    <p><strong>🌞 Afternoon:</strong> ${afternoon}</p>
    <p><strong>🌙 Dinner:</strong> ${dinner}</p>
    <p><strong>💰 Budget:</strong> ${budget}</p>
    <p><strong>🧠 Mood:</strong> ${mood}</p>
  `;
  planOutput.classList.remove("hidden");
}

// Button click event
generateBtn.addEventListener("click", generatePlan);

// Dark mode toggle
const darkToggle = document.getElementById("darkToggle");

// Load preference
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
  darkToggle.checked = true;
}

// Listen for toggle change
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

