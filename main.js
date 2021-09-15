var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.png',
        onSale: true,
        price: 18945.55,
        inventory: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        url: 'https://www.google.com',
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green.png',
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue.png',
            }
        ],
        sizes: ["sm", "md", "lg", "xl"],
        cart: 0,
    },
    methods: {
        //Formas de declarar un metodo
        addToCart(){
            this.cart += 1
        },
        removeFromCart: function(){
            if(this.cart >= 1){
                this.cart -= 1
            }
        },
        updateProductImage: function(variantImage){
            this.image = variantImage
        }
    },
})