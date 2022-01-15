import { BitMapSolve } from "../bitMapSolve";

describe('Evaluate algorithm', () => {

    const stubData = [
        [0,0,0,1],
        [0,0,1,1],
        [0,1,1,0]
    ]

    const _bitMapSolve = new BitMapSolve();

    it('bitmap solve pass', () => {
        _bitMapSolve.setData(stubData);

        const res = _bitMapSolve.solve();
    
        expect(res).not.toBeNull();
    })

    it('bitmap solve Fail', () => {
        _bitMapSolve.setData([]);

        const res = _bitMapSolve.solve();
    
        expect(res).not.toBeNull();
    })


  });