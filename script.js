// "use strict";
// const addToCartBtns = document.querySelectorAll(".addtocart-btns");
// const addItemsBtns = document.querySelectorAll(".additems-btns");
// const plusIcons = document.querySelectorAll(".plus-icons");
// const minusIcons = document.querySelectorAll(".minus-icons");
// const numbers = document.querySelectorAll(".numbers");
// const addingItems = document.querySelectorAll(".adding-items");
// const itemsselected = document.querySelectorAll(".items-selected");
// const totalCalc = document.querySelectorAll(".total-cal");
// const price = document.querySelectorAll(".price");
// const close = document.querySelectorAll(".close")

// const addToCartBtnOne = document.querySelector(".addtocart-btn-1");
// const addItemsBtnOne = document.querySelector(".additems-btn-1");
// const plusIconOne = document.querySelector(".plus-icon-1");
// const minusIconOne = document.querySelector(".minus-icon-1");
// const numberOne = document.querySelector(".number-1");
// const addingItemsOne = document.querySelector(".adding-items--1");
// const itemsselectedOne = document.querySelector(".items-selected-1");
// const totalCalcOne = document.querySelector(".total-cal-1");
// const priceOne = document.querySelector(".price-1");
// const closeOne = document.querySelector(".close-1");

// const grandTotal = document.querySelector(".grand-total");
// const emptyCart = document.querySelector(".emptyaddtocart-cont");
// const cartDisplay = document.querySelector(".cart-display");

// let increseOne = Number(0);
// addToCartBtnOne.addEventListener("click", (e) => {
//   addItemsBtnOne.classList.remove("hidden");
//   addToCartBtnOne.classList.add("hidden");
//   emptyCart.classList.add("hidden");
//   cartDisplay.classList.remove("hidden");
//   numberOne.textContent = 0;
// });

// let storedValueOne;
// function handleValueChangeOne(newValueOne) {
//   storedValueOne = newValueOne;
//   totalCalcOne.textContent = (storedValueOne * 6.5).toFixed(2);
//   itemsselectedOne.textContent = storedValueOne;
//   if (storedValueOne > 0) {
//     addingItemsOne.classList.remove("hidden");
//   }
//   if (storedValueOne < 1) {
//     addingItemsOne.classList.add("hidden");
//   }
//   console.log(storedValueOne);
// }
// const oneaddingItems = function (callbackOne) {
//   closeOne.addEventListener("click", (c) => {
//     addItemsBtnOne.classList.add("hidden");
//     addToCartBtnOne.classList.remove("hidden");
//     addingItemsOne.classList.add("hidden");

//     increseOne = Number(0);
//   });
//   plusIconOne.addEventListener("click", (e) => {
//     increseOne++;
//     let valueOne = (numberOne.textContent = increseOne);
//     if (valueOne > 0) {
//       minusIconOne.classList.remove("invisible");
//     } else {
//       minusIconOne.classList.add("invisible");
//     }

//     callbackOne(valueOne);
//   });

//   minusIconOne.addEventListener("click", (e) => {
//     increseOne--;
//     let valueOne = (numberOne.textContent = increseOne);
//     if (valueOne === 0) {
//       addItemsBtnOne.classList.add("hidden");
//       addToCartBtnOne.classList.remove("hidden");
//     }
//     if (valueOne > 0) {
//       minusIconOne.classList.remove("invisible");
//     } else {
//       minusIconOne.classList.add("invisible");
//     }

//     callbackOne(valueOne);
//   });
// };
// oneaddingItems(handleValueChangeOne);

// const addToCartBtnTwo = document.querySelector(".addtocart-btn-2");
// const addItemsBtnTwo = document.querySelector(".additems-btn-2");
// const plusIconTwo = document.querySelector(".plus-icon-2");
// const minusIconTwo = document.querySelector(".minus-icon-2");
// const numberTwo = document.querySelector(".number-2");
// const addingItemsTwo = document.querySelector(".adding-items--2");
// const itemsselectedTwo = document.querySelector(".items-selected-2");
// const totalCalcTwo = document.querySelector(".total-cal-2");
// const priceTwo = document.querySelector(".price-2");
// const closeTwo = document.querySelector(".close-2");

