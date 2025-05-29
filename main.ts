import { keypress } from "@cliffy/keypress";
import { colors } from "@cliffy/colors";
import { printHomepage, printMenu } from "./src/utils/userUI.ts";
import { statusView } from "./src/views/svnStatus.ts";

printHomepage();
printMenu();
for await (const event of keypress()) {
  try {
    if (event.key && ["1"].includes(event.key)) {
      statusView()
    } else if (event.key === "q") {
      Deno.exit();
    } else {
      printHomepage();
      printMenu();
      console.log()
      console.log(colors.red("? para acceder al menu"))
    }
  } catch (error) {
    console.error("Algo salió mal");
  }
}
