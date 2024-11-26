
const products = [
    
        { id: 1, name: 'Office Chair', category: 'Furniture', price: 10999, rating: 4.3, image: 'assets/2.jfif' },
        { id: 2, name: 'Study Desk', category: 'Furniture', price: 7999, rating: 3.1, image: 'assets/3.jpg' },
        { id: 3, name: 'Resistance Bands', category: 'Fitness', price: 599, rating: 2.4, image: 'assets/4.jfif' },
        { id: 4, name: 'Dumbbell Set', category: 'Fitness', price: 2599, rating: 4.6, image: 'assets/5.jfif' },
        { id: 5, name: 'Bluetooth Speaker', category: 'Gadgets', price: 3499, rating: 3.2, image: 'assets/6.jfif' },
        { id: 6, name: 'Smart Home Hub', category: 'Gadgets', price: 5999, rating: 2.7, image: 'assets/7.jfif' },
        { id: 7, name: 'Table Lamp', category: 'Decor', price: 999, rating: 4.5, image: 'assets/8.jpg' },
        { id: 8, name: 'Photo Frames', category: 'Decor', price: 699, rating: 1.9, image: 'assets/9.jfif' },
        { id: 9, name: 'Chef’s Knife', category: 'Kitchen', price: 1499, rating: 3.6, image: 'assets/10.jfif' },
        { id: 10, name: 'Blender', category: 'Kitchen', price: 2999, rating: 4.8, image: 'assets/11.jfif' },
        { id: 11, name: 'Running Shoes', category: 'Footwear', price: 4599, rating: 3.3, image: 'assets/12.jfif' },
        { id: 12, name: 'Sandals', category: 'Footwear', price: 1999, rating: 4.0, image: 'assets/13.jfif' },
        { id: 13, name: 'Trekking Backpack', category: 'Travel', price: 5999, rating: 2.5, image: 'assets/14.jfif' },
        { id: 14, name: 'Suitcase', category: 'Travel', price: 8999, rating: 4.7, image: 'assets/15.jfif' },
        { id: 15, name: 'Toaster', category: 'Appliances', price: 1999, rating: 4.0, image: 'assets/16.jfif' },
        { id: 16, name: 'Air Purifier', category: 'Appliances', price: 9999, rating: 5.0, image: 'assets/17.jfif' },
        { id: 17, name: 'Essential Oils', category: 'Wellness', price: 799, rating: 4.1, image: 'assets/18.jfif' },
        { id: 18, name: 'Meditation Cushion', category: 'Wellness', price: 1299, rating: 2.3, image: 'assets/19.jfif' },
        { id: 19, name: 'Photography Lens', category: 'Photography', price: 29999, rating: 3.7, image: 'assets/20.jfif' },
        { id: 20, name: 'Tripod Stand', category: 'Photography', price: 3499, rating: 4.4, image: 'assets/21.jfif' },
    ];
    

document.getElementById('categoryFilter').addEventListener('change', filterProducts);
document.getElementById('priceFilter').addEventListener('change', filterProducts);
document.getElementById('ratingFilter').addEventListener('change', filterProducts);

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const priceOrder = document.getElementById('priceFilter').value;
    const minRating = parseFloat(document.getElementById('ratingFilter').value);

    let filteredProducts = products;

  
    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (!isNaN(minRating)) {
        filteredProducts = filteredProducts.filter(product => product.rating >= minRating);
    }

    if (priceOrder) {
        filteredProducts = filteredProducts.sort((a, b) =>
            priceOrder === 'asc' ? a.price - b.price : b.price - a.price
        );
    }

    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const starRating = generateStars(product.rating);

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price.toFixed(2)}</p>
            <div class="rating">${starRating}</div>
        `;

        productList.appendChild(productCard);
    });
}

function generateStars(rating) {
    const fullStar = '<span class="star full">★</span>';
    const emptyStar = '<span class="star empty">☆</span>';
    const maxStars = 5;

    let starHtml = '';
    for (let i = 1; i <= maxStars; i++) {
        starHtml += i <= Math.floor(rating) ? fullStar : emptyStar;
    }
    return starHtml;
}


displayProducts(products);
