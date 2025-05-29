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
  console.log("")
};

const printMenuSvnStatus = () => {
  console.log(colors.blue("    |  STATUS View "))
  console.log("    1.   Refrescar")
  console.log("    m.   Filtrar Modificados")
  console.log("    Esc. Regresar")
  console.log("")
};

export { printHomepage, printMenu, printMenuSvnStatus };
