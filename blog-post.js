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
        <h1 style='color:black; font-size:32px; font-weight:400'>${post.fields.headline}</h1>
        <div style="line-height: 2;">${documentToHtmlString(post.fields.blogContent)}</div>
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
  <div class='sidebar'>
    <h2>Start Your Fitness Career In Norwich Today</h2>
    <p>Are you passionate about fitness and ready to make a difference in people's lives? Begin your journey as a fitness professional right here in Norwich.</p>
    <a class='button'href="start-your-career.html">Start Your Career</a>
  </div>
  
  `;
  document.getElementById('sidebar').innerHTML = sidebarContent;
}

updateSidebar();
