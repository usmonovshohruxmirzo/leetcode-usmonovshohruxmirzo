function convertTemperature(celsius: number): number[] {
    const answer: number[] = []
    const k: number = celsius + 273.15
    const f: number = celsius * 1.80 + 32.00
    answer.push(k, f)
    return answer
};