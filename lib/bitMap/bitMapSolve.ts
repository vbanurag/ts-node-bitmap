import { isEmpty } from "lodash";
import { UtilHelper } from "../utils/utilHelper";

export class BitMapSolve {
    private _input: number[][];
    private _utilHelper: UtilHelper;

    constructor() {
        this._input = [[]];
        this._utilHelper = new UtilHelper();
    }

    setData(data: number[][]) {
        this._input = data;
        if (isEmpty(this._input)) {
            throw new Error('Invalid input');
        }
    }

    solve(): number[][] {
        let row: number = this._input?.length || 0;
        let col: number = this._input?.length ? this._input[0].length : 0;
        
        let dp = this._utilHelper.createArray(row, col);

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                let minDist = Number.MAX_VALUE;
                for (let x = 0; x < row; x++) {
                    for (let y = 0; y < col; y++) {
                        if (this._input[x][y] == 1) {
                            let dist = Math.abs(x - i) + Math.abs(y - j);
                            minDist = Math.min(minDist, dist);
                        }
                    }
                }
                dp[i][j] = minDist;
            }
        }
        return dp;
    }
}