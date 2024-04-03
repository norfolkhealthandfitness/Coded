fetch("https://cdn.contentful.com/spaces/2cvz2uqy0q73/environments/master/entries?access_token=BZQSUCVEKKIjSFYmKMs-0oPZCObhzLIa5xtsBEiQEmw&include=1")
    .then(response => response.json())
    .then(data => {
        console.log(data); // Add this line to log the data to the console

        const assetsMap = data.includes.Asset.reduce((acc, asset) => {
            acc[asset.sys.id] = asset;
            return acc;
        }, {});

        const htmlContent = data.items.map(item => {
          // Check if all required fields exist before accessing them
          if (item.fields && item.fields.mainImage && item.fields.headline && item.fields.dataAndTime && item.fields.category) {
              const imageId = item.fields.mainImage.sys.id;
              const imageUrl = assetsMap[imageId].fields.file.url;
      
              // Build the HTML string for each blog post
              return `
                  <div class="blog-post-preview">
                      <a href="blog-post.html?id=${item.sys.id}">
                          <div class="blog-post-image-wrapper">
                              <img src="${imageUrl}" alt="${item.fields.headline}" />
                          </div>
                          <h2>${item.fields.headline}</h2>
                          <p>Date: ${new Date(item.fields.dataAndTime).toLocaleDateString()}</p>
                          <p>Category: ${item.fields.category}</p>
                      </a>
                  </div>
              `;
          } else {
              // Handle case where item is missing required fields
              console.error('Item is missing required fields:', item);
              return ''; // Return empty string for this blog post
          }
      }).join(''); // Make sure to join the array into a string
        document.getElementById('inject-blog').innerHTML = htmlContent;
    })
    .catch(err => console.log(err));

