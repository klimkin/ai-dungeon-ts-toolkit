import { sample } from "../random"
import { mockRandom } from "jest-mock-random"

describe("sample", () => {
    it("throws if array is empty", () => {
        expect(() => sample([])).toThrow("Array is empty")
    })
    it("returns random array item", () => {
        mockRandom(0.5)
        const array = [1, 2, 3]
        expect(sample(array)).toEqual(2)
    })
})
