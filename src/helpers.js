
//returns item at a random index of passed in array

function choice(items){
  let randomIndex =  Math.floor(Math.random() * items.length);
  return items[randomIndex]
}


//if item is present in passed-in array, removes item from array 
//then returns the item. )therwise returns undefined

function remove(items, item){
  if ( items.includes(item)){
    items.splice(items.indexOf(item), 1);
    return item;
  }
  return undefined
}



export  {choice, remove}