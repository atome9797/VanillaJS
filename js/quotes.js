const quotes = [
    {
        quote: "asdasd1",
        author: "asdasd",
    },
    {
        quote: "asdasd2",
        author: "asdasd",
    },
    {
        quote: "asdasd3",
        author: "asdasd",
    },
    {
        quote: "asdasd4",
        author: "asdasd",
    },
    {
        quote: "asdasd5",
        author: "asdasd",
    },
    {
        quote: "asdasd6",
        author: "asdasd",
    },
    {
        quote: "asdasd7",
        author: "asdasd",
    },
    {
        quote: "asdasd8",
        author: "asdasd",
    },
    {
        quote: "asdasd9",
        author: "asdasd",
    },
    {
        quote: "asdasd10",
        author: "asdasd",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

console.log(Math.random())

//Math.random() 은 0 ~ 1 사이의 소수점 값이기 때문에, length 길이에 어떤값을 
//곱해도 length 보다 작은값을 가지게 된다.
//그러므로 0 ~ length 범위를 가지기 때문에, 랜덤값을 가져올수 있다.
const todayQuote = quotes[Math.floor(Math.random() * quotes.length )]
quote.innerText  = todayQuote.quote;
author.innerText  = todayQuote.author;