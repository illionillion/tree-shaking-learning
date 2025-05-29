// ここでA,B,Cのコードを定義してexportしてると、同じファイルに定義してるので、
// "sideEffects": falseにしても、A,B,Cのコードは含まれる


export const ComponentA = () => {
  console.log("ComponentA rendered");
  return <div>Component A</div>;
}
export const ComponentB = () => {
  console.log("ComponentB rendered");
  return <div>Component B</div>;
}
export const ComponentC = () => {
  console.log("ComponentC rendered");
  return <div>Component C</div>;
}