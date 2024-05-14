import { documentToHtmlString } from 'https://cdn.skypack.dev/@contentful/rich-text-html-renderer';

document.addEventListener("DOMContentLoaded", function() {
    // Define the backend API URL
    const backendApiUrl = 'https://illustrious-twilight-d76498.netlify.app/.netlify/functions/contentful?content_type=legal';

    // Fetch data from the backend API
    fetch(backendApiUrl)
        .then(response => response.json())
        .then(data => {
            // Check if data array is not empty
            if (data && data.items && data.items.length > 0) {
                const firstDocument = data.items[1]; // Get the second document object
                const title = firstDocument.fields.title; // Extract title field
                const content = firstDocument.fields.content; // Extract content field

                // Render title and content
                document.getElementById('legal-document').innerHTML = `
                    <h1>${title}</h1>
                    <div>${documentToHtmlString(content)}</div>
                `;
            } else {
                // Handle case where data array is empty
                document.getElementById('legal-document').innerHTML = `<p>No legal documents found.</p>`;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
