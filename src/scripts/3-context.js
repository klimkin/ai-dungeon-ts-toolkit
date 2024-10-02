/* global library, text, history, storyCards, state, info, console */

const modifier = (text) => {
    state.hook = Object.assign(new library.MyGame(), state.hook)
    const world = {
        history: history,
        storyCards: storyCards,
        state: state,
        info: info,
    }
    const result = state.hook.onContext(text, world)
    console.log(result)
    return result
}

// !preserve
modifier(text)
