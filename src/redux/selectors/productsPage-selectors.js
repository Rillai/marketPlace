export const productsSelector = (state, sortMode, reverse) => {
    const end = state.productsPage.currentPage * state.productsPage.pageSize
    const start = end - state.productsPage.pageSize
    if (sortMode) {
        const sort = () => {
            if (sortMode === 'name') {
                return (a, b) => a.name.localeCompare(b.name);
            } else {
                return (a, b) => b[sortMode] - a[sortMode]
            }
        }
        if (reverse === true) {
            state.productsPage.products.sort(sort()).reverse()
        }
        else {
            state.productsPage.products.sort(sort())
        }
    }
    return state.productsPage.products.slice(start, end)
}