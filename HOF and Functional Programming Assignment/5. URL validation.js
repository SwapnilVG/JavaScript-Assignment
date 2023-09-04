/*Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. Print a message indicating if the input matches the conditions or not.*/


const urlPattern = /^(https?:\/\/)[\w\d.-]+\.[a-zA-Z]+$/;

function isValidURL(input) {
  return urlPattern.test(input);
}

const testUrls = [
  "http://www.example.com",
  "https://www.example.com",
  "http://subdomain.example123-xyz.com",
  "https://123.456",
  "ftp://invalidurl.com",
];

testUrls.forEach((url) => {
  if (isValidURL(url)) {
    console.log(`"${url}" is a valid URL.`);
  } else {
    console.log(`"${url}" is not a valid URL.`);
  }
});
