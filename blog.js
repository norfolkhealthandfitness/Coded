

document.getElementById('inject-blog').innerHTML = '<p>Loading...</p>';


fetch("https://cdn.contentful.com/spaces/2cvz2uqy0q73/environments/master/entries?access_token=BZQSUCVEKKIjSFYmKMs-0oPZCObhzLIa5xtsBEiQEmw&content_type=blog&include=1")
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
          return dateB - dateA; // Use dateA - dateB to sort in ascending order
        });

        const htmlContent = sortedItems.map(item => {
          if (item.fields && item.fields.slug && item.fields.mainImage && item.fields.headline && item.fields.dataAndTime && item.fields.category) {
              const imageId = item.fields.mainImage.sys.id;
              const imageUrl = assetsMap[imageId].fields.file.url;
      
              return `
              <div class="blog-post-preview">
                <a href="blog-post.html?slug=${item.fields.slug}">
                    <div class="blog-post-image-wrapper">
                        <img src="${imageUrl}" alt="${item.fields.headline}" />
                    </div>
                    <h2>${item.fields.headline}</h2>
                    <p>${new Date(item.fields.dataAndTime).toLocaleDateString()}</p>
                    <p class="category-label">${item.fields.category}</p>
                </a>
                </div>
          
              `;
          } else {
              console.error('Item is missing required fields:', item);
              return '';
          }
      }).join('');
        document.getElementById('inject-blog').innerHTML = htmlContent;
    })
    .catch(err => console.log(err));