// let increseTwo = Number(0);
// addToCartBtnTwo.addEventListener("click", (e) => {
//   addItemsBtnTwo.classList.remove("hidden");
//   addToCartBtnTwo.classList.add("hidden");
//   emptyCart.classList.add("hidden");
//   cartDisplay.classList.remove("hidden");
//   numberTwo.textContent = 0;
// });

// let storedValueTwo;
// function handleValueChange(newValueTwo) {
//   storedValueTwo = newValueTwo;
//   totalCalcTwo.textContent = (storedValueTwo * 7.0).toFixed(2);
//   itemsselectedTwo.textContent = storedValueTwo;
//   if (storedValueTwo > 0) {
//     addingItemsTwo.classList.remove("hidden");
//   }
//   if (storedValueTwo < 1) {
//     addingItemsTwo.classList.add("hidden");
//   }
//   console.log(storedValueTwo);
// }
// const twoaddingItems = function (callback) {
//   closeTwo.addEventListener("click", (c) => {
//     addItemsBtnTwo.classList.add("hidden");
//     addToCartBtnTwo.classList.remove("hidden");
//     addingItemsTwo.classList.add("hidden");

//     increseTwo = Number(0);
//   });
//   plusIconTwo.addEventListener("click", (e) => {
//     increseTwo++;
//     let value = (numberTwo.textContent = increseTwo);
//     if (value > 0) {
//       minusIconTwo.classList.remove("invisible");
//     } else {
//       minusIconTwo.classList.add("invisible");
//     }

//     callback(value);
//   });

//   minusIconTwo.addEventListener("click", (e) => {
//     increseTwo--;
//     let value = (numberTwo.textContent = increseTwo);
//     if (value === 0) {
//       addItemsBtnTwo.classList.add("hidden");
//       addToCartBtnTwo.classList.remove("hidden");
//     }
//     if (value > 0) {
//       minusIconTwo.classList.remove("invisible");
//     } else {
//       minusIconTwo.classList.add("invisible");
//     }

//     callback(value);
//   });
// };
// twoaddingItems(handleValueChange);

"use strict";

const addToCartBtnOne = document.querySelector(".addtocart-btn-1");
const addItemsBtnOne = document.querySelector(".additems-btn-1");
const plusIconOne = document.querySelector(".plus-icon-1");
const minusIconOne = document.querySelector(".minus-icon-1");
const numberOne = document.querySelector(".number-1");
const addingItemsOne = document.querySelector(".adding-items--1");
const itemsselectedOne = document.querySelector(".items-selected-1");
const totalCalcOne = document.querySelector(".total-cal-1");
const closeOne = document.querySelector(".close-1");
const dImgOne = document.querySelector(".dimg-1");
const mImgOne = document.querySelector(".mimg-1");
//
const orderOne = document.querySelector(".order-items--1");
const orderItemsSelectedOne = document.querySelector(".order-items-selected-1");
const orderTotalCalOne = document.querySelector(".order-total-cal-1");

const addToCartBtnTwo = document.querySelector(".addtocart-btn-2");
const addItemsBtnTwo = document.querySelector(".additems-btn-2");
const plusIconTwo = document.querySelector(".plus-icon-2");
const minusIconTwo = document.querySelector(".minus-icon-2");
const numberTwo = document.querySelector(".number-2");
const addingItemsTwo = document.querySelector(".adding-items--2");
const itemsselectedTwo = document.querySelector(".items-selected-2");
const totalCalcTwo = document.querySelector(".total-cal-2");
const closeTwo = document.querySelector(".close-2");
const dImgTwo = document.querySelector(".dimg-2");
const mImgTwo = document.querySelector(".mimg-2");
//
const orderTwo = document.querySelector(".order-items--2");
const orderItemsSelectedTwo = document.querySelector(".order-items-selected-2");
const orderTotalCalTwo = document.querySelector(".order-total-cal-2");

//
const addToCartBtnThree = document.querySelector(".addtocart-btn-3");
const addItemsBtnThree = document.querySelector(".additems-btn-3");
const plusIconThree = document.querySelector(".plus-icon-3");
const minusIconThree = document.querySelector(".minus-icon-3");
const numberThree = document.querySelector(".number-3");
const addingItemsThree = document.querySelector(".adding-items--3");
const itemsselectedThree = document.querySelector(".items-selected-3");
const totalCalcThree = document.querySelector(".total-cal-3");
const closeThree = document.querySelector(".close-3");
const dImgThree = document.querySelector(".dimg-3");
const mImgThree = document.querySelector(".mimg-3");
//
const orderThree = document.querySelector(".order-items--3");
const orderItemsSelectedThree = document.querySelector(
  ".order-items-selected-3"
);
const orderTotalCalThree = document.querySelector(".order-total-cal-3");

