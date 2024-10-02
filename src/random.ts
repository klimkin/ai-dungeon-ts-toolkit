export function sample<T>(arrayLikeObject: T[]): T {
    const result =
        arrayLikeObject[Math.floor(Math.random() * arrayLikeObject.length)]
    if (result === undefined) {
        throw new Error("Array is empty")
    }
    return result
}
