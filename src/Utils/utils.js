export const packagesComparer = (a, b) => {
    if (!a.description)
        return -1
    else if (!b.description)
        return 1
    return (a.description.length - b.description.length)
}