
var oldContent = document.getElementById("container");
var oldContent2 = document.getElementById("container2");
oldContent2.style.display="none";

var search;
function connect() {

    var searchvalue = document.getElementById("searchBox").value ;
    search=searchvalue;
    document.getElementById("searchBox").value = ""; 
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`; 

    fetch (url)
    .then (res=> res.json() )
    .then( data => show(data.meals))
}

function show (data) {
    console.log (data); 
    
    
   oldContent.textContent = ""; 
   
     
   
   if(data.length<=5){
       
    for (var i=0; i<5; i++){
   
       var newDiv = document.createElement("div");
       newDiv.innerHTML = `Meal ID: <b>${data[i].idMeal}</b> <br>
                                  Meal Name: <b>${data[i].strMeal}</b> <br>
                                  <img src="${data[i].strMealThumb}"> <br>
                                  Meal Title: <b>${data[i].strCategory}</b> <br>
                                  Cooking Instructions:${data[i].strInstructions}<br><br>`
    newDiv.classList.add("innerStyle");                           
       oldContent.appendChild(newDiv); 
       
    }
     }
   
     else{
       

    
   oldContent2.style.display="flex";
   
       for (var i=0; i<5; i++){
           
           var newDiv = document.createElement("div");
           newDiv.innerHTML = `Meal ID: <b>${data[i].idMeal}</b> <br>
                                  Meal Name: <b>${data[i].strMeal}</b> <br>
                                  <img src="${data[i].strMealThumb}"> <br>
                                  Meal Title: <b>${data[i].strCategory}</b> <br>
                                  Cooking Instructions: ${data[i].strInstructions}<br><br>`; 
           newDiv.classList.add("innerStyle");
           oldContent.appendChild(newDiv); 
           
           
        }
   
     }
    
     
   
   }



   function connection() {
  
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`; 
    oldContent.textContent = ""; 
    oldContent2.style.display="flex";

    fetch (url)
    .then (res=> res.json() )
    .then( data => show2(data.meals))
}

function show2 (data) {
    console.log (data); 
    
    
    oldContent2.style.display="none";
   
     
   
    
       
   
    
    
   
       for (var i=5; i<data.length; i++){
   
           var newDiv = document.createElement("div");
           newDiv.innerHTML = `Meal ID: <b>${data[i].idMeal}</b> <br>
                               Meal Name: <b>${data[i].strMeal}</b> <br>
                               <img src="${data[i].strMealThumb}"> <br>
                               Meal Title: <b>${data[i].strCategory}</b> <br>
                               Cooking Instructions: ${data[i].strInstructions}<br><br>`; 
           newDiv.classList.add("innerStyle");
           oldContent.appendChild(newDiv); 
           
           
        
   
     }

     
    }
    
