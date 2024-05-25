const products = [
    {
        id: 1,
        name: "Product 1",
        image: "https://via.placeholder.com/150",
        details: ["Detail 1", "Detail 2", "Detail 3"]
    },
    {
        id: 2,
        name: "Product 2",
        image: "https://via.placeholder.com/150",
        details: ["Detail A", "Detail B", "Detail C"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect1 = document.getElementById('product1');
    const productSelect2 = document.getElementById('product2');

    products.forEach(product => {
        const option1 = document.createElement('option');
        option1.value = product.id;
        option1.textContent = product.name;
        productSelect1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = product.id;
        option2.textContent = product.name;
        productSelect2.appendChild(option2);
    });
});

function loadProductDetails(productNumber) {
    const productId = document.getElementById(`product${productNumber}`).value;
    if (productId) {
        const product = products.find(p => p.id == productId);
        document.getElementById(`product-image-${productNumber}`).src = product.image;
        document.getElementById(`product-name-${productNumber}`).textContent = product.name;
        const detailList = document.getElementById(`product-detail-list-${productNumber}`);
        detailList.innerHTML = '';
        product.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            detailList.appendChild(li);
        });
    } else {
        // Clear details if no product selected
        document.getElementById(`product-image-${productNumber}`).src = '';
        document.getElementById(`product-name-${productNumber}`).textContent = 'Product Name';
        document.getElementById(`product-detail-list-${productNumber}`).innerHTML = '';
    }
}