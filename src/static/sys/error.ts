import dayjs from 'dayjs';
/**
 *
 * @param {string} name 错误名字
 * @param {string} action 错误动作描述
 * @param {string} info 错误信息，通常是 fail 返回的
 */
// eslint-disable-next-line
export const logError = (name: string, action: string, info?: string | object) => {
  let errInfo;
  if (!info) {
    errInfo = 'empty';
  }
  const time = dayjs().format('YYYY/MM/DD HH:mm:ss');
  console.warn(time, name, action, info);
  if (typeof info === 'object') {
    errInfo = JSON.stringify(info);
  }
};
