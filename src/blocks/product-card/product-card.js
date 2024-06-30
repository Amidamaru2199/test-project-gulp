project.productCard = {
    openDetailedPopup(instace) {
        const card = instace.closest("._product-card");
        const id = Number(card.dataset.id);
        const title = card.dataset.title;
        const description = card.dataset.description;
        const poster = card.dataset.poster;
        const price = Number(card.dataset.price);

        project.productDetailedModal.open();
        project.productDetailedModal.setupData({id, title, description, poster, price})
    }
}
