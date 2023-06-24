let url = "https://official-joke-api.appspot.com/random_joke"
let setup = document.getElementById('p1');
let punch = document.getElementById('p2');
let btn = document.getElementById('bttn');

const getJokes = () => {
    let site = fetch(url)
    site.then((v) => {
        return v.json();
    }).then((message) => {
        console.log(message);
        console.log(message.setup);
        console.log(message.punchline)
            //let key1 = Object.keys(message)[2]
            //console.log(message[key1])
            //let key2 = Object.keys(message)[3]
            //console.log(message[key2])
        p1.innerHTML = `${message.setup}`
        p2.innerHTML = `${message.punchline}`
    })
}
btn.addEventListener('click', getJokes)
getJokes();