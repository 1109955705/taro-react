import QNBleTypings from './typings';
export default class QNEvent<T extends unknown> {
    type: QNBleTypings.QNEventType;
    name: QNBleTypings.QNEventName;
    detail: T;
    constructor({ type, name, detail, }: {
        type: QNBleTypings.QNEventType;
        name: QNBleTypings.QNEventName;
        detail?: T;
    });
}
