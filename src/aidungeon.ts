// Type definitions for AI Dungeon Scripting, see https://help.aidungeon.com/scripting

export type GameState = {
    memory: {
        context: string
        authorsNote: string
        frontMemory: string
    }
    message?: string
    displayStats?: { key: string; value: number; color: string }[]
}

export type GameInfo = {
    characterNames: string[]
    actionCount: number
    maxChars?: number // only for onModelContext hook
    memoryLength?: number // only for onModelContext hook
}

export type GameActionType =
    | "start"
    | "continue"
    | "do"
    | "say"
    | "story"
    | "see"

export type GameAction = {
    text: string
    type: GameActionType
}

export type StoryCard = {
    id: number
    keys: string[]
    entry: string
    type: string
}

export type World = {
    history: GameAction[]
    storyCards: StoryCard[]
    state: GameState
    info: GameInfo
}

export type ScriptResponse = {
    text: string
    stop?: boolean
}

export interface Script {
    onInput(text: string, world: World): ScriptResponse

    onContext(text: string, world: World): ScriptResponse

    onOutput(text: string, world: World): ScriptResponse
}
