import { createSelector } from "reselect"

export const products = (state, sortMode, reverse) => {
    return {
        products: state.content.products,
        end: state.content.currentPage * state.content.pageSize,
        start: (state.content.currentPage * state.content.pageSize) - state.content.pageSize,
        sortMode: sortMode,
        reverse: reverse
    }
}
export const productsSelector = createSelector(products, (props) => {
    let products = props.products
    if (props.sortMode) {
        const sort = () => {
            if (props.sortMode === 'name') {
                return (a, b) => a.name.localeCompare(b.name);
            } else {
                return (a, b) => b[props.sortMode] - a[props.sortMode]
            }
        }
        if (props.reverse === true) {
            products = products.sort(sort()).reverse()
        }
        else {
            products = products.sort(sort())
        }
    }
    return products.slice(props.start, props.end)
})



export const pagesCountSelector = (state) => {
    let pagesCount = Math.ceil(state.content.products.length / state.content.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return pages
}