const seedrandom = require('seedrandom');

class Random {
    //Gets a random integer (without seed)
    static randomIntSeedless(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //Gets a random float number (without seed)
    static randomFlSeedless(min, max) {
        let randNo = Math.random() * (max - min) + min;
        return Math.floor(randNo * 100.00) / 100.00;
    }

    //Get a random integer using a seed
    static randomIntSeed(seed, min, max) {
        seedrandom(seed, {global: true});
        return Math.floor(Math.random() * (max - min) + min);
    }

    //Generates a random seeded float number
    static randomFlSeed(seed, min, max) {
        seedrandom(seed, {global: true});
        let randomNo = Math.random() * (max - min) + min;
        return Math.floor(randomNo * 100.00) / 100.00;
    }

    //Creates a seeded decimal list
    static randomFlListSeeded(seed, min, max, n) {
        let randArray = [];
        seedrandom(seed, {global: true});

        for (let i = 0; i < n; i++) {
            let randNo = Math.random() * (max - min) + min;
            randArray[i] = Math.floor(randNo * 100.00) / 100.00;
        }
        return randArray;
    }

    //Creates a int list of seeded items
    static randomIntListSeeded(seed, min, max, len) {
        let randArray = [];
        seedrandom(seed, {global: true});

        for (let i = 0; i < len; i++) {
            randArray.push(Math.floor(Math.random() * (max - min) + min));
        }
        return randArray;
    }

    //Selects random Item
    static selectRandomItem(list) {
        let randItem = Math.floor(Math.random() * list.length);
        return list[randItem];
    }

    //Selects a random seeded item
    static selectRandomSeededItem(seed, list) {
        seedrandom(seed, {global: true});
        let randItem = Math.floor(Math.random() * list.length);
        return list[randItem];
    }

    //Selects N amount of random items, with replacement
    static selectNItems(list, n) {
        let returnList = [];
        while (returnList.length <= n) {
            let item = Math.floor(Math.random() * list.length) + 0;
            returnList.push(list[item]);
        }
        return returnList;
    }


    //Selects N amount of seeded items, with replacement
    static selectNItemsSeeded(seed, list, n) {
        seedrandom(seed, {global: true});
        let returnList = [];
        while (returnList.length <= n) {
            let item = Math.floor(Math.random() * list.length) + 0;
            returnList.push(list[item]);
        }
        return returnList;
    }

}

module.exports = Random;