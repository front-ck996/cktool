const COLORS = {
  red: 'red1',
  blue: 'blue1',
  a22: ''
}
type Colors = keyof typeof COLORS

let color: Colors
color = 'a22'
console.log(color)


interface C2 {
  name: string,
  age: number
}
type C21 = keyof C2

const c211: C21 = 'age'

console.log(c211)