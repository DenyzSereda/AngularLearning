export class TextAndNumbers {

    public static drawTexts(ctx) {
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";

        let n = 22
            ;

        for (var i = 1; i < n + 1; i += 1) {
            var text = '';
            for (var j = 0; j < i; j++) {
                text += '*';
            }
            console.log(text);
        }

        let n1 = 11;

        for (var i = n1; i > 0; i--) {
            let text = '';
            for (var j = 0; j < n1 - i; j += 1) {
                text += ' ';
            }
            for (var k = 0; k < 2 * i - 1; k += 1) {
                text += '*';
            }
            console.log(text);
        }

        // function reverseString(str) {
        //     var splitString: string[] = str.split("");
        //     var reverseArray: string[] = splitString.reverse();
        //     var joinArray: string = reverseArray.join("");
        //     return joinArray;
        // }
        // let originalWord = "I'm special";
        // let reversedWord = reverseString(originalWord);
        // ctx.fillText(reversedWord, 350, 500);
        // //---------------------------------------------------------------------------------


        //  var sampleReversed: string[] = sample.split("");
        //  let Zer = sampleReversed[0];
        //  Zer = sampleReversed[0];
        //  sampleReversed[0] = sampleReversed[1];
        //  sampleReversed[1] = Zer + 1;
        //  ctx.fillText(sampleReversed, 150, 350);




        // let sample = "Denys";
        // let tempArray: string[] = sample.split("");

        // for (let i = 0; i < 5; i++) {
        //     tempArray[i] = tempArray[i] + (i + 1);
        //     // i=0: 'D'+'1' => tempArray[0]
        //     // i=1: tempArray[1] = ('e' + 2) 
        //     // i=2: tempArray[2]

        // }

        // for (let j = 0; j < 5; j++) {
        //     let y = j * 30;
        //     ctx.fillText(tempArray[j], 50, y + 30);

        // }

        // ctx.fillText(tempArray[4], 50, 200 + 150);
        // ctx.fillText(tempArray[3], 50, 200 + 120);
        // ctx.fillText(tempArray[2], 50, 200 + 90);
        // ctx.fillText(tempArray[1], 50, 200 + 60);
        //ctx.fillText(tempArray[0], 50, 200 + 30);




    }
}