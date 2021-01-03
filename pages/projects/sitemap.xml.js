import React from "react";
import axios from "axios";

const sitemapXml = data => {
  let latestPost = 0;
  let projectsXML = "";

  data.map(post => {
    const postDate = Date.parse(post.modified);
    if (!latestPost || postDate > latestPost) {
      latestPost = postDate;
    }

    const projectURL = `https://portfolio-nyctibiusvii.vercel.app/projects/${post.acf.slug}/`;
    projectsXML += `
      <url>
        <loc>${projectURL}</loc>
        <lastmod>${postDate}</lastmod>
        <priority>0.90</priority>
      </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
      <loc>https://portfolio-nyctibiusvii.vercel.app/</loc>
      <lastmod>2021-01-03T00:45:28+01:00</lastmod>
      <changefreq>always</changefreq>
      <priority>1.0</priority>
  </url>
  <url>
      <loc>https://portfolio-nyctibiusvii.vercel.app/projects</loc>
      <lastmod>2021-01-03T00:45:28+01:00</lastmod>
      <changefreq>always</changefreq>
      <priority>0.90</priority>
  </url>
  <url>
      <loc>https://portfolio-nyctibiusvii.vercel.app/about</loc>
      <lastmod>2021-01-03T00:45:31+01:00</lastmod>
      <changefreq>always</changefreq>
      <priority>0.90</priority>
  </url>
  <url>
      <loc>https://portfolio-nyctibiusvii.vercel.app/contact</loc>
      <lastmod>2021-01-03T00:45:31+01:00</lastmod>
      <changefreq>always</changefreq>
      <priority>0.90</priority>
  </url>
    ${projectsXML}
  </urlset>`;
};

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const data = await axios
      .get("https://domain.ltd/wp-json/wp/v2/works?filter=[orderby]=date")
      .then(response => response.data);

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemapXml(data));
    res.end();
  }
}

export default Sitemap;