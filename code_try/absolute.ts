abstract class a{
  a: string
}
abstract class b{
  a: string
}
abstract class c{
  a: string
}
class abc extends  a {
  constructor() {
    super();
  }
}
var initAbc =  new abc()
initAbc.a = '46131654'
console.log(initAbc)