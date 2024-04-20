document.addEventListener('DOMContentLoaded', function() {
    const purchaseButton = document.querySelector('.purchase-button');

    purchaseButton.addEventListener('click', function() {
        purchaseButton.textContent = "Purchased!";
    });
});
