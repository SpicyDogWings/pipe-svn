import { keypress } from "@cliffy/keypress";
import { colors } from "@cliffy/colors";
import { printHomepage, printMenu } from "./src/utils/userUI.ts";
import { statusView } from "./src/views/svnStatus.ts";

const renderMainMenu = () => {
  console.clear(); // Limpia la consola antes de dibujar el menú principal
  printHomepage();
  printMenu();
};

renderMainMenu()

for await (const event of keypress()) {
  try {
    if (event.key && ["1"].includes(event.key)) {
      await statusView()
      renderMainMenu()
    } else if (event.key === "q") {
      Deno.exit();
    } else {
      // printHomepage();
      // printMenu();
    }
  } catch (error) {
    renderMainMenu()
    console.log()
    console.error("Algo salió mal");

  }
}
