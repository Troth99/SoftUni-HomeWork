function solve() {

   const textAreaEl = document.querySelector('textarea');
   const checkoutBtn = document.querySelector('.checkout');

   const cart = {};

   const buttonAdd = document.querySelectorAll('.add-product')

   buttonAdd.forEach(button => {
      button.addEventListener('click', (event) => {

         const product = event.target.parentElement.parentElement;
         const productPrice = Number(product.querySelector('.product-line-price').textContent)
         const productName = product.querySelector('.product-title').textContent

         if (!cart[productName]) {
            cart[productName] = 0
         }

         cart[productName] += productPrice;

         textAreaEl.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      })

   });

   checkoutBtn.addEventListener(`click`, checkout);

   function checkout() {
      const totalPrice = Object.values(cart).reduce((acc, sum) => acc + sum, 0);
      const lists = Object.keys(cart)
      textAreaEl.value += `You bought ${lists.join(', ')} for ${totalPrice.toFixed(2)}.`

      const allButtons = document.querySelectorAll('button');

      allButtons.forEach(button => {
         button.disabled = true
      })

   }

}