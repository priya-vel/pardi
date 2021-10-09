const initItems = () => {
    const productList = document.querySelector("#productList");
    items.forEach((el) => {
        let item = itemCard(el)
        productList.appendChild(itemCard(el))
    })
}

const itemCard = (item) => {
    const session = document.createElement("div");
    session.classList = "lg:w-1/4 md:w-1/2 p-4 w-full"
    let value = `
              <a href="./detail.html?id=${item.id}" class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" 
                src="${item.image}"">
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${item.brand}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">${item.name}</h2>
                <p class="mt-1">$${item.price}</p>
              </div>
            `
    session.innerHTML = value;
    return session;
}

initItems()