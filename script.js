// starting javascript

document.getElementById("searchBtn").addEventListener("click", function () {
    const inputValue = document.getElementById("input").value;

    if(inputValue == [0]){
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchItem(data))
    }
    else{
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchItem(data))     
    }
})

const displaySearchItem = foods => {
    const mealDiv = document.getElementById("mealContainer");
    for (let i = 0; i < foods.meals.length; i++) {
        const item = foods.meals[i];
        console.log(item);
        const itemDiv = document.createElement("div")
        itemDiv.className = "item-div"
        const foodItem = `
        <img onclick="displayFoodDetail('${item.idMeal}')" src="${item.strMealThumb}"></img>
        <p onclick="displayFoodDetail('${item.idMeal}')">${item.strMeal}</p>

        `
        itemDiv.innerHTML = foodItem;
        mealDiv.appendChild(itemDiv);
    }

}

const displayFoodDetail = detail => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detail}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodDetails(data.meals[0]))
}

const renderFoodDetails = food => {
    console.log(food);
    const findDetail = document.getElementById("displayDetail");
    findDetail.innerHTML = `
        <img src="${food.strMealThumb}"></img>
        <h1>Name : ${food.strMeal}</h1>
        <h3>Area : ${food.strArea}</h3>
        <h3>Category : ${food.strCategory}</h3>
        <b class="bold-text">Ingredients :</b>
        <p>${food.strIngredient1}</p>
        <p>${food.strIngredient2}</p>
        <p>${food.strIngredient3}</p>
        <p>${food.strIngredient4}</p>
        <p>${food.strIngredient5}</p>
        <p>${food.strIngredient6}</p>
        <p>${food.strIngredient7}</p>
        <p>${food.strIngredient8}</p>
        <p>${food.strIngredient9}</p>
        <p>${food.strIngredient10} etc...</p>
    `
}

// ending javascript



