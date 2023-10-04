document.addEventListener('DOMContentLoaded', function() {
    // Create a new div element to contain the header
    const headerContainer = document.createElement('div');

    // Use fetch to load the header.html content
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
            document.body.insertBefore(headerContainer, document.body.firstChild);
        })
        .catch(error => console.error('Error loading header:', error));
});
