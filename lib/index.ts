import { BitMapSolveHelper } from './bitMap/bitMapSolve.helper';

const as = new BitMapSolveHelper();

console.log('Start Reading')
as.stdIn().then(() => {
    as.startSolve()
    console.log('closed')
})

