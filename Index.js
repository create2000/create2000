const axios = require('axios');
const fs = require('fs');

// Fetch joke from the API
axios.get("https://v2.jokeapi.dev/joke/Programming?type=twopart")
  .then(res => {
    const data = res.data;

    // Extract question and punchline (setup and delivery)
    const question = data.setup;     // Use 'setup' for the question
    const punchline = data.delivery; // Use 'delivery' for the punchline

    // Define the README content
    const text = `
# Daily Dev Joke

- Fetches a joke from an API everyday and edits this README

**${question}**
*${punchline}*
    `;

    // Write the joke to README.md
    fs.writeFile('README.md', text, 'utf-8', function(err) {
      if (err) throw err;
      console.log('README updated with a new joke!');
    });
  })
  .catch(err => {
    console.log('Error fetching joke: ', err.message);
  });
