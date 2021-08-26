import path from "path"
import { subPdf, copyWithPdfLib } from "../app/splitter"

describe("splitter tests", () => {
  test("Split file should succeed", async () => {
    expect(
      await subPdf("tester.pdf")
    ).toEqual(Buffer.from("A, Ok"))
  })

  test("pdf lib", async () => {
    expect (
      await copyWithPdfLib(
        path.join(__dirname, "../test.pdf"),
        path.join(__dirname, "../pdf-lib-test.pdf"),
      )
    ).toEqual(true)
  })
})
