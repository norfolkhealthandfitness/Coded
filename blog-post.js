import { documentToHtmlString } from 'https://cdn.skypack.dev/@contentful/rich-text-html-renderer';

document.getElementById('blog-content').innerHTML = 'Loading...'
// Fetch and display the blog post
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

if (postId) {
  fetch(`https://cdn.contentful.com/spaces/2cvz2uqy0q73/environments/master/entries?access_token=BZQSUCVEKKIjSFYmKMs-0oPZCObhzLIa5xtsBEiQEmw&content_type=blog&sys.id=${postId}&include=1`)
  .then(response => response.json())
  .then(data => {
    const post = data.items[0]; // Assuming the ID will directly match a single post
    if (post && data.includes && data.includes.Asset) {
      const asset = data.includes.Asset.find(a => a.sys.id === post.fields.mainImage.sys.id);
      const imageUrl = asset.fields.file.url;

      document.getElementById('blog-content').innerHTML = `
        <img src="${imageUrl}" alt="Main Image" style="min-width: 600px; height: auto;"/>
        <h1 style='color:black; font-size:40px'>${post.fields.headline}</h1>
        <p>${post.fields.category}</p>
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
