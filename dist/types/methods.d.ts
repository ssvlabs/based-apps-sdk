import { Prettify } from 'viem';
export type RemoveConfigArg<T extends (...args: any[]) => any> = Parameters<T>[1] extends undefined ? () => ReturnType<T> : 'config' extends keyof Parameters<T>[1] ? (props: Prettify<Omit<Parameters<T>[1], 'config'>>) => ReturnType<T> : (props: Parameters<T>[1]) => ReturnType<T>;
export type RemoveClientArg<T extends (...args: any[]) => any> = Parameters<T>[1] extends undefined ? () => ReturnType<T> : 'client' extends keyof Parameters<T>[1] ? (props: Prettify<Omit<Parameters<T>[1], 'client'>>) => ReturnType<T> : (props: Parameters<T>[1]) => ReturnType<T>;
