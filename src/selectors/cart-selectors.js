export const itemsCountSelector = (state) => {
    return state.cart.itemsInCart.reduce((s, i) => s = s + i.count, 0)
}
export const itemsInCartPriceSelector = (state) => {
    return Math.floor(state.cart.itemsInCart.reduce((s, i) => s = s + (i.price * i.count), 0) * 100) / 100
}