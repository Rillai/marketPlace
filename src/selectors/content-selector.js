export const productsSelector = (state, sortMode) => {
    let end = state.content.currentPage * state.content.pageSize
    let start = end - state.content.pageSize
    if (sortMode != null) {
        const sort = () => {
            if (sortMode == 'price' || sortMode == 'rating') {
                return (a, b) => b[sortMode] - a[sortMode]
            } else {
                return (a, b) => a.name.localeCompare(b.name);
            }
        }
        let products = state.content.products.sort(sort())
        return products.slice(start, end)
    } else {
        return state.content.products.slice(start, end)
    }
}
export const pagesCountSelector = (state) => {
    let pagesCount = Math.ceil(state.content.products.length / state.content.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return pages
}