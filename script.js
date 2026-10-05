/* ==========================================
   NOMOR WHATSAPP TI COMP
   GANTI DENGAN NOMOR WHATSAPP KAMU
========================================== */

const whatsappNumber = "6281234567890";


/* ==========================================
   DATA PRODUK
========================================== */

const products = [

    /* ================= LENOVO ================= */

    {
        brand: "Lenovo",
        name: "Lenovo V14",
        spec: "Laptop Lenovo V14",
        price: "Hubungi kami",
        stock: "Stok tersedia",
        image: "Lenovo v14"
    },

    {
        brand: "Lenovo",
        name: "Lenovo X13",
        spec: "Laptop Lenovo X13",
        price: "Hubungi kami",
        stock: "Stok tersedia",
        image: "Lenovo x13"
    },

    {
        brand: "Lenovo",
        name: "Lenovo Yoga 11E",
        spec: "Touchscreen • Laptop Lenovo",
        price: "Rp 4.450.000",
        stock: "Stok tersedia",
        image: "Yoga 11E"
    },


    /* ================= HP ================= */

    {
        brand: "HP",
        name: "HP 14",
        spec: "Intel Core i5 • RAM 8GB • SSD 512GB",
        price: "Rp 5.899.000",
        stock: "Stok tersedia",
        image: "HP 14.jpg"
    },

    {
        brand: "HP",
        name: "HP ProBook",
        spec: "Intel Core i5 • RAM 8GB • SSD 256GB",
        price: "Hubungi kami",
        stock: "Stok tersedia",
        image: "HP ProBook.jpg"
    }

];


/* ==========================================
   FILTER
========================================== */

let currentBrand = "Semua";


function filterBrand(brand, button) {

    currentBrand = brand;

    document
        .querySelectorAll(".filter")
        .forEach(function(btn) {

            btn.classList.remove("active");

        });

    button.classList.add("active");

    renderProducts();
}


/* ==========================================
   TAMPILKAN PRODUK
========================================== */

function renderProducts() {

    const grid =
        document.getElementById("productGrid");

    const searchInput =
        document.getElementById("search");

    const keyword =
        searchInput.value.toLowerCase().trim();


    const filteredProducts =
        products.filter(function(product) {

            const brandMatch =
                currentBrand === "Semua" ||
                product.brand === currentBrand;


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(keyword)

                ||

                product.brand
                    .toLowerCase()
                    .includes(keyword)

                ||

                product.spec
                    .toLowerCase()
                    .includes(keyword);


            return brandMatch && searchMatch;

        });


    grid.innerHTML = "";


    if (filteredProducts.length === 0) {

        grid.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:50px 20px;
                color:#667085;
            ">

                <h3>
                    Laptop tidak ditemukan
                </h3>

                <p>
                    Coba cari dengan nama atau merek lain.
                </p>

            </div>

        `;

        return;
    }


    filteredProducts.forEach(function(product) {

        const message =
            `Halo TI COMP, saya tertarik dengan ${product.name}. Apakah masih tersedia?`;


        const whatsappLink =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        grid.innerHTML += `

            <article class="product-card">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="this.src='logo.png'"
                    >

                </div>


                <div class="product-info">

                    <span class="product-brand">
                        ${product.brand}
                    </span>


                    <h3>
                        ${product.name}
                    </h3>


                    <p>
                        ${product.spec}
                    </p>


                    <strong class="price">
                        ${product.price}
                    </strong>


                    <small class="stock">
                        ✓ ${product.stock}
                    </small>


                    <a
                        href="${whatsappLink}"
                        target="_blank"
                        class="whatsapp-btn"
                    >
                        Tanya via WhatsApp
                    </a>

                </div>

            </article>

        `;

    });

}


/* ==========================================
   SEARCH
========================================== */

document
    .getElementById("search")
    .addEventListener(
        "input",
        renderProducts
    );


/* ==========================================
   PROMO SLIDER
========================================== */

let currentSlide = 0;

const sliderTrack =
    document.getElementById("sliderTrack");

const dots =
    document.querySelectorAll(".dot");

const totalSlides =
    document.querySelectorAll(".slide").length;


function updateSlider() {

    sliderTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;


    dots.forEach(function(dot, index) {

        dot.classList.toggle(
            "active",
            index === currentSlide
        );

    });

}


function nextSlide() {

    currentSlide++;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateSlider();

}


function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateSlider();

}


function goToSlide(index) {

    currentSlide = index;

    updateSlider();

}


/* ==========================================
   OTOMATIS SLIDE SETIAP 3 DETIK
========================================== */

let autoSlide =
    setInterval(nextSlide, 3000);


/* ==========================================
   SWIPE UNTUK HP
========================================== */

const slider =
    document.querySelector(".slider");

let touchStartX = 0;
let touchEndX = 0;


slider.addEventListener(
    "touchstart",
    function(event) {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive: true }
);


slider.addEventListener(
    "touchend",
    function(event) {

        touchEndX =
            event.changedTouches[0].screenX;

        handleSwipe();

    },
    { passive: true }
);


function handleSwipe() {

    const distance =
        touchEndX - touchStartX;


    if (Math.abs(distance) < 50) {
        return;
    }


    if (distance < 0) {

        nextSlide();

    } else {

        prevSlide();

    }

}


/* ==========================================
   PRODUK PERTAMA KALI
========================================== */

renderProducts();
