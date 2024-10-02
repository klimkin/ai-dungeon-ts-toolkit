import { mockRandom } from "jest-mock-random"
import { MyGame } from "../mygame"
import { World } from "../aidungeon"

describe("MyGame", () => {
    const world: World = {
        history: [],
        storyCards: [],
        state: { memory: { context: "", authorsNote: "", frontMemory: "" } },
        info: { characterNames: [], actionCount: 0 },
    }

    beforeEach(() => {
        mockRandom(0.0)
    })

    it("shall be", () => {
        const script = new MyGame()
        expect(script.onInput("Text", world).text).toEqual("Text")
    })
})
