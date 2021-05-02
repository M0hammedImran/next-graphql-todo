// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');

// const prod = process.env.NODE_ENV === 'production';

// console.log(
//     `🚀 | file: next.config.js | line 5 | process.env.NODE_ENV`,
//     process.env.NODE_ENV
// );
// const setting = {
//     pwa: {
//         dest: 'public',
//         runtimeCaching,
//     },
// };

module.exports = {
    env: {
        customKey: 'my-value',
    },
};
