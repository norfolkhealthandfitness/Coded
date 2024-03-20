fetch('https://cdn.contentful.com/spaces/db551ij8p9al/environments/master/entries?access_token=T5PDBa4fQ95s0Lgl9T3KVY161OKFiR7WK-KFmIFtb6w&content_type=blogPage')
  .then(response => response.json())
  .then(data => {
    const htmlContent = data.items.map(item => `
      <div class="blog-post-preview">
        <a href="blog-post.html?id=${item.sys.id}"> <!-- Use sys.id here -->
          <h2>${item.fields.title}</h2>
          <p>Date: ${new Date(item.fields.date).toLocaleDateString()}</p>
          <p>Category: ${item.fields.category}</p>
        </a>
      </div>
    `).join('');

    document.getElementById('inject-blog').innerHTML = htmlContent;
  })
  .catch(err => console.log(err));
