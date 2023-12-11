var quotesArray = [
    {
        'quote': 'Beware of what you become in pursuit of what you want.',
        'author': 'Jim Rohn'
    },
    {
        'quote': 'It\'s not what happens to you, but how you react to it that matters.',
        'author': 'Epictetus'
    },
    {
        'quote': 'The best revenge is massive success.',
        'author': 'Frank Sinatra'
    },
    {
        'quote': 'You miss 100% of the shots you don\'t take.',
        'author': 'Wayne Gretzy'
    },
    {
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.',
        'author': 'Nelson Mandela'
    },
    {
        'quote': 'Do not take life too seriously. You will not get out alive.',
        'author': 'Elbert Hubbard'
    },
    /**
     * 
     */
    {
        'quote': 'A room without books is like a body without a soul.',
        'author': 'Marcus Tullius Cicero'
    },
    {
        'quote': 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
        'author': 'Bernard M. Baruch'
    },
    {
        'quote': 'You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth.',
        'author': 'William W. Purkey'
    },
    {
        'quote': 'Be yourself; everyone else is already taken.',
        'author': 'Oscar Wilde'
    },
]

function generateRandomNumbers(max,count) {
    var numbers = [];
    var randomNumbers = [];


    for (var i = 1; i <= max; i++) {
        numbers.push(i);
    }
    while (randomNumbers.length < count) {
        var randomIndex = Math.floor(Math.random() * numbers.length);
        var randomNumber = numbers[randomIndex];
        randomNumbers.push(randomNumber);
        numbers.splice(randomIndex, 1);
    }

    return randomNumbers;
}
function generateQuotes() {
    var randomNumbers = generateRandomNumbers(quotesArray.length, 1);
    var random = randomNumbers[0] - 1;
    document.querySelector('.quote').textContent = `\"${quotesArray[random].quote}\"`;
    document.querySelector('.author').textContent = `--${quotesArray[random].author}`;
}