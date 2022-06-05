let zoo = new Set(['cat','dog','mouse','dragon']);
console.log(zoo);
for ( let animal of zoo){
    console.log ( animal)
}

console.log(zoo.add("bird"))
zoo.delete("dragon")
console.log(zoo)
console.log(zoo.has('cat'))
console.log(zoo.has('dragon'))
