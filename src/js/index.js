"use strict"

// ^ api

async function landing(meal) {
    $(".loader").fadeIn(500)
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    const data = await response.json()
    $(".loader").fadeOut(500)
    return data
}

async function instractions(meal) {
    $(".loader").fadeIn(500)
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
    const data = await response.json()
    displayInstractions(data.meals[0])
    $(".loader").fadeOut(500)

    return data

}
async function catag() {
    $(".loader").fadeIn(500)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let data = await response.json()
    displayCategories(data.categories)
    $(".loader").fadeOut(500)
    return data
}

async function sameCat(category) {
    $(".loader").fadeIn(500)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    let data = await response.json()
    displaySame(data.meals.slice(0, 20));
    $(".loader").fadeOut(500)
    return data
}
async function area() {
    $(".loader").fadeIn(500)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let data = await response.json()
    displayArea(data.meals)
    $(".loader").fadeOut(500)
    return data
}
async function areaFilter(area) {
    $(".loader").fadeIn(500)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let data = await response.json()
    sameArea(data.meals)
    $(".loader").fadeOut(500)
    return data
}
async function ingredFilter(nameOfIngred) {
    $(".loader").fadeIn(500)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${nameOfIngred}`)
    let data = await response.json()
    sameIngred(data.meals)
    $(".loader").fadeOut(500)
    return data
}

async function ingred() {
    $(".loader").fadeIn(500)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let data = await response.json()
    displayIngred(data.meals.slice(0, 20))
    $(".loader").fadeOut(500)
    return data
}


function sameIngred(meals) {
    document.querySelector(".Ingredients-container").innerHTML = ""
    let content = "";
    for (let i = 0; i < + meals.length; i++) {
        content += `
            <div onclick="showInstractions('${meals[i].idMeal}')" class="card cursor-pointer col-span-4 group  md:col-span-2  xl:col-span-1 rounded-[15px] overflow-hidden   relative">
            <img src=${meals[i].strMealThumb} alt="">
            <div
            class="layer absolute h-0 overflow-hidden group-hover:h-[100%] transition-[height] duration-500  left-0 bottom-0 right-0 flex items-center justify-center">
            <p class="meal-name text-[40px] font-bold">${meals[i].strMeal}</p>
            </div>
            </div>
            `

    }

    document.querySelector(".Ingredients-container").innerHTML += content



}

function displayIngred(meals) {
    document.querySelector(".Ingredients-container").innerHTML = ""
    let area = "";


    for (let i = 0; i < + meals.length; i++) {
        area += `
        <div onclick=" ingredFilter('${meals[i].strIngredient}')"class=" col-span-4 cursor-pointer  md:col-span-2  xl:col-span-1">
                <i class="fa-solid fa-drumstick-bite text-white font-bold text-[100px]"></i>
                <p class=" text-white font-bold text-[40px] text-center">${meals[i].strIngredient}</p>
                <p class=" text-white  text-[25px] text-center">${meals[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
            </div>
        `

    }


    document.querySelector(".Ingredients-container").innerHTML += area




}

async function byName(search) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    let data = await response.json()
    return data
}
async function byLetter(letter) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    let data = await response.json()
    return data
}

async function getName() {
    let nameSearch = document.querySelector(".nameSearch").value
    let searchName = await byName(nameSearch)
    displaySearch(searchName.meals)

}
async function getLetter() {
    let nameSearch = document.querySelector(".letterSearch").value
    let searchLetter = await byLetter(nameSearch)
    displaySearch(searchLetter.meals)

}

function displaySearch(meals) {
    document.querySelector(".name-search").innerHTML = ""
    let content = "";
    for (let i = 0; i < + meals.length; i++) {
        content += `
            <div onclick="showInstractions('${meals[i].idMeal}')" class="card cursor-pointer col-span-4 group  md:col-span-2  xl:col-span-1 rounded-[15px] overflow-hidden   relative">
            <img src=${meals[i].strMealThumb} alt="">
            <div
            class="layer absolute h-0 overflow-hidden group-hover:h-[100%] transition-[height] duration-500  left-0 bottom-0 right-0 flex items-center justify-center">
            <p class="meal-name text-[50px] font-bold">${meals[i].strMeal}</p>
            </div>
            </div>
            
            `
    }
    document.querySelector(".name-search").innerHTML += content


}
function sameArea(meals) {
    document.querySelector(".show-area").innerHTML = ""
    let content = "";
    for (let i = 0; i < + meals.length; i++) {
        content += `
            <div onclick="showInstractions('${meals[i].idMeal}')" class="card cursor-pointer col-span-4 group  md:col-span-2  xl:col-span-1 rounded-[15px] overflow-hidden   relative">
            <img src=${meals[i].strMealThumb} alt="">
            <div
            class="layer absolute h-0 overflow-hidden group-hover:h-[100%] transition-[height] duration-500  left-0 bottom-0 right-0 flex items-center justify-center">
            <p class="meal-name text-[40px] font-bold">${meals[i].strMeal}</p>
            </div>
            </div>
            `

    }

    document.querySelector(".show-area").innerHTML += content



}






function displayArea(meals) {
    document.querySelector(".show-area").innerHTML = ""
    let area = "";


    for (let i = 0; i < + meals.length; i++) {
        area += `
          <div onclick="areaFilter('${meals[i].strArea}')" class=" col-span-4 cursor-pointer  md:col-span-2  xl:col-span-1">
                <i class="fa-solid fa-house-laptop text-white font-bold text-[100px]"></i>
                <p class=" text-white font-bold text-[50px] text-center">${meals[i].strArea}</p>
            </div>
        `

    }

    document.querySelector(".show-area").innerHTML += area

}





function displaySame(meals) {
    document.querySelector(".cata-box").innerHTML = ""
    let content = "";
    for (let i = 0; i < + meals.length; i++) {
        content += `
            <div onclick="showInstractions('${meals[i].idMeal}')" class="card cursor-pointer col-span-4 group  md:col-span-2  xl:col-span-1 rounded-[15px] overflow-hidden   relative">
            <img src=${meals[i].strMealThumb} alt="">
            <div
            class="layer absolute h-0 overflow-hidden group-hover:h-[100%] transition-[height] duration-500  left-0 bottom-0 right-0 flex items-center justify-center">
            <p class="meal-name text-[40px] font-bold">${meals[i].strMeal}</p>
            </div>
            </div>
            `

    }

    document.querySelector(".cata-box").innerHTML += content


}


function showInstractions(meal) {
    document.querySelector(".cata-box").innerHTML = ""
    $(".details").removeClass("none")
    instractions(meal)
    $(".area-content").addClass("none")
    $(".ingredients-content").addClass("none")
}


function displayInstractions(meals) {
    document.querySelector(".details-cont").innerHTML = ""
    let content = "";
    let recipes = ``


    for (let i = 1; i <= 20; i++) {
        if (meals[`strIngredient${i}`]) {
            recipes += `
                     <div class=" text-[25px] rec-icons text-black w-fit flex justify-center items-center px-7  h-[50px] rounded-[5px]">
                                    ${meals[`strMeasure${i}`]} ${meals[`strIngredient${i}`]}</div>
                               
                            </div>`
        }
    }
    let tagsCont = meals.strTags?.split(",")

    if (!tagsCont) {
        tagsCont = []
    }
    let tagsRes = "";
    for (let i = 0; i < tagsCont.length; i++) {
        tagsRes += `
         <div class=" text-[25px]  text-white bg-red-400 w-fit flex justify-center items-center px-7  h-[50px] rounded-[5px]">
                                    ${tagsCont[i]}</div>
                               
                            </div>
        `
    }
    content = `
           <div class=" col-span-3 md:col-span-3 xl:col-span-1    ">
                <div class="imgg rounded-[20px] overflow-hidden">
                    <img src="${meals.strMealThumb}" alt="" class="w-[100%]">
                </div>
                <p class="name text-white text-[40px] font-semibold">${meals.strMeal}</p>
            </div>
            <div class="Instructions ps-6  col-span-3 md:col-span-3 xl:col-span-2 text-[20px] text-white">
                <h1 class="text-[50px] ">Instructions</h1>
                <p class="text-[22px]">${meals.strInstructions}</p>

                <div>
                    <div class="area text-[40px] font-bold">
                        <h2><span>Area :</span> ${meals.strArea}</h2>
                    </div>
                    <div class="category text-[40px] font-bold">
                        <h2><span>Category :</span> ${meals.strCategory}</h2>
                    </div>
                    <div class="Recipes ">
                        <h2 class="text-[40px] pb-5 font-bold">Recipes :</h2>
                        <div class="flex gap-4 recipes flex-wrap ">  </div>
                    <div class="tags ">
                        <h2 class=" text-[40px] pb-5 font-bold">Tags :</h2>
                         <div class="flex gap-4 pb-32 tagsArea recipes flex-wrap ">  </div>
                         </div>
                    
                    <div class="buttons pb-9 flex gap-3">
                        <a href="${meals.strSource}"  class="me-8 text-white text-center bg-green-600 w-[100px] h-[70px] rounded-[10px] flex items-center justify-center text-[20px] cursor-pointer  hover:bg-green-800 transition-colors duration-500 focus:outline-green-800 focus:outline-4 focus:outline ">Source</a>
                          
                        <a href="${meals.strYoutube}" class="text-white text-center bg-red-600 w-[100px] h-[70px] rounded-[10px] flex items-center justify-center text-[20px] cursor-pointer  hover:bg-red-800 transition-colors duration-500 focus:outline-red-800 focus:outline-4 focus:outline ">You Tupe</a> 

                    </div>
                </div>
            </div>
            `

    document.querySelector(".details-cont").innerHTML = content
    document.querySelector(".recipes").innerHTML = recipes
    document.querySelector(".tagsArea").innerHTML = tagsRes


    $(".landing-main").addClass("none")
    $(".search").addClass("none")
    $("nav").animate({ left: "-25vh" }, 500)
    $(".fa-x").addClass("none")
    $(".fa-bars").removeClass("none")
    $(".details").removeClass("none")
    $(".catagory").addClass("none")

}


function displayCategories(arr) {
    document.querySelector(".cata-box").innerHTML = ""
    let results = "";

    for (let i = 0; i < arr.length; i++) {
        results += `
             <div onclick="sameCat('${arr[i].strCategory}')" class="card  cursor-pointer  col-span-4 group  md:col-span-2  xl:col-span-1 rounded-[15px] overflow-hidden   relative">
            <img class="w-[100%]" src="${arr[i].strCategoryThumb}" alt="">
            <div
            class="layer absolute h-0 overflow-hidden group-hover:h-[100%] transition-[height] duration-500  left-0 bottom-0 right-0 flex items-center justify-center flex-col">
            <h3 class="font-bold text-[40px]">${arr[i].strCategory}</h3>
            <p class="meal-name text-[20px] text-center font-semiblod">${arr[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
            </div>
            </div>
            `
    }

    document.querySelector(".cata-box").innerHTML += results


}







async function landingDisplay() {
    let meal = ""
    const data = await landing(meal)
    display(data.meals)
}

window.onload = landingDisplay()

function display(meals) {
    let content = "";
    for (let i = 0; i < + meals.length; i++) {
        content += `
            <div onclick="showInstractions('${meals[i].idMeal}')" class="card cursor-pointer col-span-4 group  md:col-span-2  xl:col-span-1 rounded-[15px] overflow-hidden   relative">
            <img src=${meals[i].strMealThumb} alt="">
            <div
            class="layer absolute h-0 overflow-hidden group-hover:h-[100%] transition-[height] duration-500  left-0 bottom-0 right-0 flex items-center justify-center">
            <p class="meal-name text-[50px] font-bold">${meals[i].strMeal}</p>
            </div>
            </div>
            
            `
    }
    document.querySelector(".landing").innerHTML += content


}





//! nav bar scripts
$(".fa-bars").on("click", function () {
    $("nav").animate({ left: "0" }, 500)
    $(".fa-bars").addClass("none")
    $(".fa-x").removeClass("none")


    // looping on the list to make every link has his own timing
    let icons = $(".floating-links")
    for (let i = 0; i < icons.length; i++) {
        $(".floating-links").eq(i).animate({ top: "0" }, (i + 5) * 150)
    }


    // another animation for instant same timing
    // $(".floating-icons").animate({ top: "0" }, 800)
})

$(".fa-x").on("click", function () {
    $("nav").animate({ left: "-25vh" }, 500)
    $(".fa-x").addClass("none")
    $(".fa-bars").removeClass("none")
    $(".floating-links").animate({ top: "100%" }, 800)
})





// ~ openers scripts

$(".nav-search").on("click", function () {
    $(".landing-main").addClass("none")
    $(".search").removeClass("none")
    $("nav").animate({ left: "-25vh" }, 500)
    $(".fa-x").addClass("none")
    $(".fa-bars").removeClass("none")
    $(".details").addClass("none")
    $(".catagory").addClass("none")
    $(".area-content").addClass("none")
    $(".ingredients-content").addClass("none")
    $(".contact-content").addClass("none")
    document.querySelector(".nameSearch").value = ""
    document.querySelector(".name-search").innerHTML = ""
})



$(".categories").on("click", function () {
    $(".landing-main").addClass("none")
    $(".search").addClass("none")
    $("nav").animate({ left: "-25vh" }, 500)
    $(".fa-x").addClass("none")
    $(".fa-bars").removeClass("none")
    $(".details").addClass("none")
    $(".catagory").removeClass("none")
    $(".area-content").addClass("none")
    $(".ingredients-content").addClass("none")
    $(".contact-content").addClass("none")
    catag()
})

$(".area").on("click", function () {
    $(".landing-main").addClass("none")
    $(".search").addClass("none")
    $("nav").animate({ left: "-25vh" }, 500)
    $(".fa-x").addClass("none")
    $(".fa-bars").removeClass("none")
    $(".details").addClass("none")
    $(".catagory").addClass("none")
    $(".area-content").removeClass("none")
    $(".ingredients-content").addClass("none")
    $(".contact-content").addClass("none")
    area()
})
$(".ingredients").on("click", function () {
    $(".landing-main").addClass("none")
    $(".search").addClass("none")
    $("nav").animate({ left: "-25vh" }, 500)
    $(".fa-x").addClass("none")
    $(".fa-bars").removeClass("none")
    $(".details").addClass("none")
    $(".catagory").addClass("none")
    $(".area-content").addClass("none")
    $(".ingredients-content").removeClass("none")
    $(".contact-content").addClass("none")
    ingred()
})
$(".contact").on("click", function () {
    $(".landing-main").addClass("none")
    $(".search").addClass("none")
    $("nav").animate({ left: "-25vh" }, 500)
    $(".fa-x").addClass("none")
    $(".fa-bars").removeClass("none")
    $(".details").addClass("none")
    $(".catagory").addClass("none")
    $(".area-content").addClass("none")
    $(".ingredients-content").addClass("none")
    $(".contact-content").removeClass("none")
    document.querySelector(".name-input").value = ""
    document.querySelector(".email-input").value = ""
    document.querySelector(".phone-input").value = ""
    document.querySelector(".age-input").value = ""
    document.querySelector(".password-input").value = ""
    document.querySelector(".repass-input").value = ""
    document.querySelector(".name-error")
    document.querySelector(".email-error").classList.replace("block", "none")
    document.querySelector(".phone-error").classList.replace("block", "none")
    document.querySelector(".age-error").classList.replace("block", "none")
    document.querySelector(".password-error").classList.replace("block", "none")
    document.querySelector(".repass-error").classList.replace("block", "none")
})

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;


document.querySelector(".name-input").addEventListener("focus", () => {
    nameInputTouched = true
})

document.querySelector(".email-input").addEventListener("focus", () => {
    emailInputTouched = true
})

document.querySelector(".phone-input").addEventListener("focus", () => {
    phoneInputTouched = true
})

document.querySelector(".age-input").addEventListener("focus", () => {
    ageInputTouched = true
})

document.querySelector(".password-input").addEventListener("focus", () => {
    passwordInputTouched = true
})

document.querySelector(".repass-input").addEventListener("focus", () => {
    repasswordInputTouched = true
})





inputsValid()




function inputsValid() {
    if (nameInputTouched) {
        if (nameValid()) {
            document.querySelector(".name-error").classList.replace("block", "none")

        } else {
            document.querySelector(".name-error").classList.replace("none", "block")

        }
    }
    if (emailInputTouched) {

        if (emailValid()) {
            document.querySelector(".email-error").classList.replace("block", "none")
        } else {
            document.querySelector(".email-error").classList.replace("none", "block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValid()) {
            document.querySelector(".phone-error").classList.replace("block", "none")
        } else {
            document.querySelector(".phone-error").classList.replace("none", "block")

        }
    }

    if (ageInputTouched) {
        if (ageValid()) {
            document.querySelector(".age-error").classList.replace("block", "none")
        } else {
            document.querySelector(".age-error").classList.replace("none", "block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValid()) {
            document.querySelector(".password-error").classList.replace("block", "none")
        } else {
            document.querySelector(".password-error").classList.replace("none", "block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValid()) {
            document.querySelector(".repass-error").classList.replace("block", "none")
        } else {
            document.querySelector(".repass-error").classList.replace("none", "block")

        }
    }


    if (nameValid() &&
        emailValid() &&
        phoneValid() &&
        ageValid() &&
        passwordValid() &&
        repasswordValid()) {
        $(".sub-btn").removeClass("off")
        $(".sub-btn").addClass("on")
    } else {
        $(".sub-btn").addClass("off")
        $(".sub-btn").removeClass("on")
    }
}


function nameValid() {
    return (/^[a-zA-Z ]+$/.test(document.querySelector(".name-input").value))
}

function emailValid() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.querySelector(".email-input").value))
}

function phoneValid() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.querySelector(".phone-input").value))
}

function ageValid() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.querySelector(".age-input").value))
}

function passwordValid() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.querySelector(".password-input").value))
}

function repasswordValid() {
    return document.querySelector(".repass-input").value == document.querySelector(".password-input").value
}