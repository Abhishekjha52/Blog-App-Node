const express = require ('express');
const cors = require ('cors');
const app = express ();
app.use (cors ());
app.use (express.static ('public'));

const blogPosts = [
  {
    id: 1,
    title: 'The Impact of Technology on Modern Society',
    content: 'The impact of technology on modern society is profound and far-reaching...',
    date: 'November 1, 2023',
  },
  {
    id: 2,
    title: 'Mastering the Art of Coding: Tips and Tricks for Aspiring Developers',
    content: 'Embrace challenges as opportunities to grow, leverage online resources like tutorials...',
    date: 'January 16, 2008',
  },
  {
    id: 3,
    title: 'Debugging Like a Pro: Strategies for Efficient Code Troubleshooting',
    content: 'Debugging code efficiently requires a systematic approach, starting with understanding the...',
    date: 'March 10, 2013',
  },
  {
    id: 4,
    title: 'Coding Languages Demystified: Python, Java, and Beyond',
    content: 'Pythons simplicity and readability make it ideal for beginners, with its extensive...',
    date: 'August 10, 2007',
  },
  {
    id: 5,
    title: 'Medical Breakthroughs in Modern Science: Pioneering Innovations in Healthcare',
    content: 'In recent years, medical breakthroughs have revolutionized healthcare, from CRISPR gene editing to personalized medicine tailored to an individual...',
    date: 'May 23, 2010',
  },
];

// Route to get all blog posts
app.get ('/api/posts', (req, res) => {
  res.json (blogPosts);
});

// Route to get a specific blog post by ID
app.get ('/api/posts/:id', (req, res) => {
  const postId = parseInt (req.params.id);
  const post = blogPosts.find (post => post.id === postId);

  if (post) {
    res.json (post);
  } else {
    res.status (404).json ({message: 'Post not found'});
  }
});

const PORT = process.env.PORT || 3000;
app.listen (PORT, () => {
  console.log (`Server running on port ${PORT}`);
});
