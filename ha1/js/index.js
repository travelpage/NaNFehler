// die Kategorien
var goodItems = document.getElementsByClassName("goods-item");
var goodsValue = document.querySelector(".goods-value");

// die Arbeiter
var workers = document.getElementsByClassName("hire-employers-item");
var employersValue = document.querySelector(".employers-value");

// senden knopf
var submit = document.querySelector(".submit");

// die Güter Abfrage
var choose = document.querySelector(".choose-item");
var itemsValue = document.querySelector(".items-value");


// abfrage des namens für den shop
var nameValue = document.querySelector(".name-value");
var shopName = prompt("Wie soll der Shop heißen?");

var nameofShop = document.createElement("p");
nameofShop.innerText = shopName;
nameValue.appendChild(nameofShop);


// abfrage des budgets
var budgetValue = document.querySelector(".budget-value");
var myBudget = prompt("Wie hoch ist Ihr Budget? ");
var budgetNew = parseInt(myBudget);

// jezt setzen wir das angegebene Budget in das Formular
var budgetText = document.createElement("p");
budgetText.innerText = myBudget + "$";
budgetValue.appendChild(budgetText);

var button = document.querySelector("#countingButton");

var bugetPlus = document.getElementsByClassName("count-budget-value");

button.addEventListener("click", function(){
    budgetNew += parseInt(bugetPlus.value);
    budgetText.innerText = budgetNew;
    console.log(budgetNew);
});

// funktioniert nicht ganz da oben

// speichern des restes

submit.addEventListener("click", function(){
    goodItems.value;
    choose.value;
    workers.values;

    // erstellt ein Textfeld für die Katergorien
    var kategorienShop = document.createElement("p");
    kategorienShop.innerText = goodItems[0].value + ', ' + goodItems[1].value + ', ' + goodItems[2].value + ', ' + goodItems[3].value;
    goodsValue.appendChild(kategorienShop);

    // erstellt ein Text... für Güter
    var güterShop = document.createElement("p");
    güterShop.innerText = choose.value;
    itemsValue.appendChild(güterShop);

    // erstellt ein Text... für Arbeiter
    var meineArbeiter = document.createElement("p");
    meineArbeiter.innerText = workers[0].value + ', ' + workers[1].value + ', ' + workers[2].value;
    employersValue.appendChild(meineArbeiter);
});







var neuesBudget = myBudget + 1;
console.log(neuesBudget);