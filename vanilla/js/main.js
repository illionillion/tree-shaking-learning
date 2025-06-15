import { componentA, componentB } from "./components/index.js";

function main() {
    componentA();
    componentB();
    // ビルドツールを使用していないので未使用のcomponentCは読み込まれる
}

document.addEventListener("DOMContentLoaded", main);