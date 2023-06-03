const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em real
  const currencyValueConverted = document.querySelector(".currency-value")//outras moedas


  const dolarToday = 5.0
  const euroToday = 5.6
  const libraToday = 6.2


  if (currencySelect.value == "dolar") {
    //se o select estiver selecionando o valor de dolar entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
  }

  if (currencySelect.value == "euro") {
    //se o select estiver selecionando o valor de euro entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

  }
  if (currencySelect.value == "libra") {
    //se o select estiver selecionando o valor de libra entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "BGP"
    }).format(inputCurrencyValue / libraToday)

  }
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)


}

function changeCurrency() {
  const currencyName = document.querySelector("#currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assests/dolar.png"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assests/euro.png"
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assests/libra .png"
  }

  convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
