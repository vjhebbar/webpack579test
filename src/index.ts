import { Colors } from "./colors"

function printComponents() {
    console.log(Colors.Red);
    console.log(Colors.Green);
    const { Red, Green } = Colors;
    console.log(Red);
    console.log(Green);
}

printComponents();