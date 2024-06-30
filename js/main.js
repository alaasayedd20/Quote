var arrQuotes = [
    {quote: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”", author: "― Maya Angelou"},
    {quote:"“We accept the love we think we deserve.”",author:"― Stephen Chbosky"
    },
    {quote:"“Insanity is doing the same thing, over and over again, but expecting different results.”",author:"― Narcotics Anonymous"
    },
    {quote:"“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”",author:"― Marilyn Monroe"
    },
    {quote:"“It is better to be hated for what you are than to be loved for what you are not.”",author:"― Andre Gide, Autumn Leaves"
    },
    {quote:"“Be yourself; everyone else is already taken.”",author:"― Oscar Wilde"
    },
    {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",author:"― Albert Einstein"
    },
    {quote:"“A room without books is like a body without a soul.”",author:"― Marcus Tullius Cicero"
    },
    {quote:"“In three words I can sum up everything I've learned about life: it goes on.”",author:"― Robert Frost"
    },
]

const max = 9;
var prevIndex = -1;
function displayQuote(){
    var index;
    do {
        index = Math.floor(Math.random() * max);
    } while (index === prevIndex);
    var temp = `<p class="m-3 h3">`+arrQuotes[index].quote+`</p>
    <p class="m-2 h3">`+arrQuotes[index].author+`</p>`
    document.getElementById("demo").innerHTML = temp
}
