import { documentToHtmlString } from 'https://cdn.skypack.dev/@contentful/rich-text-html-renderer';

document.getElementById('blog-content').innerHTML = 'Loading...';

// Fetch and display the blog post
const urlParams = new URLSearchParams(window.location.search);
const postSlug = urlParams.get('slug');

console.log(`Fetching post with slug: ${postSlug}`);

if (postSlug) {
  // Define the backend API URL
  const backendApiUrl = `https://illustrious-twilight-d76498.netlify.app/.netlify/functions/contentful?content_type=blog&fields.slug=${postSlug}&include=1`;

  fetch(backendApiUrl)
    .then(response => response.json())
    .then(data => {
      console.log('Fetched data:', data);

      const post = data.items.length > 0 ? data.items[0] : null;
      if (post && data.includes && data.includes.Asset) {
        const asset = data.includes.Asset.find(a => a.sys.id === post.fields.mainImage.sys.id);
        const imageUrl = asset.fields.file.url;

        document.getElementById('blog-content').innerHTML = `
          <img src="${imageUrl}" alt="Main Image" style="width: 100%; height: auto; max-width: none;"/>
          <h1 style='color:black; font-size:40px'>${post.fields.headline}</h1>
         
          <div>${documentToHtmlString(post.fields.blogContent)}</div>
        `;
      } else {
        document.getElementById('blog-content').innerHTML = `<p>Post not found.</p>`;
      }
    })
    .catch(err => {
      console.error(err);
      document.getElementById('blog-content').innerHTML = `<p>Error loading the post.</p>`;
    });
} else {
  document.getElementById('blog-content').innerHTML = `<p>No post specified.</p>`;
}

// Dynamically update the sidebar
function updateSidebar() {
  const sidebarContent = `
    <h2>Sidebar Title</h2>
    <p>Dynamic content goes here. Update me as needed.</p>
  `;
  document.getElementById('sidebar').innerHTML = sidebarContent;
}

updateSidebar();
