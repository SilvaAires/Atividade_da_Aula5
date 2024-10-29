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

// Aguarda o carregamento completo da página antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão de alternância de projetos e a lista de projetos
    const toggleProjectsButton = document.querySelector(".toggle-projects");
    const projectsList = document.querySelector(".projects-list");

    // Define evento de clique para mostrar/ocultar a lista de projetos
    toggleProjectsButton.addEventListener("click", function() {
        // Alterna a exibição da lista de projetos
        const isHidden = projectsList.style.display === "none" || projectsList.style.display === "";
        projectsList.style.display = isHidden ? "block" : "none";
        
        // Atualiza o texto do botão com base no estado de exibição
        toggleProjectsButton.textContent = isHidden ? "Ocultar Projetos" : "Ver Projetos Recentes";
    });
});

// Aguarda o carregamento completo da página antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão de alternância de projetos e a lista de projetos
    const toggleProjectsButton = document.querySelector(".toggle-projects");
    const projectsList = document.querySelector(".projects-list");

    // Define evento de clique para mostrar/ocultar a lista de projetos
    toggleProjectsButton.addEventListener("click", function() {
        const isHidden = projectsList.style.display === "none" || projectsList.style.display === "";
        projectsList.style.display = isHidden ? "block" : "none";
        toggleProjectsButton.textContent = isHidden ? "Ocultar Projetos" : "Ver Projetos Recentes";
    });

    // Adiciona interatividade para a lista de habilidades de Thiago
    const toggleSkillsButton = document.querySelector(".toggle-skills");
    const skillsList = document.querySelector(".skills-list");

    toggleSkillsButton.addEventListener("click", function() {
        const isHidden = skillsList.style.display === "none" || skillsList.style.display === "";
        skillsList.style.display = isHidden ? "block" : "none";
        toggleSkillsButton.textContent = isHidden ? "Ocultar Habilidades" : "Ver Habilidades";
    });
});

