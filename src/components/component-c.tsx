import { FC } from "react";

export const ComponentC:FC = () => {
    return <div>コンポーネントC</div>
}

console.log("componentC"); // ここもcomponentCがインポートされてなくても副作用があれば通常はバンドルされる
