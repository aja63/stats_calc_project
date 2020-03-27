const PopulationSampling = require('../modules/PopulationSampling');
const Random_Generator = require('../modules/Random_Generator');
const Descriptive_Statistics = require('../modules/Descriptive_Statistics');
const jstat = require('jstat');
const seed = 10;
const verboseOutput = true;

test('Simple random sampling', () => {
    let size = 10;
    let arrList = Random_Generator.randomIntListSeeded(seed, 10, 100, size);
    let sampleSize = Random_Generator.randomIntSeed(seed, 1, size - 1);
    let sampleArr1 = PopulationSampling.simpleRandSample(arrList, sampleSize, seed);
    let sampleArr2 = PopulationSampling.simpleRandSample(arrList, sampleSize, seed);
    if (verboseOutput) {
        console.log('Simple random sample:', sampleArr1, "from", arrList);
    }
    expect(sampleArr1).toHaveLength(sampleSize);
    expect(sampleArr1).toEqual(sampleArr2);
});

test('Systematic random sampling', () => {
    let size = 10;
    let arrList = Random_Generator.randomIntListSeeded(seed, 10, 100, size);
    let sampleSize = Random_Generator.randomIntSeed(seed,1, size - 1);
    let sampleArr = PopulationSampling.systematicSample(arrList, sampleSize);
    if (verboseOutput) {
        console.log('Systematic random sample:', sampleArr, "from", arrList);
    }
    expect(sampleArr).toHaveLength(sampleSize);
});

test('Get z-score from confidence level', () => {
    expect(PopulationSampling.getZFromConfidence(80)).toEqual(1.28);
    expect(PopulationSampling.getZFromConfidence(95)).toEqual(1.96);
    expect(() => {PopulationSampling.getZFromConfidence(-1);}).toThrow();
    expect(() => {PopulationSampling.getZFromConfidence('high');}).toThrow();
});

test('Find margin of error', () => {
    let size = 10;
    let sampleArr = Random_Generator.randomIntListSeeded(seed, -100, 100, size);
    let confidence = Math.floor(Random_Generator.randomIntSeed(seed, 50, 95) /  5) * 5;
    let calc = PopulationSampling.marginOfError(sampleArr, confidence);
    if (verboseOutput) {
        console.log("Array:", sampleArr);
        console.log("MoE is", calc, "with", confidence.toString() + "% confidence");
    }
    expect(calc).toBeGreaterThan(0);
});

test('Confidence interval', () => {
    let size = 10;
    let sampleArr = Random_Generator.randomIntListSeeded(seed, -100, 100, size);
    let confidence = Math.floor(Random_Generator.randomIntSeed(seed, 50, 95) /  5) * 5;
    let calc = PopulationSampling.confidenceInterval(sampleArr, confidence);
    if (verboseOutput) {
        console.log("Array:", sampleArr);
        console.log("With", confidence.toString() + "% confidence, mean is in range", calc);
    }
    let mean = Descriptive_Statistics.mean(sampleArr);
    expect(calc).toHaveLength(2);
    expect(calc[0]).toBeLessThan(mean);
    expect(calc[1]).toBeGreaterThan(mean);
    expect(() => {PopulationSampling.confidenceInterval([],confidence);}).toThrow();
});

test('Cochran sample size', () => {
    expect(PopulationSampling.cochranFormula(95, 5)).toEqual(385);
    expect(PopulationSampling.cochranFormula(95, 5, 0.5)).toEqual(385);
    expect(PopulationSampling.cochranFormula(95, 5, 0.5, 1000)).toEqual(278);
});

test('Finding sample size', () => {
    let size = 10;
    let sampleArr = Random_Generator.randomIntListSeeded(seed, -100, 100, size);
    let confidence = Math.floor(Random_Generator.randomIntSeed(seed, 50, 95) /  5) * 5;
    let stdDev = Descriptive_Statistics.stdDev(sampleArr);
    let n1 = PopulationSampling.findSampleSizeNoStdDev(95,10, 0.5);
    let n2 = PopulationSampling.findSampleSizeWithStdDev(95, 10, stdDev);
    if (verboseOutput) {
        console.log(n1, n2);
    }
    expect(n1).toBeGreaterThan(0);
    expect(n2).toBeGreaterThan(0);
});