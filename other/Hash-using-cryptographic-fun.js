const crypto = require('crypto');

function hashString(string) {
  return crypto.createHash('sha256').update(string).digest('hex');
}

// Example usage:
const data = 'Hello, World!';
const hashedData = hashString(data);
console.log('SHA-256 Hash:', hashedData);


async function sha256(message) {
  // Encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);

  // Hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // Convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // Convert bytes to hex string
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
}

// Example usage:
sha256("my secure password").then(hash => console.log(hash));
