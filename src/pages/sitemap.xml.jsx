// https://javascript.plainenglish.io/dynamic-sitemap-generation-in-next-js-7107ccdc6830
import { listAll } from '../actions/places'

const toUrl = (host, route) =>
  `<url>
    <loc>http://www.${host}${route}</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>`;

const createSitemap = (
  host,
  placesList
) => `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${placesList && placesList.length > 0 && placesList.map((place) => toUrl(host, `/chi-tiet-dia-diem/${place.id}`)).join("")}
    </urlset>`;

const Sitemap = () => { };

Sitemap.getInitialProps = async ({ res, req }) => {
  // const routes = ["", "/about", "/products"];  
  const placesList = await listAll().then(data => {
    if (data.message) {
      console.log(data.message);
    } else {
      return data.data.data;
    }
  });
  const sitemap = createSitemap(req.headers.host, placesList);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return res;
};

export default Sitemap;