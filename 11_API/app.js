const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector('#para');
const btn = document.querySelector('#btn');

// let promice = fetch(URL);
// console.log(promice);

const getFacts = async () => {
    console.log('fetching data ....')
    let response = await fetch(URL);
    console.log(response);      // JSON format

    var data = await response.json();
    console.log(data);
    factPara.innerText = data[1].text;
}

// function getFacts(){     // Promise chaining
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });
// }

btn.addEventListener('click', getFacts);