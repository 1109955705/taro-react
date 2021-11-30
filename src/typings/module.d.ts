declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare global {
  namespace JSX {}
}
