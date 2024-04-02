


const myList = document.querySelector("ul");


fetch("results.json")
  .then(res => res.json())
  .then(data => updateScoresInDOM(data))


  .catch((error) => {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`Error: ${error.message}`));
    document.body.insertBefore(p, myList);
  });




const updateScoresInDOM = (data) => {

  console.table(data)



  for (const key of data) {

    const listItem = document.createElement("li");
    listItem.innerHTML = `<div class="listContainer ${key.category}">
                     <img alt = "Icon of ${key.category} svg" src='${key.icon}'> 
                     <span class="Cat" >${key.category}</span>  
                     <span class= "score">${key.score}  </span> / 
                     <span style="font-weight: 500; color: hsl(224, 30%, 27%);">100</span>
                    </div>`




    myList.append(listItem);



  }




}