//
//
const addToCartBtnFour = document.querySelector(".addtocart-btn-4");
const addItemsBtnFour = document.querySelector(".additems-btn-4");
const plusIconFour = document.querySelector(".plus-icon-4");
const minusIconFour = document.querySelector(".minus-icon-4");
const numberFour = document.querySelector(".number-4");
const addingItemsFour = document.querySelector(".adding-items--4");
const itemsselectedFour = document.querySelector(".items-selected-4");
const totalCalcFour = document.querySelector(".total-cal-4");
const closeFour = document.querySelector(".close-4");
const dImgFour = document.querySelector(".dimg-4");
const mImgFour = document.querySelector(".mimg-4");
//
const orderFour = document.querySelector(".order-items--4");
const orderItemsSelectedFour = document.querySelector(
  ".order-items-selected-4"
);
const orderTotalCalFour = document.querySelector(".order-total-cal-4");

//
const addToCartBtnFive = document.querySelector(".addtocart-btn-5");
const addItemsBtnFive = document.querySelector(".additems-btn-5");
const plusIconFive = document.querySelector(".plus-icon-5");
const minusIconFive = document.querySelector(".minus-icon-5");
const numberFive = document.querySelector(".number-5");
const addingItemsFive = document.querySelector(".adding-items--5");
const itemsselectedFive = document.querySelector(".items-selected-5");
const totalCalcFive = document.querySelector(".total-cal-5");
const closeFive = document.querySelector(".close-5");
const dImgFive = document.querySelector(".dimg-5");
const mImgFive = document.querySelector(".mimg-5");
//
const orderFive = document.querySelector(".order-items--5");
const orderItemsSelectedFive = document.querySelector(
  ".order-items-selected-5"
);
const orderTotalCalFive = document.querySelector(".order-total-cal-5");

// For 6
const addToCartBtnSix = document.querySelector(".addtocart-btn-6");
const addItemsBtnSix = document.querySelector(".additems-btn-6");
const plusIconSix = document.querySelector(".plus-icon-6");
const minusIconSix = document.querySelector(".minus-icon-6");
const numberSix = document.querySelector(".number-6");
const addingItemsSix = document.querySelector(".adding-items--6");
const itemsselectedSix = document.querySelector(".items-selected-6");
const totalCalcSix = document.querySelector(".total-cal-6");
const closeSix = document.querySelector(".close-6");
const dImgSix = document.querySelector(".dimg-6");
const mImgSix = document.querySelector(".mimg-6");
//
const orderSix = document.querySelector(".order-items--6");
const orderItemsSelectedSix = document.querySelector(".order-items-selected-6");
const orderTotalCalSix = document.querySelector(".order-total-cal-6");

// For 7
const addToCartBtnSeven = document.querySelector(".addtocart-btn-7");
const addItemsBtnSeven = document.querySelector(".additems-btn-7");
const plusIconSeven = document.querySelector(".plus-icon-7");
const minusIconSeven = document.querySelector(".minus-icon-7");
const numberSeven = document.querySelector(".number-7");
const addingItemsSeven = document.querySelector(".adding-items--7");
const itemsselectedSeven = document.querySelector(".items-selected-7");
const totalCalcSeven = document.querySelector(".total-cal-7");
const closeSeven = document.querySelector(".close-7");
const dImgSeven = document.querySelector(".dimg-7");
const mImgSeven = document.querySelector(".mimg-7");
//
const orderSeven = document.querySelector(".order-items--7");
const orderItemsSelectedSeven = document.querySelector(
  ".order-items-selected-7"
);
const orderTotalCalSeven = document.querySelector(".order-total-cal-7");

