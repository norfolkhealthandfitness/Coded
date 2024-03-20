


  fetch('https://cdn.contentful.com/spaces/db551ij8p9al/environments/master/entries?access_token=T5PDBa4fQ95s0Lgl9T3KVY161OKFiR7WK-KFmIFtb6w&content_type=blogPage')
  .then(response => response.json())
  .then(data => {
    console.log(data.items.fields); // Here you'll see your data
  })
  .catch(err => console.log(err));
