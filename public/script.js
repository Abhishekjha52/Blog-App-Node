document.addEventListener ('DOMContentLoaded', () => {
  const blogSection = document.getElementById ('blog-section');

  // Fetch blog data from the Node.js server
  fetch ('http://localhost:3000/api/posts')
    .then (response => response.json ())
    .then (posts => {
      // Loop through the retrieved posts and create HTML elements for each post
      posts.forEach (post => {
        const article = document.createElement ('article');
        article.innerHTML = `
        <div class="blog-content">
        <header>
            <h1><b>${post.title}</b></h1>
            <p><b>Published on:</b> ${post.date}</p>
        </header>
        <p>${post.content}</p>
        </div>
    `;
        blogSection.appendChild (article);
      });
    })
    .catch (error => {
      console.error ('Error fetching blog posts:', error);
    });
});
