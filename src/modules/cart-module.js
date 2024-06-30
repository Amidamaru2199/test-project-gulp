project.cartModule = {
    items: [],
    
    init() {
        this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
        project.cart.addElementsCart(this.items);
    },

    updateItem(item) {

        const existingItem = this.items.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity = item.quantity;
        } else {
            this.items.push(item);
        }
        this.saveInLocalStorageCart();
        project.cart.addElementsCart(this.items);
    },

    saveInLocalStorageCart() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    },

    clearCart() {
        this.items = [];
        localStorage.removeItem('cartItems');
        project.cart.clear();
    },

    deleteItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveInLocalStorageCart();
    }
};
