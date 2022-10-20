declare const COLORS: {
    red: string;
    blue: string;
    a22: string;
};
declare type Colors = keyof typeof COLORS;
declare let color: Colors;
interface C2 {
    name: string;
    age: number;
}
declare type C21 = keyof C2;
declare const c211: C21;
