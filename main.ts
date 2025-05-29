import { keypress } from "@cliffy/keypress";
import { colors } from "@cliffy/colors";
import { printHomepage, printMenu } from "./src/utils/userUI.ts";
import { getSvnStatus } from "./src/utils/svn/svnStatusParser.ts";

printHomepage();
printMenu();
for await (const event of keypress()) {
  try {
    if (event.key && ["1"].includes(event.key)) {
      const statusLines = await getSvnStatus();
      if (statusLines.length > 0) {
        console.log("Líneas de estado de SVN:");
        statusLines.forEach((line) => {
          console.log(line);
        });
      }
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
