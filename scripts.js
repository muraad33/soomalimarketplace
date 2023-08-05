// Sample product data
const products = [
    {
      title: 'Product 1',
      price: 20,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'product_image1.jpg',
    },
    {
      title: 'Product 2',
      price: 25,
      description: 'Vestibulum eu euismod libero. Integer pellentesque nunc quis tortor venenatis, ac bibendum magna ullamcorper.',
      image: 'product_image2.jpg',
    },
    // Add more product data as needed
  ];
  
  // Function to create product listings
  function createProductListing(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
  
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.title;
    productDiv.appendChild(image);
  
    const title = document.createElement('h2');
    title.textContent = product.title;
    productDiv.appendChild(title);
  
    const price = document.createElement('p');
    price.textContent = `Price: $${product.price}`;
    productDiv.appendChild(price);
  
    const description = document.createElement('p');
    description.textContent = product.description;
    productDiv.appendChild(description);
  
    return productDiv;
  }
  
  // Function to display product listings on the webpage
  function displayProductListings() {
    const productContainer = document.getElementById('product-container');
    products.forEach((product) => {
      const productListing = createProductListing(product);
      productContainer.appendChild(productListing);
    });
  }
  
  // Call the function to display product listings on page load
  displayProductListings();
  