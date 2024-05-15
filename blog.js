document.getElementById('inject-blog').innerHTML = '<p>Loading...</p>';

// Define the backend API URL
const backendApiUrl = 'https://illustrious-twilight-d76498.netlify.app/.netlify/functions/contentful?content_type=blog&include=1';

fetch(backendApiUrl)
    .then(response => response.json())
    .then(data => {
        const assetsMap = data.includes.Asset.reduce((acc, asset) => {
            acc[asset.sys.id] = asset;
            return acc;
        }, {});

        // Sort items by date in descending order
        const sortedItems = data.items.sort((a, b) => {
            const dateA = new Date(a.fields.dataAndTime);
            const dateB = new Date(b.fields.dataAndTime);
            return dateB - dateA;
        });

        const htmlContent = sortedItems.map(item => {
            if (item.fields && item.fields.slug && item.fields.mainImage && item.fields.headline && item.fields.dataAndTime && item.fields.category) {
                const imageId = item.fields.mainImage.sys.id;
                const imageUrl = assetsMap[imageId].fields.file.url;

                console.log(`Generating link for post with slug: ${item.fields.slug}`);

                return `
                <div class="blog-post-preview">
                    <div class="blog-post-image-wrapper">
                        <img src="${imageUrl}" alt="${item.fields.headline}" />
                    </div>
                    <h2 style="padding-bottom:1rem; padding-top:1rem" >${item.fields.headline}</h2>
                    <a style="padding-bottom:1rem; padding-top:1rem"  href="blog-post.html?slug=${item.fields.slug}">READ MORE >> </a>
                    <p style="padding-bottom:1rem; padding-top:1rem" class="date">${new Date(item.fields.dataAndTime).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p class="category-label">${item.fields.category}</p> 
                </div>
            `;
            } else {
                console.error('Item is missing required fields:', item);
                return '';
            }
        }).join('');
        document.getElementById('inject-blog').innerHTML = htmlContent;
    })
    .catch(err => console.log('Error fetching blog data:', err));
