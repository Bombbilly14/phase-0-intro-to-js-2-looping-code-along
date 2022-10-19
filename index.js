function writeCards(name, event) {
   console.log(name)
   console.log(event)
   const newCard=[]
   for (let i=0; i < name.length; i++){
    console.log(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    newCard.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
   }
return newCard
}
function countDown(startingNumber) {

    while(startingNumber >= 0){
        console.log(startingNumber)
        startingNumber--   
    }

}