// For 8
const addToCartBtnEight = document.querySelector(".addtocart-btn-8");
const addItemsBtnEight = document.querySelector(".additems-btn-8");
const plusIconEight = document.querySelector(".plus-icon-8");
const minusIconEight = document.querySelector(".minus-icon-8");
const numberEight = document.querySelector(".number-8");
const addingItemsEight = document.querySelector(".adding-items--8");
const itemsselectedEight = document.querySelector(".items-selected-8");
const totalCalcEight = document.querySelector(".total-cal-8");
const closeEight = document.querySelector(".close-8");
const dImgEight = document.querySelector(".dimg-8");
const mImgEight = document.querySelector(".mimg-8");
//
const orderEight = document.querySelector(".order-items--8");
const orderItemsSelectedEight = document.querySelector(
  ".order-items-selected-8"
);
const orderTotalCalEight = document.querySelector(".order-total-cal-8");

const addToCartBtnNine = document.querySelector(".addtocart-btn-9");
const addItemsBtnNine = document.querySelector(".additems-btn-9");
const plusIconNine = document.querySelector(".plus-icon-9");
const minusIconNine = document.querySelector(".minus-icon-9");
const numberNine = document.querySelector(".number-9");
const addingItemsNine = document.querySelector(".adding-items--9");
const itemsselectedNine = document.querySelector(".items-selected-9");
const totalCalcNine = document.querySelector(".total-cal-9");
const closeNine = document.querySelector(".close-9");
const dImgNine = document.querySelector(".dimg-9");
const mImgNine = document.querySelector(".mimg-9");
//
const orderNine = document.querySelector(".order-items--9");
const orderItemsSelectedNine = document.querySelector(
  ".order-items-selected-9"
);
const orderTotalCalNine = document.querySelector(".order-total-cal-9");
const grandTotal = document.querySelector(".grand-total");
const emptyCart = document.querySelector(".emptyaddtocart-cont");
const cartDisplay = document.querySelector(".cart-display");
const orderGrandTotal = document.querySelector(".order-grand-total");

let grandTotalValue = 0;

function updateGrandTotal() {
  grandTotal.textContent = grandTotalValue.toFixed(2);
  orderGrandTotal.textContent = grandTotalValue.toFixed(2);
}

// Function to handle item actions and grand total
function handleItemActions(
  addToCartBtn,
  addItemsBtn,
  plusIcon,
  minusIcon,
  number,
  totalCalc,
  itemsSelected,
  addingItems,
  closeBtn,
  pricePerItem,
  order,
  orderItemsSelected,
  orderTotalCal,
  dimg,
  mimg
) {
  let increase = 0;
  let itemTotal = 0;

  function updateItemTotal(newValue) {
    const previousItemTotal = itemTotal;
    itemTotal = newValue * pricePerItem;
    grandTotalValue += itemTotal - previousItemTotal;
    updateGrandTotal();
  }

  addToCartBtn.addEventListener("click", (e) => {
    addItemsBtn.classList.remove("hidden");
    addToCartBtn.classList.add("hidden");
    emptyCart.classList.add("hidden");
    cartDisplay.classList.remove("hidden");
    dimg.classList.add("active");
    mimg.classList.add("active");
    number.textContent = 0;
    itemTotal = 0;
  });

  function handleValueChange(newValue) {
    totalCalc.textContent = (newValue * pricePerItem).toFixed(2);
    orderTotalCal.textContent = (newValue * pricePerItem).toFixed(2);
    itemsSelected.textContent = newValue;
    orderItemsSelected.textContent = newValue;
    if (newValue > 0) {
      addingItems.classList.remove("hidden");
      order.classList.remove("hidden");
    } else {
      addingItems.classList.add("hidden");
      order.classList.add("hidden");
    }
    updateItemTotal(newValue);
  }

  closeBtn.addEventListener("click", (c) => {
    addItemsBtn.classList.add("hidden");
    addToCartBtn.classList.remove("hidden");
    addingItems.classList.add("hidden");
    order.classList.add("hidden");
    dimg.classList.remove("active");
    mimg.classList.remove("active");

    grandTotalValue -= itemTotal;
    updateGrandTotal();
    increase = 0;
    itemTotal = 0;
  });

  plusIcon.addEventListener("click", (e) => {
    increase++;
    number.textContent = increase;
    handleValueChange(increase);
  });

  // Minus icon functionality
  minusIcon.addEventListener("click", (e) => {
    if (increase > 0) {
      increase--;
      number.textContent = increase;
      if (increase === 0) {
        addItemsBtn.classList.add("hidden");
        addToCartBtn.classList.remove("hidden");
        dimg.classList.remove("active");
        mimg.classList.remove("active");
      }
      handleValueChange(increase);
    }
  });
}

