import QNBleTypings from './typings';
export declare function hasOwnProperty(obj: Object, prop: string | number | symbol): boolean;
/**
 * 获取数据类型
 * @param {any} arg
 * @example
 * isType(1) === 'number'
 */
export declare function isType(arg: any): string;
export declare function number2hex(value: number): string;
export declare function array2hex(arr: number[]): string;
export declare function hex2Array(hexString: string): number[];
/**
 * 提取厂商字段数据
 * @param {number[]} arr - 原始数据数组，使可用 hex2Array(rawData) 得到
 */
export declare function extractManufactureData(arr: number[]): number[];
export declare function splitArray(arr: number[]): number[][];
export declare function ab2hex(buffer: ArrayBuffer): string;
export declare function ab2Array(buffer: ArrayBuffer): number[];
export declare function formatArrayToHex(arr: Uint8Array | number[]): string;
export declare function stringToByteArray(str: string): number[];
export declare function byteArrayToString(arr: number[]): string;
/**
 * 添加校验位值
 */
export declare function addChecksum(cmdData: number[]): number[];
export declare function calcAgeWithBirthday(birthday: Date): number;
/**
 * 类似于 new Date(arg) 生成一个Date对象实例
 * 但是会对字符串YYYY-MM-DD 格式特殊处理为 YYYY/MM/DD 格式，因为ios上不能解析 -
 * @param {any} arg
 */
export declare function getNewDateInstance(arg: any): Date;
export declare function formatTime(date: Date, fmt?: string): string;
export declare function formatDateToString(d: Date): string;
export declare function formatDateFullToString(d: Date): string;
export declare function logTimeString(): string;
export declare function times(num: number, radio: number): number;
export declare function wxPromise(fn: QNBleTypings.WxMiniprogramFunction): (obj?: QNBleTypings.WxMiniprogramFunctionParams) => Promise<any>;
export declare function timeoutPromise(overtime: number, data?: any): Promise<any>;
/**
 * 一个字节8位，这里解析两个字节的数据
 * @param {number} h
 * @param {number} l
 */
export declare function decodeInteger(h: number, l: number): number;
/**
 * 为了处理user信息里的性别gender字段
 * 统一返回数字
 * 1： 男性
 * 0：女性
 */
export declare function sealGenderParam(gender: string | number): 1 | 0;
/**
 * 将onAaBbCc格式转为aa-bb-cc
 * @param {string} str
 * @param {string} [symbol=-] 连接符
 * @param {boolean} [trimHeadKebab=false]
 */
export declare function kebabCaseAndRemoveOn(str: string, symbol?: string, trimHeadKebab?: boolean): string;
/**
 * 获取wifi信号等级
 * 0级 rssi < -100
 * 1级 rssi [-100, -85) 1格信号
 * 2级 rssi [-85, -70) 2格信号
 * 3级 rssi [-70, -55) 3格信号
 * 4级 rssi >= -55 4格信号，满格信号
 * @param rssi - 信号强度，是负数
 */
export declare function getWifiRssiLevel(rssi: number): number;
declare const _default: {
    hasOwnProperty: typeof hasOwnProperty;
    number2hex: typeof number2hex;
    array2hex: typeof array2hex;
    hex2Array: typeof hex2Array;
    extractManufactureData: typeof extractManufactureData;
    splitArray: typeof splitArray;
    ab2hex: typeof ab2hex;
    ab2Array: typeof ab2Array;
    formatArrayToHex: typeof formatArrayToHex;
    stringToByteArray: typeof stringToByteArray;
    addChecksum: typeof addChecksum;
    calcAgeWithBirthday: typeof calcAgeWithBirthday;
    formatTime: typeof formatTime;
    formatDateToString: typeof formatDateToString;
    formatDateFullToString: typeof formatDateFullToString;
    logTimeString: typeof logTimeString;
    wxPromise: typeof wxPromise;
    timeoutPromise: typeof timeoutPromise;
    decodeInteger: typeof decodeInteger;
    sealGenderParam: typeof sealGenderParam;
    kebabCaseAndRemoveOn: typeof kebabCaseAndRemoveOn;
};
export default _default;
