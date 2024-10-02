// @ts-check

export default {
    testEnvironment: "node",
    projects: ["<rootDir>"],
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/test/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
    ],
    testPathIgnorePatterns: [
        "/(?:production_)?node_modules/",
        ".d.ts$",
        "<rootDir>/test/fixtures",
        "<rootDir>/test/helpers",
        "__mocks__",
        "<rootDir>/build",
    ],
    transform: {
        "^.+\\.[jt]sx?$": "ts-jest",
    },
    collectCoverage: true,
    coverageReporters: ["text"],
}
