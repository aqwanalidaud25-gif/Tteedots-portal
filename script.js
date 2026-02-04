/* =========================
   NAVIGATION (AMAN)
   ========================= */

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {
    const page = this.getAttribute("data-page");
    if (page) {
      e.preventDefault();
      window.location.href = page;
    }
  });
});


/* =========================
   APP SECTION SLIDER
   ========================= */

const slides = [
  {
    title: "Ease in Your Grasp",
    desc: "Reduce food loss, saving costs, improving profits and save the environment at the same time",
    image: "img/group-662.png"
  },
  {
    title: "Ordering made simple",
    desc: "Make your purchase anytime, anywhere with just a tap of button",
    image: "img/mobile-2.png"
  },
  {
    title: "Order tracking",
    desc: "View live status deliveries and past order details",
    image: "img/mobile-3.png"
  },
  {
    title: "Inventory Management",
    desc: "Manage your inventory digitally in real time",
    image: "img/mobile-4.png"
  }
];

let currentSlide = 0;

const sliderImage = document.getElementById("appSliderImage");
const sliderTitle = document.getElementById("appTitle");
const sliderDesc  = document.getElementById("appDesc");

const prevBtn = document.querySelector(".arrow-btn.prev");
const nextBtn = document.querySelector(".arrow-btn.next");
const dots = document.querySelectorAll(".dot");

function updateSlide() {
  if (!sliderImage || !sliderTitle || !sliderDesc) return;

  sliderImage.src = slides[currentSlide].image;
  sliderTitle.textContent = slides[currentSlide].title;
  sliderDesc.textContent = slides[currentSlide].desc;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlide();
  });
});

if (sliderImage && sliderTitle && sliderDesc) {
  updateSlide();
}


/* =========================
   HERO VIDEO PLAYER
   ========================= */

function onPlay() {
  const image = document.getElementById("sliderImage");
  const video = document.getElementById("sliderVideo");
  const playBtn = document.querySelector(".play-btn");

  if (!video) return;

  if (image) image.style.display = "none";
  if (playBtn) playBtn.style.display = "none";

  video.style.display = "block";
  video.play();
}


/* =========================
   PRODUCT CARD SLIDER
   ========================= */

const productTrack = document.getElementById("productTrack");
const productDots  = document.querySelectorAll("#productDots .dot");
const prevProduct  = document.getElementById("prevProduct");
const nextProduct  = document.getElementById("nextProduct");

if (productTrack && prevProduct && nextProduct) {

  const cardWidth = productTrack.children[0].offsetWidth + 60;
  let productIndex = 0;
  const totalProducts = productDots.length;

  function updateProductSlider() {
    productTrack.style.transform =
      `translateX(-${productIndex * cardWidth}px)`;

    productDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === productIndex);
    });
  }

  nextProduct.addEventListener("click", () => {
    productIndex = (productIndex + 1) % totalProducts;
    updateProductSlider();
  });

  prevProduct.addEventListener("click", () => {
    productIndex = (productIndex - 1 + totalProducts) % totalProducts;
    updateProductSlider();
  });

  productDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      productIndex = index;
      updateProductSlider();
    });
  });
}
