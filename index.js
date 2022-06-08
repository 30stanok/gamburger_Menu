`use struct`

const burgerForm = document.querySelector(`[class="hamburger-menu"]`);
const burgerBotton = document.getElementById(`menu__toggle`);
const lowBurger = document.getElementById(`lowBurger`);
const upBurger = document.getElementById(`upBurger`);

upBurger.style.left = `${-100}%`;  //обязательный параметр для функций
lowBurger.style.left = `${-100}%`; //обязательный параметр для функций

let menuCount = 0;

const inpLow = document.getElementById(`menu__toggle__in`);
inpLow.addEventListener(`click`, ()=> {
    if(lowBurger.style.left === `${-100}%`) {
        lowBurger.style.left = `${0}%`;
        lowBurger.style.visibility = `visible`;
    } else {
        lowBurger.style.left = `${-100}%`;
        lowBurger.style.visibility = `hidden`;
    }
    return 0;
});

const inpUp = document.getElementById(`menu__toggle`);
inpUp.addEventListener(`click`, ()=> {
    console.log(menuCount);
    if (upBurger.style.left === `${0}%` && lowBurger.style.left === `${0}%`) {
        lowBurger.style.visibility = `hidden`;
        upBurger.style.visibility = `hidden`;
        upBurger.style.left = `${-100}%`;
        lowBurger.style.left = `${-100}%`;
    }
    else if(upBurger.style.left === `${-100}%`) {
        upBurger.style.left = `${0}%`;
        upBurger.style.visibility = `visible`;
    } else {
        upBurger.style.left = `${-100}%`;
        upBurger.style.visibility = `hidden`;
    }
    return 0;
})

