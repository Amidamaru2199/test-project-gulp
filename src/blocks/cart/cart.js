project.cart = {
    addElementsCart(items) {
        const cartItemsContainer = document.querySelector('.cart__items');
        cartItemsContainer.innerHTML = '';

        items.forEach(item => {
            const cartItem = document.createElement('div');
            const cartItemSumm = Number(item.price * item.quantity).toLocaleString();
            cartItem.innerHTML = `
                <img src="svg/close.svg" onclick="project.cart.deleteCard(${item.id})" alt="${item.title}" class="cart__item-del">
                <img src="${item.poster}" alt="${item.title}" class="cart__item-poster">
                <span class="cart__item-title">${item.title}</span>
                <span class="cart__item-quantity">Количество: ${item.quantity}</span>
                <span class="cart__item-summ">Сумма: ${cartItemSumm}</span>
            `;
            cartItem.classList.add('cart__item')
            cartItemsContainer.appendChild(cartItem);
        });
    },

    clear() {
        const cartItemsContainer = document.querySelector('.cart__items');
        cartItemsContainer.innerHTML = '';
    },

    deleteCard(id) {
        project.cartModule.deleteItem(id);
        this.addElementsCart(project.cartModule.items)
    }
};
