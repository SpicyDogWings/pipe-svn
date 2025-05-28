import { keypress } from "@cliffy/keypress";
import { colors } from "@cliffy/colors";

for await (const event of keypress()) { // inicia el programa
  if (event.key && ["1"].includes(event.key)){
    console.log(colors.blue("Hola"))
  }
}
