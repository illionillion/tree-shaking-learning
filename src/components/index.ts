export { ComponentA } from "./component-a";
export { ComponentB } from "./component-b";
export { ComponentC } from "./component-c";

console.log("side effect"); // "sideEffects": falseにしないと実行されるし、このファイルごと含まれる

export const hello = () => console.log("hello") // importされると"sideEffects": falseしてもこのファイルごと含まれる
