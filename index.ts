import { subPdf } from "./app/splitter"
import fs from "fs"
import path from "path"
import Blob from "cross-blob"
import { PDFAssembler } from "pdfassembler"

new Blob([])
global.Blob = Blob

const pdf = fs.readFileSync(path.join(__dirname, "./tester.pdf"))

subPdf(pdf)
  .then(() => {
    console.log("Run succeeded")
    process.exit(0)
  })
  .catch(e => {
    console.log("Failed to run with error:", e)
    process.exit(1)
  })