// Call the function for each item
handleItemActions(
  addToCartBtnOne,
  addItemsBtnOne,
  plusIconOne,
  minusIconOne,
  numberOne,
  totalCalcOne,
  itemsselectedOne,
  addingItemsOne,
  closeOne,
  6.5,
  orderOne,
  orderItemsSelectedOne,
  orderTotalCalOne,
  dImgOne,
  mImgOne
);

handleItemActions(
  addToCartBtnTwo,
  addItemsBtnTwo,
  plusIconTwo,
  minusIconTwo,
  numberTwo,
  totalCalcTwo,
  itemsselectedTwo,
  addingItemsTwo,
  closeTwo,
  7.0,
  orderTwo,
  orderItemsSelectedTwo,
  orderTotalCalTwo,
  dImgTwo,
  mImgTwo
);

handleItemActions(
  addToCartBtnThree,
  addItemsBtnThree,
  plusIconThree,
  minusIconThree,
  numberThree,
  totalCalcThree,
  itemsselectedThree,
  addingItemsThree,
  closeThree,
  8.0,
  orderThree,
  orderItemsSelectedThree,
  orderTotalCalThree,
  dImgThree,
  mImgThree
);

handleItemActions(
  addToCartBtnFour,
  addItemsBtnFour,
  plusIconFour,
  minusIconFour,
  numberFour,
  totalCalcFour,
  itemsselectedFour,
  addingItemsFour,
  closeFour,
  5.5,
  orderFour,
  orderItemsSelectedFour,
  orderTotalCalFour,
  dImgFour,
  mImgFour
);
// For 5
handleItemActions(
  addToCartBtnFive,
  addItemsBtnFive,
  plusIconFive,
  minusIconFive,
  numberFive,
  totalCalcFive,
  itemsselectedFive,
  addingItemsFive,
  closeFive,
  4.0,
  orderFive,
  orderItemsSelectedFive,
  orderTotalCalFive,
  dImgFive,
  mImgFive
);

// For 6
handleItemActions(
  addToCartBtnSix,
  addItemsBtnSix,
  plusIconSix,
  minusIconSix,
  numberSix,
  totalCalcSix,
  itemsselectedSix,
  addingItemsSix,
  closeSix,
  5.0,
  orderSix,
  orderItemsSelectedSix,
  orderTotalCalSix,
  dImgSix,
  mImgSix
);

// For 7
handleItemActions(
  addToCartBtnSeven,
  addItemsBtnSeven,
  plusIconSeven,
  minusIconSeven,
  numberSeven,
  totalCalcSeven,
  itemsselectedSeven,
  addingItemsSeven,
  closeSeven,
  4.5,
  orderSeven,
  orderItemsSelectedSeven,
  orderTotalCalSeven,
  dImgSeven,
  mImgSeven
);

// For 8
handleItemActions(
  addToCartBtnEight,
  addItemsBtnEight,
  plusIconEight,
  minusIconEight,
  numberEight,
  totalCalcEight,
  itemsselectedEight,
  addingItemsEight,
  closeEight,
  5.5,
  orderEight,
  orderItemsSelectedEight,
  orderTotalCalEight,
  dImgEight,
  mImgEight
);

// For 9
handleItemActions(
  addToCartBtnNine,
  addItemsBtnNine,
  plusIconNine,
  minusIconNine,
  numberNine,
  totalCalcNine,
  itemsselectedNine,
  addingItemsNine,
  closeNine,
  6.5,
  orderNine,
  orderItemsSelectedNine,
  orderTotalCalNine,
  dImgNine,
  mImgNine
);
const confirmBtn = document.querySelector(".confirm-order-btn");
const orderConfirmed = document.querySelector(".order-confirmed");
const body = document.querySelector("body");
const startNewOrder = document.querySelector(".new");
body.classList.remove("overflow-hidden");
confirmBtn.addEventListener("click", function (e) {
  e.preventDefault();
  orderConfirmed.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});
startNewOrder.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});
