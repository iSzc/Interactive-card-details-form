const numberSpan = document.getElementById("card-numbers");
const nameSpan = document.getElementById("card-name");
const validSpanMonth = document.getElementById("card-valid-month");
const validSpanYear = document.getElementById("card-valid-year");
const cvcSpan = document.getElementById("cvc-span");
const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");
const dateMonthInput = document.getElementById("mm-input");
const dateYearInput = document.getElementById("yy-input");
const cvcInput = document.getElementById("cvc-input");
const btn = document.getElementById("button");
const errorName = document.getElementById("empty-field-name");
const errorNumber = document.getElementById("empty-field-number");
const errorDate = document.getElementById("empty-field-date");
const formDiv = document.getElementById("form-div");
const apply = document.getElementById("apply");
const continueBtn = document.getElementById("continue");

function onlynumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  //var regex = /^[0-9.,]+$/;
  var regex = /^[0-9.]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

nameInput.addEventListener("keyup", () => {
  var txt = nameInput.value;
  nameSpan.innerText = txt;
  if (nameInput.value === "") {
    nameSpan.innerText = "JANE APPLESEED";
  }
});

numberInput.addEventListener("keyup", () => {
  if (numberInput.value === "") {
    numberSpan.innerText = "0000 0000 0000 0000";
    return;
  }
  var num = numberInput.value.padEnd(16, "0");
  var texto = "";
  let posicao = 0;
  while (posicao < 16) {
    if (posicao > 0 && posicao % 4 === 0) {
      texto += " ";
    }
    texto += num[posicao];
    posicao++;
  }
  numberSpan.innerText = texto;
});

dateMonthInput.addEventListener("keyup", () => {
  var dateMonth = dateMonthInput.value;
  validSpanMonth.innerText = dateMonth.padEnd(2, "0");
  if (dateMonthInput.value === "") {
    validSpanMonth.innerText = "00";
  }
});

dateYearInput.addEventListener("keyup", () => {
  var dateYear = dateYearInput.value;
  validSpanYear.innerText = dateYear.padEnd(2, "0");
  if (dateYearInput.value === "") {
    validSpanYear.innerText = "00";
  }
});

cvcInput.addEventListener("keyup", () => {
  var cvcNum = cvcInput.value;
  cvcSpan.innerText = cvcNum.padEnd(3, "0");
  if (cvcInput.value === "") {
    cvcSpan.innerText = "000";
  }
});

btn.addEventListener("click", validate);

function validate(ev) {
  ev.preventDefault();

  let valid = true;

  if (!nameInput.value) {
    errorName.style.display = "inline";
  } else {
    var validName = true;
  }

  if (!numberInput.value) {
    errorNumber.style.display = "inline";
  } else {
    var validNumber = true;
  }

  if (!dateMonthInput.value) {
    errorDate.style.display = "inline";
  } else {
    var validMonth = true;
  }

  if (!dateYearInput.value) {
    errorDate.style.display = "inline";
  } else {
    var validYear = true;
  }

  if (!cvcInput.value) {
    errorDate.style.display = "inline";
  } else {
    var validCvc = true;
  }

  if (
    validName === true &&
    validNumber === true &&
    validMonth === true &&
    validYear === true &&
    validCvc === true
  ) {
    formDiv.style.display = "none";
    apply.style.display = "flex";
  }
}

continueBtn.addEventListener("click", () => {
  location.reload();
});
