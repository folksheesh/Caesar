document.addEventListener('DOMContentLoaded', () => {
    // Generate product listings dynamically
    const productList = document.getElementById('product-list');

    // Ensure productList exists
    if (productList) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.dataset.id = product.id;
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <a class="btn-view">View Details</a>
            `;
            productList.appendChild(productDiv);
        });

        // Handle click event on view details buttons
        const viewButtons = document.querySelectorAll('.view-details');
        viewButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.closest('.product').dataset.id;
                window.location.href = `product.html?id=${productId}`;
            });
        });
    }

    // Display product details on product.html
    if (window.location.pathname.endsWith('product.html')) {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        if (productId) {
            const product = products.find(p => p.id == productId);
            if (product) {
                const productDetails = document.getElementById('product-details');
                if (productDetails) {
                    productDetails.innerHTML = `
                        <h2>${product.name}</h2>
                        <p>${product.details}</p>
                        <a href="home.html">Back to Home</a>
                    `;
                }
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default action of the link

            // Remove 'active' class from all links
            navbarLinks.forEach(navLink => navLink.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Store active link in localStorage (optional)
            localStorage.setItem('activeLink', this.href);
        });

        // Check and set active link on page load
        if (link.classList.contains('active')) {
            link.classList.remove('active');
        }
    });
});

