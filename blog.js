fetch("https://cdn.contentful.com/spaces/2cvz2uqy0q73/environments/master/entries?access_token=BZQSUCVEKKIjSFYmKMs-0oPZCObhzLIa5xtsBEiQEmw&include=1")
  .then(response => response.json())
  .then(data => {
    const assetsMap = data.includes.Asset.reduce((acc, asset) => {
      acc[asset.sys.id] = asset;
      return acc;
    }, {});

    const htmlContent = data.items.map(item => {
      // Use the assetsMap to find the corresponding image for each item
      const imageId = item.fields.mainImage.sys.id;
      const imageUrl = assetsMap[imageId].fields.file.url;

      // Build the HTML string for each blog post
      return `
        <div class="blog-post-preview">
          <a href="blog-post.html?id=${item.sys.id}">
            <img src="${imageUrl}" alt="${item.fields.headline}" />
            <h2>${item.fields.headline}</h2>
            <p>Date: ${new Date(item.fields.dataAndTime).toLocaleDateString()}</p>
            <p>Category: ${item.fields.category}</p>
          </a>
        </div>
      `;
    }).join(''); // Make sure to join the array into a string

    document.getElementById('inject-blog').innerHTML = htmlContent;
  })
  .catch(err => console.log(err));
