import { colors } from "@cliffy/colors";
import { keypress } from "@cliffy/keypress";
import { getSvnStatus } from '../utils/svn/svnStatusParser.ts';
import { printMenuSvnStatus } from "../utils/userUI.ts";

interface StatusLine {
  path: string;
  status: string;
}

const statusView = async () => {
  console.clear()
  printMenuSvnStatus()
  const statusLines = await getSvnStatus();
  const statusLinesEnchanced: StatusLine[] = []
  if (statusLines.length > 0) {
    statusLines.forEach((line) => {
      const lineEnchanced = line.split(' ').map(item => item.trim()).filter(item => item != '')
      statusLinesEnchanced.push({ path: lineEnchanced[1], status: lineEnchanced[0] })
    });
  }
  statusLinesEnchanced.forEach((line) => {
    let statusColor
    if (line.status === "M") {
      statusColor = colors.green(line.status)
    } else if (line.status === "?") {
      statusColor = colors.white(line.status)
    }
    console.log(statusColor, '  ', line.path)
  })
  for await (const event of keypress()) {
    try {
      if (event.key && ["m"].includes(event.key)) {
        statusView()
      } else if (event.key === "1"){
        await statusView()
      } else if (event.key === "q") {
        Deno.exit();
      } else if(event.key === "escape") {
        console.log("Precioné escape")
        break
      } else {
        console.log(event.key)
        // console.clear()
        // printMenuSvnStatus();
      }
    } catch (error) {
      console.error("Algo salió mal");
    }
  }
};

export { statusView };
