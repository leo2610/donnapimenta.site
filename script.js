// ===============================
// CONFIGURAÇÃO DA LOJA
// ===============================
// TROQUE pelo número de WhatsApp da loja.
// Formato: 55 + DDD + número, somente números.
// Exemplo: 5511999999999
const WHATSAPP_NUMBER = "5511962524206";

const products = [
  {
    name: "Vibrador Delicatto",
    category: "vibradores",
    categoryName: "Vibradores",
    description: "Produto para momentos especiais.",
    price: "Consultar",
    image: "img/produto1.jpg",
    badge: "Destaque"
  },
  {
    name: "Óleo Corporal",
    category: "cosmeticos",
    categoryName: "Cosméticos",
    description: "Textura agradável e toque especial.",
    price: "Consultar",
    image: "img/produto2.jpg",
    badge: ""
  },
  {
    name: "Lingerie Donna",
    category: "lingerie",
    categoryName: "Lingerie",
    description: "Elegância, conforto e confiança.",
    price: "Consultar",
    image: "img/produto3.jpg",
    badge: "Novo"
  },
  {
    name: "Acessório Especial",
    category: "acessorios",
    categoryName: "Acessórios",
    description: "Um complemento para tornar a experiência ainda melhor.",
    price: "Consultar",
    image: "img/produto4.jpg",
    badge: ""
  },
  {
    name: "Vibrador Compact",
    category: "vibradores",
    categoryName: "Vibradores",
    description: "Compacto e prático para levar com você.",
    price: "Consultar",
    image: "img/produto5.jpg",
    badge: ""
  },
  {
    name: "Gel Especial",
    category: "cosmeticos",
    categoryName: "Cosméticos",
    description: "Uma opção para complementar seus momentos.",
    price: "Consultar",
    image: "img/produto6.jpg",
    badge: ""
  },
  {
    name: "Conjunto Elegance",
    category: "lingerie",
    categoryName: "Lingerie",
    description: "Peça especial para valorizar seu estilo.",
    price: "Consultar",
    image: "img/produto7.jpg",
    badge: ""
  },
  {
    name: "Acessório Premium",
    category: "acessorios",
    categoryName: "Acessórios",
    description: "Detalhes que fazem a diferença.",
    price: "Consultar",
    image: "img/produto8.jpg",
    badge: "Premium"
  }
];

let currentCategory = "todos";

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

function whatsappLink(productName = "") {
  const text = productName
    ? `Olá! Vi o produto "${productName}" no catálogo da Donna Pimenta e gostaria de saber mais.`
    : "Olá! Vi o catálogo da Donna Pimenta e gostaria de conhecer os produtos disponíveis.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-image">
      ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
      <img src="${product.image}" alt="${product.name}"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="product-placeholder" style="display:none;">Donna Pimenta</div>
    </div>
    <div class="product-info">
      <div class="product-category">${product.categoryName}</div>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-bottom">
        <span class="price">${product.price}</span>
        <a class="interest-btn" href="${whatsappLink(product.name)}" target="_blank" rel="noopener">
          Tenho interesse
        </a>
      </div>
    </div>
  `;

  return card;
}

function renderProducts() {
  const search = searchInput.value.trim().toLowerCase();

  const filtered = products.filter(product => {
    const categoryMatch =
      currentCategory === "todos" || product.category === currentCategory;

    const searchMatch =
      !search ||
      product.name.toLowerCase().includes(search) ||
      product.categoryName.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    return categoryMatch && searchMatch;
  });

  productGrid.innerHTML = "";
  filtered.forEach(product => productGrid.appendChild(createProductCard(product)));
  emptyState.hidden = filtered.length !== 0;
}

document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category-card").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    renderProducts();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

searchInput.addEventListener("input", renderProducts);

document.getElementById("generalWhatsapp").href = whatsappLink();
document.getElementById("contactWhatsapp").href = whatsappLink();
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("menu-open");
});

renderProducts();
