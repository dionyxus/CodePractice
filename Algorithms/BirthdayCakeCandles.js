'use strict';

const candlesCount = 4;

const candles = [3,2,1,3]

function birthdayCakeCandles(candles) {

    let noTallestCandles = 1;
    let tallestCandle = candles[0];
    for(let i = 1; i < candles.length; i++){
        if(tallestCandle < candles[i]){
            tallestCandle = candles[i];
            noTallestCandles = 1;
        }else if( tallestCandle === candles[i]){
            noTallestCandles++;
        }
    }

    //candles.filter(candle => candle === Math.max(...candles)).length
    
    return noTallestCandles; 
}

const result = birthdayCakeCandles(candles);

console.log(result);