import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "app/**/*.ts",
  ],
  coveragePathIgnorePatterns: [
    "node_modules",
  ],
  moduleFileExtensions: [
    "ts",
    "js",
  ],
  preset: "ts-jest",
}

export default config
