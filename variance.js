import sumNthPowerDeviations from "./sum_nth_power_deviations";


function variance(x) {
    // The variance of no numbers is null
    if (x.length === 0) {
        throw new Error("variance requires at least one data point");
    }

    // Find the mean of squared deviations between the
    // mean value and each value.
    return sumNthPowerDeviations(x, 2) / x.length;
}

export default variance;