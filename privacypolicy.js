import { documentToHtmlString } from 'https://cdn.skypack.dev/@contentful/rich-text-html-renderer';

document.addEventListener("DOMContentLoaded", function() {
    // Define the production base URL
    const baseURL = 'https://illustrious-twilight-d76498.netlify.app/.netlify/functions';
    const url = `${baseURL}/contentful?content_type=legal`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.items && data.items.length > 0) {
                const firstDocument = data.items[0];
                const content = firstDocument.fields.content;

                const renderedHtml = documentToHtmlString(content);
                document.getElementById('legal-document').innerHTML = `<div>${renderedHtml}</div>`;
            } else {
                document.getElementById('legal-document').innerHTML = `<p>No legal documents found.</p>`;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
