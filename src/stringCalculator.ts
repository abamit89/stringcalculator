export function add(numbers: string): number {
    if (!numbers) return 0;

    // Default delimiters
    let delimiter = /,|\n/;
    let customDelimiter = numbers.match(/^\/\/(.+)\n/);
    
    if (customDelimiter) {
        delimiter = new RegExp(customDelimiter[1]);
        numbers = numbers.split('\n')[1];
    }

    const numberList = numbers.split(delimiter);
    const negativeNumbers = numberList.filter(n => parseInt(n) < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return numberList.reduce((sum, n) => sum + (parseInt(n) || 0), 0);
}
