const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;

  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //valor em real.

  const currencyValueConverted = document.querySelector(".currency-value"); // outras moedas

  console.log(currencySelect.value);
  const dolarToday = 5.1;
  const euroToday = 5.4;
  const bitcoinToday = 327.547;
  const libraToday = 6.4;
  //async await  

  const data = await = fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
  console.log(data)
  if (currencySelect.value == "dolar") {
    // Se o select estiver selecionado o valor de dolar , entre aqui!
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("btc", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / bitcoinToday);
  }
  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("gbp", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  //currencyValueConverted.innerHTML = convertedValue; ERRO NA FORMATAÇÃO DO DOLAR !!!!!
  // console.log(convertedValue);
}
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/estados-unidos (1) 1 (2).png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "EURO";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "BitCoin";
    currencyImage.src = "./assets/bitcoin.png";
  }
  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
