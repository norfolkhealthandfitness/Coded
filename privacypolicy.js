import { documentToHtmlString } from 'https://cdn.skypack.dev/@contentful/rich-text-html-renderer';

document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from Contentful
    fetch(`https://cdn.contentful.com/spaces/2cvz2uqy0q73/environments/master/entries?access_token=BZQSUCVEKKIjSFYmKMs-0oPZCObhzLIa5xtsBEiQEmw&content_type=legal`)
        .then(response => response.json())
        .then(data => {
            // Check if data array is not empty
            if (data && data.items && data.items.length > 0) {
                const firstDocument = data.items[0]; // Get the first document object
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