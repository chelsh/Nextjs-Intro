/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
  // async redirects(){
  //   return [{
  //     source: "",
  //     destination: "",
  //     permanent: false
  //   }]
  // },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
