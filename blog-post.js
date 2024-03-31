import { documentToHtmlString } from 'https://cdn.skypack.dev/@contentful/rich-text-html-renderer';


// Step 1: Extract the Post ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

if (postId) {
  // Step 2: Fetch the Specific Post by ID, including linked assets
  fetch(`https://cdn.contentful.com/spaces/2cvz2uqy0q73/environments/master/entries?access_token=BZQSUCVEKKIjSFYmKMs-0oPZCObhzLIa5xtsBEiQEmw&content_type=blog&sys.id=${postId}&include=1`)
  .then(response => response.json())
  .then(data => {
    const post = data.items[0]; // Assuming the ID will directly match a single post

    // Check if there's a post and included assets
    if (post && data.includes && data.includes.Asset) {
      // Find the asset that matches the mainImage ID
      const asset = data.includes.Asset.find(a => a.sys.id === post.fields.mainImage.sys.id);
      const imageUrl = asset.fields.file.url;

      // Now you can use imageUrl in your img tag
      document.getElementById('blog').innerHTML = `
        <img src="${imageUrl}" alt="Main Image"/>
        <h1>${post.fields.headline}</h1>
        <p>${post.fields.category}</p>
        <div>${documentToHtmlString(post.fields.blogContent)}</div>
      `;
    } else {
      document.getElementById('blog').innerHTML = `<p>Post not found.</p>`;
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById('blog').innerHTML = `<p>Error loading the post.</p>`;
  });
}
