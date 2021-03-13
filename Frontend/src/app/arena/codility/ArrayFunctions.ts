export class ArrayFunctions {

    static CountDaysWithNegativeTemperature(temperatures: number[]): number[] {
        let resultTemp = [];


        for (let i = 0; i < temperatures.length; i++) {
            resultTemp[temperatures.length - i - 1] = temperatures[i];
        }

        return resultTemp;
    }

    static identifyOddElement(A: number[]) {
        let nv = [];
        for (let i = 0; i < A.length; i++) {
            //A[i]  
            console.log('i=' + i + ', A[i]=' + A[i]);

            let killed = false;
            for (let j = 0; j < nv.length; j++) {
                if (nv[j] === A[i]) {
                    killed = true;
                    nv.splice(j, 1);
                    break;
                }
            }

            if (!killed) {
                nv.push(A[i]);
            }
        }

        return nv;
    }

    // if t = negative = 0 = stop, if t = 1 = possitive = i++
    // i = nunOfNegDays

    static test() {
        let temperaturesMarch = [-1, -1, 2, 2, 6, -3, 4, 4];
        let temperaturesApril = [1, 2, 12, 12, 13, 14];
        let reversedTemperatures = ArrayFunctions.CountDaysWithNegativeTemperature(temperaturesApril);
        console.log(reversedTemperatures);


        let odd = ArrayFunctions.identifyOddElement(temperaturesApril);
        console.log(`Odd temperature in March is ${odd}`);
    }
}




