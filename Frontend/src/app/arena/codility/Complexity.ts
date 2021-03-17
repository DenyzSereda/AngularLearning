export class Complexity {

    public static test() {
        this.complexit(7);
        this.complexit(6);
    }
    public static complexit(n) {

        console.log(`================================`);

        let result = 0;
        for (let i = 0; i < n; i++) {
            console.log(`i=${i}---------------------------`);
            for (let j = i; j < n; j++) {
                result += 1;
                console.log(`j=${j}, result=${result}`);
            }
        }

        console.log(`result=${result}`);
        console.log(`================================`);
    }
}