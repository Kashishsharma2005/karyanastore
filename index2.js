document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy');
    const plusButtons = document.querySelectorAll('.plus');
    const zeroButtons = document.querySelectorAll('.zero');
    const minusButtons = document.querySelectorAll('.minus');

    plusButtons.forEach((plusButton, index) => {
        plusButton.addEventListener('click', function () {
            let currentValue = parseInt(zeroButtons[index].textContent);
            zeroButtons[index].textContent = currentValue + 1;
        });
    });

    minusButtons.forEach((minusButton, index) => {
        minusButton.addEventListener('click', function () {
            let currentValue = parseInt(zeroButtons[index].textContent);
            if (currentValue > 0) {
                zeroButtons[index].textContent = currentValue - 1;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy');

    buyButtons.forEach(function(buyButton) {
        buyButton.addEventListener('click', function() {
            // Replace 'destination.html' with the path to your desired HTML page
            window.location.href = 'index3.html';
        });
    });
});

