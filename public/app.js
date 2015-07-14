var modeEl = document.getElementById('mode');
var valueEl = document.getElementById('value');
var clearEl = document.getElementById('clear');

var numButtons = document.getElementsByClassName('number-button');
var modeButtons = document.getElementsByClassName('mode-button');

clearEl.onclick = function () {
    valueEl.innerHTML = 0;
};

var numberSubscribe = function () {
    var currentNum = parseInt(this.innerHTML);
    var tmp;

    if (modeEl.innerHTML == '+') {
        tmp = currentNum + parseInt(valueEl.innerHTML);
    } else {
        tmp = parseInt(valueEl.innerHTML) - currentNum;
    }

    valueEl.innerHTML = tmp;
};

var modeClick = function () {
    modeEl.innerHTML = this.innerHTML;
};

for (var i = numButtons.length - 1; i >= 0; i--) {
    numButtons[i].onclick = numberSubscribe;
}

for (var i = modeButtons.length - 1; i >= 0; i--) {
    modeButtons[i].onclick = modeClick;
}

