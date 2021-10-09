let currentItem = {};

const ratingStar = (rating) => {
    let empty = 5 - rating;
    let ratingStar = ``;
    new Array(rating).fill(0).forEach((el) => {
        ratingStar += `<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>`;
    });
    new Array(empty).fill(0).forEach((el) => {
        ratingStar += `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>`;
    });
    return ratingStar;
}

const initDetail = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    let data = items.find((el) => el.id == params.id)
    currentItem = data;
    const detailWrapper = document.querySelector("#detailWrapper");

    detailWrapper.innerHTML = `
    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="${data.image}">
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">${data.brand}</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${data.name}</h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  ${ratingStar(data.ratings)}
                  <span class="text-gray-600 ml-3">${data.ratings} Reviews</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p class="leading-relaxed">
              ${data.description}
              </p>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">${(data.price).toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                  })}</span>
                <button onclick="buyNow()" class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
                <button onclick="addToCart(${data.id})" class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;


}


initDetail()

const addToCart = (id) => {
    let cart = localStorage.getItem("cart")
    if (!!cart) {
        let data = JSON.parse(cart).cart;
        if (!!data.find(el => el.id == id)) {
            data = data.map((el) => {
                if (el.id == id) {
                    el.count += 1
                }
                return el
            })
        } else {
            let item = {
                id: id,
                count: 1
            }
            data.push(item);
        }
        localStorage.setItem("cart", JSON.stringify({
            cart: data
        }))
    } else {
        let item = {
            id: id,
            count: 1
        }
        localStorage.setItem("cart", JSON.stringify({
            cart: [item]
        }))
    }
    window.scrollBy({
        top: -5000
    });
    alert("item added to cart");
    window.location.reload()
}


const buyNow = () => {
    let number = PhoneNumber;
    let message = `Hi Friends readymade, i would like to by the following product,
`;

    message += `
name: ${currentItem.name}
description: ${currentItem.description}
Total: ${formateMoney(currentItem.price)}
link: ${window.location.host}/detail?id=${currentItem.id}
`;
    message += `
Grand Total: ${formateMoney(currentItem.price)}

Thank you for choosing our shop
`
    let str = "https://api.whatsapp.com/send?phone=" + number + "&text=%20" + encodeURI(message)
    console.log(str);
    window.open(str);
}