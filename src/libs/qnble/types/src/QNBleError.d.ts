import { QNBleErrorType } from './consts';
export default class QNBleError extends Error {
    detail: {
        code: QNBleErrorType;
        desc: string;
    };
    extra: any;
    constructor(errorType: QNBleErrorType | QNBleError, extraData?: any);
}
