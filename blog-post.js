import { documentToHtmlString } from 'https://cdn.skypack.dev/@contentful/rich-text-html-renderer';

    // Step 1: Extract the Post ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
      // Step 2: Fetch the Specific Post by ID
      fetch(`https://cdn.contentful.com/spaces/db551ij8p9al/environments/master/entries?access_token=T5PDBa4fQ95s0Lgl9T3KVY161OKFiR7WK-KFmIFtb6w&content_type=blogPage&sys.id=${postId}`)
      .then(response => response.json())
      .then(data => {
        const post = data.items[0]; // Assuming the ID will directly match a single post

        if (post) {
          // Step 3: Display the Post Title

        //   const content = documentToHtmlString(post.fields.content)
          document.getElementById('blog').innerHTML = `
          <h1>${post.fields.title}</h1>
          <h1>${post.fields.category}</h1>
          <div>${documentToHtmlString(post.fields.content)}</div>
          `;
          console.log(
            `
          <h1>${post.fields.title}</h1>
          <h1>${post.fields.category}</h1>
          <div>${documentToHtmlString(post.fields.content)}</div>
          `
          )
        } else {
          document.getElementById('blog').innerHTML = `<p>Post not found.</p>`;
        }
      })
      .catch(err => {
        console.log(err);
        document.getElementById('blog').innerHTML = `<p>Error loading the post.</p>`;
      });
    } else {
      document.getElementById('blog').innerHTML = `<p>No post ID provided.</p>`;
    }


   