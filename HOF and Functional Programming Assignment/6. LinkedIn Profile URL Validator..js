/*As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are 
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and 
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.

The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs 
that do not follow this format or contain invalid characters. The program should provide clear output messages 
indicating whether each input is a valid LinkedIn profile URL or */


function validateLinkedInProfile(url) {
    // Define the regular expression pattern for a valid LinkedIn URL
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    if (regex.test(url)) {
      return "Valid LinkedIn profile URL";
    } else {
      return "Invalid LinkedIn profile URL";
    }
  }
  
  const url1 = "https://www.linkedin.com/in/Swapnil123";
  const url2 = "https://www.linkedin.com/in/Harshal-20";
  const url3 = "https://www.linkedin.com/in/SVG@user";
  const url4 = "https://www.linkedin.com/rohit";
  
  console.log(validateLinkedInProfile(url1));
  console.log(validateLinkedInProfile(url2));
  console.log(validateLinkedInProfile(url3));
  console.log(validateLinkedInProfile(url4));
  