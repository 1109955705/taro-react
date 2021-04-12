export default class QNBleNativeDevice {
    deviceId: string;
    bluetoothName: string;
    mac: string;
    manufacturer: number[];
    services: string[];
    rssi: number;
    device: unknown;
    constructor(payload: {
        deviceId: string;
        bluetoothName: string;
        mac?: string;
        manufacturer: number[];
        services: string[];
        rssi: number;
        device: unknown;
    });
}
