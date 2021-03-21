function writeCards(names, event) {
    const messages = []

    // loop over names, and add a custom thank you note to the message array for each name

    for (let i = 0; i < names.length; i++) {
       const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
       messages.push(message);
    }

    return messages
}

function countDown(number) {
    for(let i = number; i >= 0; i--) {
        console.log(i);    }
}