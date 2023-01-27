const genRandomNumInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const baseString = 'You should:';
const verbs = ['go', 'run', 'crawl', 'walk', 'cry', 'wince', 'daydream', 'sex', 'ponder', 'meditate'];
const prepostionToVerb = {in: ['sex'], at: ['cry', 'daydream', 'ponder', 'meditate', 'wince'], to: ['go', 'run', 'crawl', 'walk', 'wince']}
const places = ['the grocery store', 'the park', 'the mall', 'the gas station', 'work', 'home', 'the bedroom'];

const getRandomValueFromArray = (array) => {
    return array[genRandomNumInRange(0, array.length - 1)];
}
const getPrepositionForVerb = (verb) => {
    let possiblePrepositions = [];
    for (entry of Object.entries(prepostionToVerb)) {
        const [prep, verbsForPrep] = entry;
        if (verbsForPrep.includes(verb)){
            possiblePrepositions.push(prep)
        }
    };
    if (possiblePrepositions.length > 1) {
        return getRandomValueFromArray(possiblePrepositions);
    }

    if (possiblePrepositions.length) {
        return possiblePrepositions[0];
    }

    return '';
}

const printRandomThingToDo = () => {
    const randomVerb = getRandomValueFromArray(verbs);
    const preposition = getPrepositionForVerb(randomVerb);
    const place = getRandomValueFromArray(places);
    
    console.log(baseString, randomVerb, preposition, place);
};

printRandomThingToDo();



