/* Показ и скрытие полей при переключении чекбокса */
var recentAddressCheckbox = document.querySelector("#recent-address-checkbox");
var recentAddress = document.querySelector(".recent-address");
var unknownAddress = document.querySelector(".unknown-address");

recentAddressCheckbox.onclick = function () {
    unknownAddress.classList.toggle("d-none");
    recentAddress.classList.toggle("d-block");
};