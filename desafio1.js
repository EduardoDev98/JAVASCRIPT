<<<<<<< HEAD
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;

  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //valor em real.

  const currencyValueConverted = document.querySelector(".currency-value"); // outras moedas

  console.log(currencySelect.value);
  const dolarToday = 5.2;
  const euroToday = 6.2;

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

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  //currencyValueConverted.innerHTML = convertedValue; ERRO NA FORMATAÇÃO DO DOLAR !!!!!
  // console.log(convertedValue);
}
convertButton.addEventListener("click", convertValues);
=======
const convertButton = document.querySelector(".convert-button");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;

  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //valor em real.

  const currencyValueConverted = document.querySelector(".currency-value"); // outras moedas
  const dolarToday = 5.2;
  const convertedValue = inputCurrencyValue / dolarToday;
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(convertedValue);
  currencyValueConverted.innerHTML = convertedValue;
  console.log(convertedValue);
}
convertButton.addEventListener("click", convertValues);
>>>>>>> bdf9b47f00fe942f481e6ce17692a6c8266cd236
