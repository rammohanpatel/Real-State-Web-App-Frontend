/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io','spacema-dev.com'],
    },
};

export default nextConfig;

// images:{
//     remotePatterns:[
//         {
//             protocol:'https',
//             hostname:'cdn.sanity.io'
//         }
//     ]
// }