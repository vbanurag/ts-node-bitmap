import { toNumber } from 'lodash'

export class UtilHelper {
    constructor() {

    }

    createArray(row: number | string, col: number | string) {
        return Array(toNumber(row)).fill(null).map(() => Array(toNumber(col)));
    }
}