import {
  readableStreamFromReader,
} from "https://deno.land/std@0.224.0/streams/readable_stream_from_reader.ts";

const getSvnStatus = async () => {
  try {
    const command = new Deno.Command("svn", {
      args: ["status"],
      stdout: "piped",
      stderr: "piped",
    })
    const process = await command.spawn()
    const { stdout, stderr, code } = await process.output()
    const errorText = new TextDecoder().decode(stderr).trim();
    if (code !== 0 || (errorText !== "" && errorText.includes("not a working copy"))) {
      let errorMessage = `Error al ejecutar 'svn status'.`;
      if (code !== 0) {
        errorMessage += ` Código de salida: ${code}.`;
      }
      // if (errorText !== "") {
      //   errorMessage += ` Mensaje de error (stderr):\n${errorText}`;
      // }
      throw new Error(errorMessage);
    }
    const outputString = new TextDecoder().decode(stdout)
    const statusLines = outputString
      .split("\n")
      .map(line => line.trim())
      .filter(line => line !== "")
    return statusLines
  } catch (error) {
    console.error("Fallo al obtener el estado de SVN:", error.message)
    throw error
  }

};

export { getSvnStatus }
