const items = [{
        id: 1,
        name: "shoe 1",
        description: `Bontox Stylish party Wear Formal Shoe For Men`,
        price: 1500,
        ratings: 3,
        brand: "addidas",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png"
    },
    {
        id: 2,
        name: "shoe 2",
        description: `first 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        price: 1500,
        ratings: 4,
        brand: "addidas",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyaoi54sDTV5sB3YXA2SaZXh-LY2uuJnIfns33iEXfuYhiQvMgxBvs_oez2ecS-HhhwM&usqp=CAU"
    },
    {
        id: 3,
        name: "shoe 3",
        description: `first 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        price: 1500,
        ratings: 3,
        brand: "addidas",
        image: "https://cdn.vox-cdn.com/thumbor/S4ka2uwWyJ9rHJFDwVa8BQCqMHA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg"
    },
    {
        id: 4,
        name: "shoe 4",
        description: `first 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        price: 1500,
        ratings: 5,
        brand: "addidas",
        image: "https://img.freepik.com/free-photo/colorful-sport-shoes-green_151013-4554.jpg?size=626&ext=jpg"
    },
    {
        id: 5,
        name: "shoe 5",
        price: 1500,
        ratings: 5,
        description: `first 5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        brand: "addidas",
        image: "https://i.pinimg.com/474x/11/d0/0d/11d00d893f586065366332b4165a08a4.jpg"
    },
    {
        id: 6,
        name: "shoe 6",
        price: 1500,
        ratings: 4,
        description: `first 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        brand: "addidas",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png"
    },
    {
        id: 7,
        name: "shoe 7",
        price: 1500,
        ratings: 4,
        description: `first 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        brand: "addidas",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png"
    },
    {
        id: 8,
        name: "shoe 8",
        price: 1500,
        ratings: 4,
        description: `first 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        brand: "addidas",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png"
    },
    {
        id: 9,
        name: "shoe 9",
        price: 1500,
        ratings: 4,
        brand: "addidas",
        description: `first 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png"
    },
    {
        id: 10,
        name: "shoe 10",
        price: 1500,
        ratings: 4,
        description: `first 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        brand: "addidas",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/036c7a12-5c51-48c5-9423-a1b695710eba/custom-nike-air-zoom-pegasus-38-by-you.png"
    },
    {
        id: 11,
        name: "shoe 11",
        price: 1500,
        brand: "addidas",
        ratings: 4,
        description: `first 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png"
    },
    {
        id: 12,
        name: "shoe 12",
        price: 1500,
        brand: "addidas",
        ratings: 4,
        description: `first 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        image: "https://iili.io/52iws2.md.jpg"
    },
    {
        id: 13,
        name: "shoe 13",
        price: 1500,
        brand: "addidas",
        ratings: 4,
        description: `first 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus impedit, repudiandae aliquid quia, harum labore quaerat molestiae iste est praesentium, qui assumenda voluptatibus et illum commodi recusandae nihil voluptate rem nobis quibusdam cumque eius nulla. Dicta quos ab cumque autem.`,
        image: "https://i2.paste.pics/1a5868929e4173793920198cb11908b3.png"
    },
]
const formateMoney = (val) => Number(val).toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
            })

const PhoneNumber = "+917358359381"