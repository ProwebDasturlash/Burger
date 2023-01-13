let products = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 400,
        amount: 0,
        get sum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        },
    },
    freshBurger: {
        name: 'Гамбургер FRESH ',
        price: 20500,
        kcall: 600,
        amount: 0,
        get sum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        },
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 800,
        amount: 0,
        get sum() {
            return this.price * this.amount
        },
        get calcKcall() {
            return this.kcall * this.amount
        },
    },
}
let extraProducts = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 500,
        kcall: 30
    },
    lettuce: {
        name: 'Салатный лист',
        price: 400,
        kcall: 10
    },
    cheese: {
        name: 'Сыр',
        price: 400,
        kcall: 40
    },
}




const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    checkExtraProducts = document.querySelectorAll('.main__product-checkbox'),
    addCart = document.querySelectorAll('.addCart-checkbox'),
    receipt = document.querySelectorAll('.receipt'),
    receiptWindow = document.querySelectorAll('.receipt__window'),
    receiptWindowOut = document.querySelectorAll('.receipt__window-out'),
    receiptWindowBtn = document.querySelectorAll('.receipt__window-btn');

btnPlusOrMinus.forEach(e => {
    e.addEventListener('click', function (e) {
        e.preventDefault(),
            plusOrMinus(this)
    })
})
function plusOrMinus(btn) {
    const parent = btn.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        price = parent.querySelector('.main__product-price span'),
        out = parent.querySelector('.main__product-num'),
        kcall = parent.querySelector('.main__product-kcall span'),
        elementData = btn.getAttribute('data-symbol');
    if (elementData == '+' && products[parentId].amount < 10) products[parentId].amount++;
    else if (elementData == '-' && products[parentId].amount > 0) products[parentId].amount--;
    out.innerHTML = products[parentId].amount
    price.innerHTML = products[parentId].sum
    kcall.innerHTML = products[parentId].calcKcall
}

checkExtraProducts.forEach(function (input){
    input.addEventListener('click', function(){
        addExtraProducts(this)
    })
})
function addExtraProducts(input) {
    const parent = input.closest('.main__product'),
    parentId = parent.getAttribute('id'),
    inputName = input.getAttribute('data-extra'),
    price = parent.querySelector('.main__product-price span'),
    kcall = parent.querySelector('.main__product-kcall span');
    products[parentId][inputName] = input.checked
    if (products[parentId][inputName]){
        products[parentId].price += extraProducts[inputName].price
        products[parentId].kcall += extraProducts[inputName].kcall
    }else{
        products[parentId].price -= extraProducts[inputName].price
        products[parentId].kcall -= extraProducts[inputName].kcall
    }
    price.innerHTML = products[parentId].sum
    kcall.innerHTML = products[parentId].calcKall
    
}

// --------------------------------------------------------
const timer = document.querySelector(".header__timer"),
  timerExtra = document.querySelector(".header__timer-extra"),
  mainProductInfo = document.querySelectorAll(".main__product-info"),
  view = document.querySelector(".view"),
  viewImg = document.querySelector(".view img"),
  viewClose = document.querySelector(".view__close");

lvl();

function lvl(el) {
  setTimeout(() => {
    if (timerExtra.innerHTML >= 0 && timerExtra.innerHTML < 50) {
      timerExtra.innerHTML++;
      lvl(20);
    } else if (timerExtra.innerHTML >= 50 && timerExtra.innerHTML < 70) {
      timerExtra.innerHTML++;
      lvl(60);
    } else if (timerExtra.innerHTML >= 70 && timerExtra.innerHTML < 95) {
      timerExtra.innerHTML++;
      lvl(100);
    } else if (timerExtra.innerHTML >= 95 && timerExtra.innerHTML < 100) {
      timerExtra.innerHTML++;
      lvl(180);
    }
  }, el);
}

for (let i = 0; i < mainProductInfo.length; i++) {
  const element = mainProductInfo[i];

  element.addEventListener("dblclick", function (item) {
    img(this);
  });
}

function img(item) {
  view.classList.add("active");
  let parent = item.closest(".main__product-preview"),
    img = parent.querySelector("img"),
    imgSrc = img.getAttribute("src");
  viewImg.setAttribute("src", imgSrc);
}

viewClose.addEventListener("click", () => {
  view.classList.remove("active");
});