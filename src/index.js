console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', getDog())
document.addEventListener('DOMContentLoaded', getDogBreed())
document.addEventListener('DOMContentLoaded', attachDropdownListener)



//Define const

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function addImage(photo){
 let imageContainer = document.querySelector("#dog-image-container")  
 let imagePic = document.createElement("img")
 imagePic.src = photo;
 imageContainer.appendChild(imagePic)
}

// function listBreeds(breeds){
//   let breedList = document.querySelector("#dog-breeds")
//   let newBreedList = document.createElement("li")
//   newBreedList.innerText = breeds;
//   breedList.appendChild(newBreedList)
// }


//Fetch Request for dog resources

function getDog(){
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(res => res.message.forEach (dog => addImage (dog)))
}

function getDogBreed(){
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(res => {
       const breedHTTP = Object.keys(res.message)
   
    
    breedHTTP.forEach((item)=>{
        let li = document.createElement("li");
        let breedList = document.querySelector("#dog-breeds");
        li.innerText=item;
        breedList.appendChild(li);
    
    li.addEventListener('click', changeColor)
    })

    function changeColor(singleBreed){
        singleBreed.target.style.color = "red"
    }
    })
    
}



function attachDropdownListener(){
    let dropDown = document.querySelector("#breed-dropdown")
    dropDown.addEventListener('change', renderBreedsFiltered)
}

function renderBreedsFiltered(e){
    let selectedElement = e.target.value
    console.log (selectedElement)

    let breedList = document.querySelector("#dog-breeds")
    console.log(breedList)
    let listItems = document.querySelectorAll("#dog-breeds li")
    listItems.forEach((item) => {
        if (item.innerText.charAt(0) !== selectedElement){item.style.display = "none" }

    })
    // console.log (listItems)
    // let listArray = []
    // for (let i=0; i<listItems.length; i++){
    //     listArray.push(listItems[i].innerText)
    // }
    // let filteredList = listArray.filter((listItem) => {
    //     return listItem.charAt(0) === selectedElement
    // } 


    
    

}
// function removeBreeds(){
//     let breedList = document.querySelector("#dog-breeds");
//     let dropDown = document.querySelector("#breed-dropdown");

//     dropDown.addEventListener('click', () => {
//         while (breedList.firstChild){
//             breedList.removeChild(breedList.firstChild)
//         }
//     })
//     dropDown.addEventListener('change', findBreedInitial)
//     }

// function findBreedInitial(letter){
//     let breedInitial = breed.chartAt(0);
//     console.log(breed);
//     if (breedInitial === letter){
//         let li = document.createElement("li")
//         let breedList = document.querySelector("#dog-breeds");
//         li.innerText=breed;
//         breedList.appendChild(li);

//     }
// }



    
    

