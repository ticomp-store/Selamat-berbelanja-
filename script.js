/* =========================================
   NOMOR WHATSAPP TI COMP
   GANTI DENGAN NOMOR WHATSAPP KAMU
========================================= */

const whatsappNumber = "6281234567890";


/* =========================================
   DATA PRODUK LAPTOP
========================================= */

const products = [

    {
        brand: "ASUS",
        name: "ASUS VivoBook",
        spec: "Intel Core i5 • RAM 8GB • SSD 512GB",
        price: "Rp 5.999.000",
        stock: "Stok tersedia",
        image: "products/asus.jpg"
    },

    {
        brand: "Lenovo",
        name: "LENOVO X14",
        spec: "Intel Core i7-1065G7 • RAM 8GB • SSD 512GB",
        price: "Rp 6.200.000",
        stock: "Stok tersedia",
        image: "Lenovo x14"
    },

    {
        brand: "Lenovo",
        name: "LENOVO YOGA 11E TOUCH",
        spec: "Intel Core i5-8 • RAM 8GB • SSD 256GB",
        price: "Rp 4.450.000",
        stock: "Stok tersedia",
        image: "yoga 11E"
    },

    {
        brand: "Lenovo",
        name: "LENOVO X13 TOUCH",
        spec: "Intel Core i5-10 • RAM 16GB • SSD 256GB",
        price: "Rp 5.850.000",
        stock: "Stok tersedia",
        image: "Lenovo x13"
    },

    {
        brand: "Acer",
        name: "Acer Aspire",
        spec: "Intel Core i3 • RAM 8GB • SSD 512GB",
        price: "Rp 4.799.000",
        stock: "Stok tersedia",
        image: "products/acer.jpg"
    },

    {
        brand: "HP",
        name: "HP 14",
        spec: "Intel Core i5 • RAM 8GB • SSD 512GB",
        price: "Rp 5.899.000",
        stock: "Stok tersedia",
        image: "products/hp.jpg"
    }

];


let currentBrand = "Semua";


/* =========================================
   MENAMPILKAN PRODUK
========================================= */

function displayProducts() {

    const grid = document.getElementById("productGrid");

    const searchInput = document.getElementById("search");

    const search = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";


    const filteredProducts = products.filter(product => {

        const brandMatch =
            currentBrand === "Semua" ||
            product.brand === currentBrand;


        const searchMatch =
            product.name.toLowerCase().includes(search) ||
            product.brand.toLowerCase().includes(search) ||
            product.spec.toLowerCase().includes(search);


        return brandMatch && searchMatch;

    });


    grid.innerHTML = "";


    /* Jika produk tidak ditemukan */

    if (filteredProducts.length === 0) {

        grid.innerHTML = `

            <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 60px 20px;
                color: #7a8698;
            ">

                <h3>
                    Laptop tidak ditemukan
                </h3>

                <p style="margin-top:8px;">
                    Coba cari nama laptop atau merek lain.
                </p>

            </div>

        `;

        return;
    }


    /* Membuat kartu produk */

    filteredProducts.forEach(product => {

        const message =
            `Halo TI COMP, saya tertarik dengan ${product.name}. Apakah masih tersedia?`;


        const whatsappLink =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        grid.innerHTML += `

            <article class="product">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="this.src='logo.png'"
                    >

                </div>


                <div class="product-info">

                    <div class="product-brand">
                        ${product.brand}
                    </div>


                    <div class="product-name">
                        ${product.name}
                    </div>


                    <div class="product-spec">
                        ${product.spec}
                    </div>


                    <div class="product-price">
                        ${product.price}
                    </div>


                    <div class="product-stock">
                        ● ${product.stock}
                    </div>


                    <a
                        href="${whatsappLink}"
                        target="_blank"
                        class="whatsapp-btn"
                    >

                        <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                        >

                            <path d="
                            M12.04 2
                            C6.54 2 2.07 6.47 2.07 11.97
                            c0 1.76.46 3.48 1.34 5.01
                            L2 22l5.17-1.36
                            a9.94 9.94 0 0 0 4.87 1.27
                            h.01
                            c5.49 0 9.96-4.47 9.96-9.97
                            C22.01 6.47 17.54 2 12.04 2zm0 18.1
                            c-1.53 0-3.03-.41-4.33-1.18
                            l-.31-.18-3.07.81
                            .82-2.99-.2-.31
                            a8.1 8.1 0 0 1-1.25-4.28
                            c0-4.47 3.64-8.11 8.12-8.11
                            4.47 0 8.11 3.64 8.11 8.11
                            0 4.48-3.64 8.13-8.11 8.13zm4.45-6.08
                            c-.24-.12-1.43-.7-1.65-.78
                            -.22-.08-.38-.12-.54.12
                            -.16.24-.62.78-.76.94
                            -.14.16-.28.18-.52.06
                            -.24-.12-1.02-.38-1.94-1.2
                            -.72-.64-1.2-1.43-1.34-1.67
                            -.14-.24-.02-.37.1-.49
                            .11-.11.24-.28.36-.42
                            .12-.14.16-.24.24-.4
                            .08-.16.04-.3-.02-.42
                            -.06-.12-.54-1.3-.74-1.78
                            -.2-.48-.4-.41-.54-.42
                            h-.46c-.16 0-.42.06-.64.3
                            -.22.24-.84.82-.84 2
                            s.86 2.32.98 2.48
                            c.12.16 1.69 2.58 4.09 3.62
                            .57.25 1.02.4 1.37.51
                            .58.18 1.11.15 1.53.09
                            .47-.07 1.43-.58 1.63-1.14
                            .2-.56.2-1.04.14-1.14
                            -.06-.1-.22-.16-.46-.28z
                            "/>

                        </svg>

                        Tanya via WhatsApp

                    </a>

                </div>

            </article>

        `;

    });

}


/* =========================================
   PENCARIAN
========================================= */

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener(
        "input",
        displayProducts
    );

}


/* =========================================
   FILTER MEREK
========================================= */

function filterBrand(brand, button) {

    currentBrand = brand;


    document
        .querySelectorAll(".filter")
        .forEach(item => {

            item.classList.remove("active");

        });


    button.classList.add("active");


    displayProducts();

}


/* =========================================
   POSTER SLIDER
========================================= */

let currentPoster = 0;


const posters =
    document.querySelectorAll(".poster");


const posterDots =
    document.querySelectorAll(".poster-dot");


function showPoster(index) {

    if (posters.length === 0) {
        return;
    }


    if (index >= posters.length) {

        currentPoster = 0;

    }

    else if (index < 0) {

        currentPoster = posters.length - 1;

    }

    else {

        currentPoster = index;

    }


    posters.forEach(poster => {

        poster.classList.remove("active");

    });


    posterDots.forEach(dot => {

        dot.classList.remove("active");

    });


    posters[currentPoster]
        .classList.add("active");


    if (posterDots[currentPoster]) {

        posterDots[currentPoster]
            .classList.add("active");

    }

}


function changePoster(direction) {

    showPoster(
        currentPoster + direction
    );

}


/* =========================================
   OTOMATIS GANTI POSTER SETIAP 4 DETIK
========================================= */

setInterval(() => {

    changePoster(1);

}, 4000);


/* =========================================
   JALANKAN KATALOG
========================================= */

displayProducts();
