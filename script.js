// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os cards de produtos
    const produtos = document.querySelectorAll('.product-card');

    produtos.forEach(produto => {
        // Adiciona um evento de clique em cada produto
        produto.addEventListener('click', () => {
            const nomeProduto = produto.querySelector('h3').innerText;
            const precoProduto = produto.querySelector('p').innerText;
            
            // Simula a adição ao carrinho
            alert(`🔥 ${nomeProduto} (${precoProduto}) foi adicionado ao seu drop!`);
        });
    });

    console.log("URBAN VIBES script carregado com sucesso! 🚀");
});
