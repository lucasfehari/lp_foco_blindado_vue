const https = require('https');
const fs = require('fs');
const path = require('path');

const emojis = [
  '1f9e0', // brain
  '1f6e1', // shield
  '1f6e1-fe0f', // shield fallback
  '23f1', // stopwatch
  '23f1-fe0f', // stopwatch fallback
  '2705', // check mark
  '1f4d6', // book
  '1f3ac', // clapper
  '1f381', // gift
  '274c' // cross mark
];

const dir = path.join(__dirname, 'public', 'img', 'emojis');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

emojis.forEach(hex => {
  const url = `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/${hex}.png`;
  const dest = path.join(dir, `${hex}.png`);
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
    } else {
      console.log(`Failed to download ${hex}: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${hex}:`, err.message);
  });
});
