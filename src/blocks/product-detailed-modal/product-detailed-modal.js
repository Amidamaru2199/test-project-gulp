project.productDetailedModal = {
    productId: null,
    quantity: 1,
    price: 0,
    modal: null,
    summEl: null,
    counter: null,

    setupData({ id, title, description, poster, price }) {
        this.modal = document.querySelector('.open .product-detail-popup');
        this.summEl = this.modal.querySelector('._summ');
        const titleEl = this.modal.querySelector('._title');
        const descriptionEl = this.modal.querySelector('._description');
        const posterEl = this.modal.querySelector('._poster');
        const posterElAlt = this.modal.querySelector('._poster-alt');
        const counterValue = this.modal.querySelector('._value');

        const existingProductInCart = project.cartModule.items.find((item) => {
            return item.id === id;
        });

        this.productId = id;
        this.quantity = existingProductInCart ? existingProductInCart.quantity : 0;
        this.price = price;
        titleEl.innerHTML = title;
        descriptionEl.innerHTML = description;
        posterEl.src = poster;
        posterElAlt.srcset = poster;
        counterValue.innerHTML = this.quantity;
        this.counter = counterValue;
        this.setSumm(this.quantity * this.price);
        this.checkIsInCart();
    },

    setSumm(val) {
        this.summEl.innerHTML = Number(val).toLocaleString();
    },

    checkIsInCart() {
        const isInCart = !!this.quantity;

        if (isInCart) {
            this.modal.classList.add('product-detail-popup_is-in-cart');
        } else {
            this.modal.classList.remove('product-detail-popup_is-in-cart');
        }
    },

    open() {
        project.popup.open('_product-detailed-modal');
    },

    increaseQuantity() {
        this.quantity++;
        this.setSumm(this.price * this.quantity);
        this.counter.innerHTML = this.quantity;
        project.cartModule.updateItem({id: this.productId, quantity: this.quantity});
    },
    
    decreaseQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
            this.setSumm(this.price * this.quantity);
            this.counter.innerHTML = this.quantity;
            project.cartModule.updateItem({id: this.productId, quantity: this.quantity});
        } else {
            project.cart.deleteCard(this.productId);
            this.quantity = 0;
            this.checkIsInCart();
        }
    },

    addToCart() {
        const productId = this.productId;
        const title = this.modal.querySelector('._title').innerHTML;
        const poster = this.modal.querySelector('._poster').src;
        const quantity = this.quantity || 1;
        const summ = this.price * this.quantity;

        const item = {
            id: productId,
            title,
            poster,
            quantity,
            price: this.price,
            summ,
        };

        project.cartModule.updateItem(item);
        this.quantity = quantity;
        this.checkIsInCart();
        this.setSumm(this.quantity * this.price);
        this.counter.innerHTML = this.quantity;
    }
}
