import { Script, ScriptResponse, World } from "./aidungeon"

export class MyGame implements Script {
    constructor() {}

    onInput(text: string, _world: World): ScriptResponse {
        return {
            text: text,
        }
    }

    onContext(text: string, _world: World): ScriptResponse {
        return {
            text: text,
        }
    }

    onOutput(text: string, _world: World): ScriptResponse {
        return {
            text: text,
        }
    }
}
