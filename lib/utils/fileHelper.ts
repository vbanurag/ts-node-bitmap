import path from 'path';
import fs from 'fs';
import lineReader from 'line-reader';
import { UtilHelper } from './utilHelper';

export class FileHelper {

    private readFilePath: string;
    private outFilePath: string;
    private _utilHelper: UtilHelper;

    constructor(inPath: string, outPath: string) {
        this.readFilePath = path.resolve(inPath);
        this.outFilePath = path.resolve(outPath);
        this._utilHelper = new UtilHelper();
    }

    async readFile() {
        return new Promise((res, rej) => {
            let testData: any = [];
            let datS = '';
            lineReader.eachLine(this.readFilePath, (line, last) => {
                if (line.length == 0) {
                    testData.push(datS);
                    datS = '';
                }
                if (line.length > 1) {
                    datS += `${line},`;
                }
                if (last) {
                    testData.push(datS);
                    res(testData);
                }
            });
        })

    }

    getRowAndCol(data: string) {
        return data?.split(' ');
    }

    async prepareData(data: []) {
        let testCases: any = {};
        data.map((i: string, index: number) => {
            let dataSplit = i.split(',')
            let rowCol = this.getRowAndCol(dataSplit[0],);
            let arr = this._utilHelper.createArray(rowCol[0], rowCol[1])
            for (let k = 1; k < dataSplit.length - 1; k++) {
                arr[k - 1] = Array.from(dataSplit[k]);
                arr[k - 1] = arr[k - 1].map(Number);
            }
            testCases[index + 1] = {
                input: arr,
                rawDta: data,
            }
        });
        return Promise.resolve(testCases);
    }

    async getData() {
        let data: [] | any = await this.readFile();
        let finalData = await this.prepareData(data);
        return Promise.resolve(finalData);
    }


    async writeFile(data: [[]]) {
        return new Promise((res, rej) => {
            const logger = fs.createWriteStream(this.outFilePath, {
                flags: 'a' // 'a' means appending (old data will be preserved)
            })
            for (let i = 0; i < data.length; i++) {
                logger.write("\n");
                logger.write(data[i].join(' '));
            }
            logger.write("\n");
            logger.close()
        })
    }

    async outHelper(data: any) {
        for (let _data in data) {
            this.writeFile(data[_data]);
        }
    }


}