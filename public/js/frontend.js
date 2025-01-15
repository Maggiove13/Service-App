

// Incluir header y footer en las páginas
document.addEventListener('DOMContentLoaded', () => {
    // Insertar el header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('nav').innerHTML = data;
        });

    // Insertar el footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
});


// Función para cargar un componente en un contenedor
async function loadComponent(selector, url) {
    const element = document.querySelector(selector);
    if (element) {
        const response = await fetch(url);
        const html = await response.text();
        element.innerHTML = html;
    }
}

// Cargar el header y el footer
loadComponent("#nav-header", "components/header.html");
loadComponent("#footer", "components/footer.html");