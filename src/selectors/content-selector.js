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
//Сортировка продуктов
export const productsSelector = createSelector(products, (props) => {
    if (props.sortMode) {
        const sort = () => {
            if (props.sortMode === 'name') {
                return (a, b) => a.name.localeCompare(b.name);
            } else {
                return (a, b) => b[props.sortMode] - a[props.sortMode]
            }
        }
        if (props.reverse === true) {
            props.products.sort(sort()).reverse()
        }
        else {
            props.products.sort(sort())
        }
    }
    return props.products.slice(props.start, props.end)
})

export const pagesCountSelector = (state) => {
    const pagesCount = Math.ceil(state.content.products.length / state.content.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return pages
}
