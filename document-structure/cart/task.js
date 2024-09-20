const cartArray = [];
const cart = document.querySelector('.cart');
updateCart();

function updateCart() {
  const cartProducts = cart.querySelector('.cart__products');
  cartProducts.innerHTML = '';
  if (cartArray.length > 0) {
    cart.style.display = 'block';
    cartArray.forEach(item => {
      const element = document.createElement('div');
      element.className = 'cart__product';
      element.setAttribute('data-id', item.id);
      element.innerHTML = `
      <img class="cart__product-image" src="${item.imageSrc}">
      <div class="cart__product-count">${item.quantity}</div>
      <a class="cart__remove" href="#" style="display: inline; font-size: 40px; text-decoration: none; color: red;">&times;</a>
      `;
      element.querySelector('.cart__remove').onclick = () => {
        cartArray.splice(cartArray.findIndex(elem => elem.id === item.id), 1);
        updateCart();
        return false;
      };
      cartProducts.appendChild(element);

    });
  }
  else {
    cart.style.display = 'none';
  }
}

class Product {
  constructor(product) {
    this.id = product.getAttribute('data-id');
    this.imageSrc = product.querySelector('.product__image').getAttribute('src');
    this.quantity = product.querySelector('.product__quantity-value');
    product.querySelector('.product__quantity-control_inc').onclick = this.increaseQuantity.bind(this);
    product.querySelector('.product__quantity-control_dec').onclick = this.decreaseQuantity.bind(this);
    product.querySelector('.product__add').onclick = this.addToCart.bind(this);
  }

  increaseQuantity(event) {
    this.quantity.innerText = (Number.parseInt(this.quantity.innerText) + 1).toString();
  }

  decreaseQuantity(event) {
    if (Number.parseInt(this.quantity.innerText) > 1) {
      this.quantity.innerText = (Number.parseInt(this.quantity.innerText) - 1).toString();
    }
  }

  addToCart() {
    const inCart = cartArray.find(item => item.id === this.id);
    if (inCart) {
      inCart.quantity += Number.parseInt(this.quantity.innerText);
    }
    else {
      cartArray.push({ id: this.id, imageSrc: this.imageSrc, quantity: Number.parseInt(this.quantity.innerText) });
    }
    updateCart();
  }
}

document.querySelectorAll('.product').forEach(item => new Product(item));
