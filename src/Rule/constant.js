// constant.js

// Using your SVG logo as a link (example, you can host your SVG anywhere publicly accessible)
export const logo = "https://example.com/Reelmind_logo.svg"; // <-- replace with your actual hosted SVG link

export const Api_option = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  }
};

export const Img_cdn = "https://image.tmdb.org/t/p/w500";

export const openaikey = import.meta.env.VITE_OPENAIKEY;