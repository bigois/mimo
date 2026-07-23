// There is not enum in JavaScript, but we can use Object.freeze to create a similar effect.
const Notes = Object.freeze({
    DO1: 'DO1',
    RE1: 'RE1',
    MI1: 'MI1',
    FA1: 'FA1',
    SOL1: 'SOL1',
    LA1: 'LA1',
    SI1: 'SI1',
    DO2: 'DO2'
});

const keyboardNotes = {
    a: Notes.DO1,
    s: Notes.RE1,
    d: Notes.MI1,
    f: Notes.FA1,
    g: Notes.SOL1,
    h: Notes.LA1,
    j: Notes.SI1,
    k: Notes.DO2
};

const playNote = (note) => {
    const audio = new Audio(`./sounds/${note.toLowerCase()}.ogg`);
    audio.playbackRate = 4;
    audio.play();
};

// Function to set the active state of a key
const setKeyActive = (note, isActive) => {
    const keyElement = document.getElementById(note);

    if (keyElement) {
        keyElement.classList.toggle('is-active', isActive);
    }
};

// Handle key press events
document.addEventListener('keydown', (event) => {
    const note = keyboardNotes[event.key];
    if (note) {
        playNote(note);
        setKeyActive(note, true);
    }
});

// Handle key release events
document.addEventListener('keyup', (event) => {
    const note = keyboardNotes[event.key];
    if (note) {
        setKeyActive(note, false);
    }
});
