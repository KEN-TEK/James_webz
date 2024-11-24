// script.js

// Predefined answers to common questions about the James Webb Space Telescope
const answers = {
    "what is the james webb telescope": "The James Webb Space Telescope (JWST) is a large, space-based observatory designed to observe the universe in infrared light.",
    "when was the james webb telescope launched": "JWST was launched on December 25, 2021.",
    "how far can the james webb telescope see": "JWST can see back in time to approximately 13.5 billion years, close to the Big Bang.",
    "what are the goals of the james webb telescope": "The main goals include studying the formation of stars and galaxies, understanding the formation of planetary systems, and exploring the origins of life.",
    "who built the james webb telescope": "The JWST was built by NASA, with contributions from the European Space Agency (ESA) and the Canadian Space Agency (CSA).",
    "how does the james webb telescope work": "JWST uses a large mirror and advanced instruments to capture light from distant objects, converting it into data that scientists can analyze.",
    // Add more questions and answers as needed
};

// Function to get the answer based on user input
function getAnswer(question) {
    const normalizedQuestion = question.toLowerCase();
    return answers[normalizedQuestion] || "I'm sorry, I don't have the answer to that question. Please try asking something else!";
}

// Event listener for the button click
document.getElementById('askButton').addEventListener('click', () => {
    const questionInput = document.getElementById('questionInput').value;
    const answerOutput = document.getElementById('answerOutput');
    
    if (questionInput.trim() !== "") {
        const answer = getAnswer(questionInput);
        answerOutput.textContent = answer;
    } else {
        answerOutput.textContent = "Please enter a question.";
    }
});
