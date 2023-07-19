const doc = document.body

// Query and extract the desired elements
const elements = doc.querySelectorAll('td.dddefault');
const courses = [];
let ptr = 0;
while (ptr < elements.length){
    course_fields = [];
    // for loop to collect all the fields for a course
    for (let i = 0; i < 15; i++) {
        try{
            course_fields.push(elements[ptr+i].textContent.trim());
        } catch (err) {
            console.log(err);
            ptr += 14;
            break; // go to the next course
        }
    }
    // Create a course object
    const course = {
        Availability: (course_fields[0] == 'C')? 'Closed' : 'Open',
        CRN: course_fields[1],
        Subject: course_fields[2],
        CRSE: course_fields[3],
        Section: course_fields[4],
        Campus: course_fields[5],
        Credits: course_fields[6],
        Title: course_fields[7],
        Days: course_fields[8],
        Time: course_fields[9],
        Instructor: course_fields[10],
        Date: course_fields[11],
        Location: course_fields[12],
        Attribute: course_fields[13]
    };
    // Push the course object to the courses array
    courses.push(course);
    // Increment the pointer to the next course
    ptr += 14;
}

// Convert the list to a JSON string
const jsonString = JSON.stringify(courses, null, 2);

// Create a Blob object with the JSON string
const blob = new Blob([jsonString], { type: 'application/json' });

// Create a temporary URL for the Blob object
const url = URL.createObjectURL(blob);

// Create an anchor element
const anchor = document.createElement('a');
anchor.href = url;
anchor.download = 'courses.json'; // Set the desired filename

// Trigger a click event on the anchor element
anchor.click();

// Clean up by revoking the URL object
URL.revokeObjectURL(url);