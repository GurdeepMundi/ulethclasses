const doc = document.body

// Query and extract the desired elements
const elements = doc.querySelectorAll('td.dddefault');
const items = [];
elements.forEach((element) => {
  const item = {
    CRN: elements[0].nextElementSibling.textContent.trim(),
    Subject: elements[0].nextElementSibling.nextElementSibling.textContent,
    CRSE: elements[0].nextElementSibling.nextElementSibling.nextElementSibling.textContent,
    Section: elements[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
    Campus: elements[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
    Credits: elements[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
    Title: elements[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
    Days: elements[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
    Time: elements[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
    Instructor: elements[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
    Date: elements[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
    Location: elements[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
    Attribute: elements[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent,
  };
})
  
  

// Output the extracted items
console.log(item);