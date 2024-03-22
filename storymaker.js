/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const resetButton = document.getElementById('reset');

// Constants for p tag to display query selectors
const noun1Display = document.getElementById('choosenNoun1');
const verbDisplay = document.getElementById('choosenVerb');
const adjectiveDisplay = document.getElementById('choosenAdjective');
const noun2Display = document.getElementById('choosenNoun2');
const settingDisplay = document.getElementById('choosenSetting');
const storyDisplay = document.getElementById('story');

// Variables for pre-defined arrays
const nouns1Array = ["child", "dog", "cat", "bird", "robot"];
const verbsArray = ["runs", "jumps", "flies", "dances", "sings"];
const adjectivesArray = ["happy", "funny", "colorful", "exciting", "silly"];
const nouns2Array = ["moon", "beach", "forest", "city", "mountain"];
const settingsArray = ["at night", "under the sun", "in the rain", "at the park", "on a mountain top"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    noun1Display.textContent = nouns1Array[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1Array.length;
}

function verb_on_click() {
    verbDisplay.textContent = verbsArray[verbCount];
    verbCount = (verbCount + 1) % verbsArray.length;
}

function adjective_on_click() {
    adjectiveDisplay.textContent = adjectivesArray[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectivesArray.length;
}

function noun2_on_click() {
    noun2Display.textContent = nouns2Array[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2Array.length;
}

function setting_on_click() {
    settingDisplay.textContent = settingsArray[settingCount];
    settingCount = (settingCount + 1) % settingsArray.length;
}

// Concatenate the user story and display
function playback_on_click() {
    storyDisplay.textContent = `${noun1Display.textContent} ${verbDisplay.textContent} ${adjectiveDisplay.textContent} ${noun2Display.textContent} ${settingDisplay.textContent}`;
}

// Grabbing random element from arrays, concatenate, and display
function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

function reset_on_click() {
    noun1Display.textContent = '';
    verbDisplay.textContent = '';
    adjectiveDisplay.textContent = '';
    noun2Display.textContent = '';
    settingDisplay.textContent = '';
    storyDisplay.textContent = '';
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
resetButton.addEventListener('click', reset_on_click);
