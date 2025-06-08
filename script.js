const API_KEY = 'XTWX69a6cVa5oiCo/hxzrw==BfiO0DZm1YVAh36C';
const API_URL = 'https://api.api-ninjas.com/v1/quotes';

async function getQuote() {
  try {
    const response = await fetch(API_URL, {
      headers: { 'X-Api-Key': API_KEY }
    });
    const data = await response.json();
    const quote = data[0];
    document.getElementById("quote").innerText = quote.quote;
    document.getElementById("author").innerText = `- ${quote.author}`;
  } catch (error) {
    document.getElementById("quote").innerText = "Error loading quote.";
    document.getElementById("author").innerText = "";
    console.error(error);
  }
}

async function searchQuote() {
  const category = document.getElementById("authorSearch").value.trim();
  if (!category) {
    alert("Please enter a category like 'life', 'success', or 'inspirational'.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}?category=${encodeURIComponent(category)}`, {
      headers: { 'X-Api-Key': API_KEY }
    });
    const data = await response.json();

    if (data.length > 0) {
      const quote = data[0];
      document.getElementById("quote").innerText = quote.quote;
      document.getElementById("author").innerText = `- ${quote.author}`;
    } else {
      document.getElementById("quote").innerText = "No quotes found for that category!";
      document.getElementById("author").innerText = "";
    }
  } catch (error) {
    document.getElementById("quote").innerText = "Error fetching quote.";
    document.getElementById("author").innerText = "";
    console.error(error);
  }
}

// Load quote on page load
getQuote();
