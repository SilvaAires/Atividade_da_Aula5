// Espera o DOM carregar antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as seções da página
    const sections = document.querySelectorAll("section");

    // Adiciona um botão de alternância para cada seção
    sections.forEach(section => {
        // Cria o botão
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Mostrar Mais";
        toggleButton.classList.add("toggle-button");

        // Define o evento de clique para alternar a visibilidade da seção
        toggleButton.addEventListener("click", () => {
            const content = section.querySelector("p, ul, ol");
            const isHidden = content.style.display === "none";

            // Altera a visibilidade do conteúdo
            content.style.display = isHidden ? "block" : "none";
            toggleButton.textContent = isHidden ? "Mostrar Menos" : "Mostrar Mais";
        });

        // Adiciona o botão à seção e oculta o conteúdo inicialmente
        section.appendChild(toggleButton);
        const content = section.querySelector("p, ul, ol");
        content.style.display = "none";
    });
});
