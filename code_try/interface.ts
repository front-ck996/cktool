// node  --loader ts-node/esm
interface a{
  a: string,
}
interface b{
  b: string
}
interface c{
  c: string
}
interface abc extends a,b,c{

}
class classAbc implements abc{
  readonly a: string;
  public b: string;
  c: string;
  constructor() {
    this.a = '1'
    this.b = '2'
    this.c = '3'
  }
}
const initClassAbc = new classAbc()
console.log(initClassAbc)
// initClassAbc.a =  '5'