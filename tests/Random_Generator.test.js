const Random_Generator = require('../modules/Random_Generator');
const verboseOutput = false;

test('Random_Generator integer between 10 and 100', () => {
    let val = Random_Generator.randomIntNoSeed(10,100);
    if (verboseOutput) {
        console.log('Random_Generator integer between 10 and 100:', val);
    }
    expect(val).toBeGreaterThanOrEqual(10);
    expect(val).toBeLessThanOrEqual(100);
});
test('Random_Generator float number between 10 and 100', () => {
    let val = Random_Generator.randomFlNoSeed(10,100);
    if (verboseOutput) {
        console.log('Random_Generator float number between 10 and 100:', val);
    }
    expect(val).toBeGreaterThanOrEqual(10);
    expect(val).toBeLessThanOrEqual(100);
});
test('Random_Generator integer between 10 and 100, with seed', () => {
    let val1 = Random_Generator.randomIntSeed(100, 10, 100);
    let val2 = Random_Generator.randomIntSeed(100, 10, 100);
    if (verboseOutput) {
        console.log('Random_Generator integer between 10 and 100, with seed:', val1);
    }
    expect(val1).toBeGreaterThanOrEqual(10);
    expect(val1).toBeLessThanOrEqual(100);
    expect(val1).toEqual(val2);
});
test('Random_Generator float number between 10 and 100, with seed', () => {
    let val1 = Random_Generator.randomFlSeed(100, 10, 100);
    let val2 = Random_Generator.randomFlSeed(100, 10, 100);
    if (verboseOutput) {
        console.log('Random_Generator float between 10 and 100, with seed:', val1);
    }
    expect(val1).toBeGreaterThanOrEqual(10);
    expect(val1).toBeLessThanOrEqual(100);
    expect(val1).toEqual(val2);
});
test('Random_Generator list of random seeded numbers, between 10 and 100', () => {
    let size = 10;
    let l1 = Random_Generator.randomIntListSeeded(100, 10, 100, size);
    let l2 = Random_Generator.randomIntListSeeded(100, 10, 100, size);
    if (verboseOutput) {
        console.log('Random_Generator list of random seeded numbers, between 10 and 100:', l1);
    }
    expect(l1).toHaveLength(10);
    expect(l1).toEqual(l2);
});
test('Random_Generator list of seeded float numbers, between 10 and 100', () => {
    let size = 10;
    let l1 = Random_Generator.randomFlListSeeded(100, 10, 100, size);
    let l2 = Random_Generator.randomFlListSeeded(100, 10, 100, size);
    if (verboseOutput) {
        console.log('Random_Generator list of random seeded float numbers, between 10 and 100:', l1);
    }
    expect(l1).toHaveLength(10);
    expect(l1).toEqual(l2);
});
test('Selects random item in a list, within a range of 10 to 100', () => {
    let size = 10;
    let arrList = Random_Generator.randomIntListSeeded(100, 10, 100, size);
    let val = Random_Generator.selectRandomItem(arrList);
    if (verboseOutput) {
        console.log('Selects random item in a list, within a range of 10 to 100:', val);
    }
    expect(arrList).toContain(val);
});
test('Selects random seeded item in a list, within a range of 10 to 100', () => {
    let size = 10;
    let arrList = Random_Generator.randomIntListSeeded(100, 10, 100, size);
    let val = Random_Generator.selectRandomItem(arrList);
    if (verboseOutput) {
        console.log('Selects random seeded item in a list, within a range of 10 to 100:', val);
    }
    expect(arrList).toContain(val);
});
test('Select 5 random items from an established list', () => {
    let size = 10;
    let arrList = Random_Generator.randomIntListSeeded(100, 10, 100, size);
    let newArrList = Random_Generator.selectNItems(arrList, 5);
    if (verboseOutput) {
        console.log('Select 5 random items from an established list:', newArrList, "from", arrList);
    }
    expect(newArrList).toHaveLength(5);
});
test('Selects 5 seeded random items from an established list', () => {
    let size = 10;
    let arrList = Random_Generator.randomIntListSeeded(100, 10, 100, size);
    let newArrList1 = Random_Generator.selectNItemsSeeded(100, arrList, 5);
    let newArrList2 = Random_Generator.selectNItemsSeeded(100, arrList, 5);
    if (verboseOutput) {
        console.log('Select 5 random items from an established list:', newArrList1, "from", arrList);
    }
    expect(newArrList1).toHaveLength(5);
    exp