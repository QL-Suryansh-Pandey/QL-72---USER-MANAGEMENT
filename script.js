const headlines = [
    "Market indices soar as global economy shows strong recovery signs.",
    "New AI regulations proposed to govern large language models.",
    "Local sports team clinches championship title in thrilling finale.",
    "Tech giant announces massive investment in sustainable energy projects."
];

const headlineElement = document.getElementById('news-headline');

let currentHeadlineIndex = 0;

/**
 * Updates the breaking news ticker with the next headline.
 */
function updateHeadline() {
    // Get the next headline
    const nextHeadline = headlines[currentHeadlineIndex];
    
    // Update the DOM element
    headlineElement.textContent = nextHeadline;
    
    // Move to the next index, wrapping around to 0 if necessary
    currentHeadlineIndex = (currentHeadlineIndex + 1) % headlines.length;
}

// Initialize the ticker immediately
updateHeadline();

// Set up the interval to automatically change the headline every 4 seconds
const intervalTime = 4000; 
setInterval(updateHeadline, intervalTime);
