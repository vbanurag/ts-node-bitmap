import { BitMapSolve } from './bitMapSolve';
import { FileHelper } from './utils/fileHelper';

export class BitMapSolveHelper {
    private _bitMapSolve: BitMapSolve;
    private _fileHelper: FileHelper;

    constructor() {
        this._bitMapSolve = new BitMapSolve();
        this._fileHelper = new FileHelper('input.txt', 'output.txt');
    }

    public async stdIn() {
        const data = await this._fileHelper.getData()
        console.log(data)
    }


}