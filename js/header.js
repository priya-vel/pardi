

const headerInit = () => {
    const header = document.querySelector("#header")
    let cart = localStorage.getItem("cart")
    let cartCount = 0;
    if (!!cart) {
        let cartItems = JSON.parse(cart).cart;
        const count = cartItems.map(el => el.count)
        if (!!count.length) {
            cartCount = count.reduce((x, y) => x + y)
        }
    }
    header.innerHTML = `
    <style>
    .header-class {
        display: flex;
        justify-content: space-between;
    }
    </style>
<div class="container mx-auto flex p-5  header-class" style="align-items: center;">
    <a href="./index.html" class="flex title-font font-medium items-center text-gray-900  md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <a href="./index.html"><span class="ml-3 text-xl">FRIENDS READYMADES</span></a>
    </a>
    <a href="./cart.html">
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>${cartCount}
        </button>
    </a>
</div>`;
}




headerInit()