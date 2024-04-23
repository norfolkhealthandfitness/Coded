import { documentToHtmlString } from 'https://cdn.skypack.dev/@contentful/rich-text-html-renderer';

// Your fetch and rendering logic...

fetch(`https://cdn.contentful.com/spaces/2cvz2uqy0q73/environments/master/entries?access_token=BZQSUCVEKKIjSFYmKMs-0oPZCObhzLIa5xtsBEiQEmw&content_type=tutorBio`)
  .then(response => response.json())
  .then(data => {
    const insertTutorInfo = document.querySelectorAll('.inject-tutor-info');

    // Sort the items by createdAt date in ascending order
    data.items.sort((a, b) => new Date(a.sys.createdAt) - new Date(b.sys.createdAt));

    data.items.forEach(tutor => {
      const tutorBioHtml = documentToHtmlString(tutor.fields.tutorBio);
      const tutorImageId = tutor.fields.tutorImage.sys.id;
      const tutorImageUrl = data.includes.Asset.find(asset => asset.sys.id === tutorImageId).fields.file.url;

      const tutorHTML = `
          <div class="tutor-grid">
              <div class="tutor-info">
                  <div class="tutor-img">
                      <img src="${tutorImageUrl}" alt="Image of ${tutor.fields.tutorName}">
                  </div>
                  <div class="tutorinfotext">
                      <h3>${tutor.fields.tutorName}</h3>
                      <h4>${tutor.fields.tutorRole}</h4>
                  </div>
              </div>
              <div class="tutor-text">${tutorBioHtml}</div>
          </div>
      `;

      insertTutorInfo.forEach(element => {
          element.innerHTML += tutorHTML;
      });
    });
  })
  .catch(error => console.error('Error fetching tutor data:', error));
