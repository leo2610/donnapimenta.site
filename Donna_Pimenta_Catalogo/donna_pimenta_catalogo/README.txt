# Donna Pimenta — Catálogo

Catálogo online em HTML, CSS e JavaScript.

## 1. WhatsApp
Abra `js/script.js` e altere:

const WHATSAPP_NUMBER = "5511999999999";

Coloque o número da loja no formato:
55 + DDD + número, sem espaços, parênteses ou hífen.

## 2. Produtos
Todos os produtos estão no início de `js/script.js`, dentro de `const products`.

Para adicionar:
{
  name: "Nome do produto",
  category: "vibradores",
  categoryName: "Vibradores",
  description: "Descrição",
  price: "R$ 99,90",
  image: "img/produto9.jpg",
  badge: "Novo"
}

Categorias disponíveis:
- vibradores
- cosmeticos
- lingerie
- acessorios

## 3. Fotos
Coloque as fotos dentro da pasta `img/` e altere o nome em `image`.

Exemplo:
image: "img/vibrador-rosa.jpg"

## 4. Abrir o site
Abra `index.html` no navegador.

Não existe checkout nem pagamento: o catálogo direciona o cliente para o WhatsApp da loja.
