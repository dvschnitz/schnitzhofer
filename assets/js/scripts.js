var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
var buttonSendSms = document.querySelector('#button-send-sms');
var buttonSendEmail = document.querySelector('#button-send-email');
var termForm = document.querySelector('#term-form');
var inputDate = document.querySelector('#Datum');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

<<<<<<< HEAD
buttonSendSms.onclick = function() {
    var message = getTextForMessage();
    if (message === null) {
        showFillFormAlert();
    } else {
        window.open('sms://+436607785494/&body=' + message);
=======
if (buttonSendSms != null) {
    buttonSendSms.onclick = function() {
        var message = getTextForMessage();
        if (message === null) {
            showFillFormAlert();
        } else {
            window.open('sms://+436243229841/&body=' + message);
        }
>>>>>>> f79b02d2d0c66bfd23b949350b17b5604c46f30f
    }
}

if (buttonSendEmail != null) {
    buttonSendEmail.onclick = function() {
        var message = getTextForMessage();
        if (message === null) {
            showFillFormAlert();
        } else {
            window.open('mailto:info@schnitzhofer.at?subject=Terminanfrage über schnitzhofer.at&body=' + message);
        }
    }
}

showFillFormAlert = function() {
    window.alert('Bitte füllen Sie alle mit * markierten Felder vollständig aus!');
}

getTextForMessage = function() {
    var output = "";
    var formElements = termForm.elements;

    for (var i = 0; i < formElements.length; i++) {

        if (!formElements[i].value && formElements[i].hasAttribute('required')) {
            return null;
        }

        if (formElements[i].hasAttribute('multiple') && formElements[i].id === 'Arbeiten') {
            var options = formElements[i].options;
            var selectedOptions = "";
            for (var j = 0; j < options.length; j++) {
                if (options[j].selected) {
                    selectedOptions += options[j].value + '; '
                }
            }
            output += formElements[i].id + ": " + selectedOptions + "%0D%0A";
        } else {
            output += formElements[i].id + ": " + formElements[i].value + "%0D%0A";
        }
    }
    return output;
}

setMinDate = function() {
    var today = new Date();
    var dayInFuture = new Date(today);
    dayInFuture.setDate(dayInFuture.getDate() + 3);
    var dd = dayInFuture.getDate();
    var mm = dayInFuture.getMonth() + 1;
    var yyyy = dayInFuture.getFullYear();

    if (dd < 10){
        dd = '0' + dd
    }
    if (mm < 10){
        mm = '0' + mm
    }

    var minDate = yyyy + '-' + mm + '-' + dd;
    if (inputDate != null) {
        inputDate.setAttribute("min", minDate);
    }
    return Date.now();
}

window.onload = setMinDate;