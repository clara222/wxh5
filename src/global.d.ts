/**
 * 这里主要放全局空间的定义文件
 * 一些第三方的库一般没有自带定义文件
 * 需要我们手动添加shorthand ambient module
 * 参见：https://github.com/Microsoft/TypeScript/issues/9748
 * https://www.typescriptlang.org/docs/handbook/modules.html
 */

declare module '@/utils/wxqrcode.js';
declare module 'qs';
declare module 'html2canvas';

