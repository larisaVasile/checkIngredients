const badIngradientsArray = [
    'e951',
    'aspartam',
    'bht',
    'fosfatul de calciu',
    'dioxidul de titan'
];

localStorage.setItem("badIngredients", JSON.stringify(badIngradientsArray));
var badIngredientsList = JSON.parse(localStorage.getItem("badIngredients"));

document.getElementById("checkButton").addEventListener("click", () => {
    const ingredient = document.getElementById("ingredient").value;
    const filterResult = badIngredientsList.filter(x => x === ingredient);
    const spanElement = document.createElement("span");
    let userInfoText;

    if(filterResult.length > 0) {
        userInfoText = "You should avoid this!"
    } else {
        userInfoText = "It is okay!"
    }

    document.getElementById("showResult").append(spanElement, `${ingredient} ${userInfoText}`);
})