import { keypress } from "@cliffy/keypress";
import { colors } from "@cliffy/colors";
import { printHomepage, printMenu } from "./src/utils/userUI.ts";

printHomepage();
printMenu();
for await (const event of keypress()) {             // inicia el programa
  if (event.key && ["1"].includes(event.key)){
    console.log(colors.blue("Hola"))
  } else if (event.key === "q") {
    Deno.exit()
  }
}
