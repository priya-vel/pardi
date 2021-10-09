let grandTotal = 0;

const cartInit = () => {
    const cartItemList = document.querySelector("#cartItemList");
    let data = getCartData()
    const totalE = document.querySelector("#total");
    if (!!data.length) {
        data.forEach(el => {
            cartItemList.appendChild(cartItem(el))
        })
        let total = data.map(el => el.count * el.data.price).reduce((x, y) => x + y);
        grandTotal = Number(total).toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
            })
        totalE.textContent = grandTotal;
    } else {
        cartItemList.appendChild(noCartData())
        document.querySelector("#totalPart").style.display = "none";
    }
}

const noCartData = () => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="text-center">
        <h2 class="title-font font-medium text-lg text-gray-900 mb-5">
       Their is no item in your cart 
        </h2>
        <a href="/">
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Continue shopping
      </button>
        </a> 
        </div>
    `
    return div;
}

const cartItem = (item) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div
    class="py-2 h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
    <a href="./detail.html?id=${item.id}">
    <img alt="team"
        class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
        src="${item.data.image}">
        </a>
    <div class="flex-grow sm:pl-8">
        <h2 class="title-font font-medium text-lg text-gray-900">${item.data.name}</h2>
        <h3 class="text-gray-500 mb-3">${item.data.brand}</h3>
        <p class="mb-2">Count: ${String(item.data.description).substring(0,90)}</p>
        <p class="mb-2">
        Price: ${(item.data.price).toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
            })} X ${item.count}
        </p>
        <div>
        <button onclick="removeCount(${item.id})" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">-</button>
        <span class="px-3">${item.count}</span>
        <button onclick="addCount(${item.id})" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">+</button>
        </div>
    </div>
</div> 
    `
    return div;
}

const getCartData = () => {
    let cart = localStorage.getItem("cart");
    let dataList = [];
    if (!!cart) {
        let cartItem = JSON.parse(cart).cart;
        let cartItems = cartItem.map((el) => {
            let data = items.find((e) => e.id == el.id);
            el["data"] = data;
            el["total"] = (data.price * el.count).toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
            });
            return el;
        })
        dataList = cartItems;
    }
    return dataList;
}

const addCount = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")).cart;
    let newCart = cart.map(el => {
        if (el.id == id) {
            el.count += 1;
        }
        return el
    });
    localStorage.setItem("cart", JSON.stringify({
        cart: newCart
    }))
    window.location.reload();
}

const removeCount = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")).cart;
    let newCart = cart.map(el => {
        if (el.id == id) {
            el.count -= 1;
        }
        return el
    }).filter((el) => !!el.count);
    localStorage.setItem("cart", JSON.stringify({
        cart: newCart
    }))
    window.location.reload();
}

const checkout = () => {
    const data = JSON.parse(localStorage.getItem("cart")).cart

    let number = PhoneNumber;
    let message = `Hi Friends readymade, i would like to by the following product,
`;
console.log(data);
    if (!!data.length) {
        let newData = data.map((el) => {
            let data = items.find((e) => e.id == el.id);
            el["data"] = data;
            el["total"] = (data.price * el.count).toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
            });
            return el;
        })
        newData.forEach(el => {
            message += `
name: ${el.data.name}
description: ${el.data.description}
count: ${el.count}
Total: ${el.total}
link: ${window.location.host}/detail?id=${el.id}
`;
        })
        message += `
Grand Total: ${grandTotal}
`
    }
    let str = "https://api.whatsapp.com/send?phone=" + number + "&text=%20" + encodeURI(message)
    console.log(str);
    window.open(str);
}

cartInit();