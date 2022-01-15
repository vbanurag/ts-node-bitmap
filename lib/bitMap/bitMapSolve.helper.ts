import { BitMapSolve } from './bitMapSolve';
import { FileHelper } from '../utils/fileHelper';
import { isEmpty } from 'lodash';

export class BitMapSolveHelper {
    private _bitMapSolve: BitMapSolve;
    private _fileHelper: FileHelper;
    private _dataList: any;

    constructor() {
        this._dataList = {}
        this._bitMapSolve = new BitMapSolve();
        this._fileHelper = new FileHelper('input.txt', 'output.txt');
    }

    setData(data: any) {
        this._dataList = data;
        if (isEmpty(this._dataList)) {
            throw new Error('Invalid input');
        }
    }

    public async stdIn() {
        const data = await this._fileHelper.getData()
        this.setData(data)
    }

    async startSolve() {
        let ret: any = {}
        for (let data in this._dataList) {
            this._bitMapSolve.setData(this._dataList[data].input)
            const res = this._bitMapSolve.solve();
            ret[data] = res;
        }
        await this._fileHelper.outHelper(ret)
    }


}