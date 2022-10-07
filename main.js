const createWoodBlock = () => {
    const woodObject = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
    return woodObject 
}

// Aug 23 2022, 9:42pm :i gotta figure out why the function below isn't navigating the object
// Aug 24 2022, 9:40am: got it. mistake: i was trying to pull the woodObject into createBeautifulCarving() as a parameter, instead of passing it into it as an argument when calling it from the variable woodBlock. works nw, and I understrand the flow better. Progress!
const createBeautifulCarving = () => {
    const createBeautifulCarvingString = `The ${woodBlock.length}-inch, ${woodBlock.material} was carved into a wooden ${woodBlock.purpose}.`

   return createBeautifulCarvingString
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)

console.log(carvingString)