const getParagraphText = () => {
    const getGreeting = () => {
        return 'Hello!';
    };

    const getHello = () => {
        return 'I\'m Tabita Bot!';
    };

    return `${getGreeting()} ${getHello()}`;
}

const createParagraph = () => {
    const body = document.querySelector('body');

    const p = document.createElement('p');
    p.textContent = getParagraphText();

    body.appendChild(p);
};

createParagraph();