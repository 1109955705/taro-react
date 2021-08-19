import QNBle from '../QNBle';
declare class QNMPPlugin {
  private readonly _qnble;
  constructor();
  init(config: any): Promise<import('../typings').default.InitFuncReturnValue>;
  get bleApi(): QNBle;
}
export default QNMPPlugin;
