import { colors } from "@cliffy/colors";

const printHomepage = () => {
  console.clear()
  console.log("               ___________________________")
  console.log("               |⣶⣶⣀⣀⣀                    |")
  console.log("               |⣶⣶⣶⣶⣀⣀⣀⣀              ⢸  |")
  console.log("               |⣶⣶⣶⣶⣶⣶⣶⣀⣀⣀_______________|")
  console.log("    ",colors.blue("PIPE-┐"),"       |⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶|    ")
  console.log("       ",colors.blue("SVN"),"       |⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣀⣀     |    ")
  console.log("                   |⣶⣶⣶⣶⣶⣶⣶⣶⣀⣀⣀   ⢸  |    ")
  console.log("                   |⣶⣶⣶⣶⣶⣶⣀⣀⣀     ⢸  |    ")
  console.log("                   |⣶⣶⣶⣀⣀⣀⣀       ⢸  |    ")
  console.log("")
  console.log("")
};

const printMenu = () => {
  console.log(colors.blue("    |  MENU "))
  console.log("    1. Listar cambios")
};

export { printHomepage, printMenu };
