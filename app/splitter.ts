import Pdfjs from "pdfjs"
import fs from "fs"
import { PDFDocument } from "pdf-lib"

export const subPdf = async (inputPath: string): Promise<Buffer> => {
  console.log("in sub splitter")

  const src = fs.readFileSync('DS11_Complete.pdf')

  console.log("Read tester.pdf")

  const doc = new Pdfjs.Document()

  console.log("new pdf doc created")

  const ext = new Pdfjs.ExternalDocument(src)

  console.log("created external pdf from source")

  doc.addPageOf(1, ext)

  const newDoc = await doc.asBuffer()

  console.log("new doc:", newDoc)

  fs.writeFileSync("tester-new.pdf", newDoc)

  console.log("Exiting sub splitter")

  return Buffer.from("A, Ok")
}

export const copyWithPdfLib = async (inputPath: string, outputPath: string): Promise<boolean> => {
  const newPdf = await PDFDocument.create()

  const sourceBytes = fs.readFileSync(inputPath)
  const sourcePdf = await PDFDocument.load(sourceBytes)

  const count = await sourcePdf.getPageCount()
  const pageNumbers = [ ...Array(count).keys() ]

  const pages = await newPdf.copyPages(sourcePdf, pageNumbers)
  pages.forEach(p => newPdf.addPage(p))

  const output = await newPdf.save()

  fs.writeFileSync(outputPath, output)

  return true
}
