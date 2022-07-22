let converter = document.getElementById("converter");
let from = document.getElementById("from");
let to = document.getElementById("to");
let amount = document.getElementById("amount");
let result = document.getElementById("result");
let url = `https://v6.exchangerate-api.com/v6/d93eb4961ed9e48f7323f549/latest/USD`;
fetch(url)
    .then(response => response.json())
    .then(function (json) {
        let x = ``;
        for (const item of Object.keys(json.conversion_rates)) {
            x += `<option value = "${item}">${item}<option>`
        }
        from.innerHTML = x;
        to.innerHTML = x;
        return json.conversion_rates;
    });
converter.addEventListener("click", function () {
    var fromValue = from.options[from.selectedIndex].value;
    var toValue = to.options[to.selectedIndex].value;
    let a = amount.value;
    fetch(url).then(response => response.json())
    .then((json) => {
        let fromConv = json.conversion_rates[fromValue];
        let toConv = json.conversion_rates[toValue];
        let r = toConv*a/fromConv;
        result.innerHTML = `${a} ${fromValue} = ${r} ${toValue}`;
    })  
});