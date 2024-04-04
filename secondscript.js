// script.js

const jobList = document.getElementById('job-list');

function searchJobs() {
  const searchTerm = document.getElementById('search-bar').value.toLowerCase();
  // Simulate search logic - replace with actual search functionality
  jobList.innerHTML = ''; // Clear previous results
  const jobs = document.querySelectorAll('.latest-jobs .job-item');
  for (const job of jobs) {
    const jobTitle = job.querySelector('h3').textContent.toLowerCase();
    if (jobTitle.includes(searchTerm)) {
      jobList.appendChild(job.cloneNode(true)); // Add matching jobs to search results
    }
  }
}
// script.js


function openApplyForm(button) {
  const jobItem = button.parentElement; // Get the job item container
  const applyForm = jobItem.querySelector('.apply-form');
  applyForm.hidden = !applyForm.hidden; // Toggle form visibility
}


function submitJob(event) {
  event.preventDefault(); // Prevent default form submission

  // Simulate form data (replace with actual data extraction)
  const formData = {
    title: document.getElementById('title').value,
    company: document.getElementById('company').value,
    location: document.getElementById('location').value,
    description: document.getElementById('description').value,
  };

  // Simulate sending data to server (replace with actual AJAX call)
  fetch('/post-job', { // Replace '/post-job' with your server-side script URL
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Job Posted Successfully!');
      // Clear the form (optional)
      document.getElementById('job-post-form').reset();
    } else {
      alert('Error Posting Job: ' + data.message); // Display error message from server
    }
  })
  .catch(error => {
    alert('Error Posting Job: ' + error.message); // Handle network or other errors
  });
}

const jobPostForm = document.getElementById('job-post-form');
jobPostForm.addEventListener('submit', submitJob);

const jobSearchForm = document.getElementById('job-search-form');

window.onload = function() {
  const signupButton = document.getElementById('signupButton');
  const modal = document.getElementById('signupForm');
  const closeBtn = document.getElementById('close');

  // Display the modal when the signup button is clicked
  signupButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Prevent default form submission for the signup form
  const signupForm = document.getElementById('form');
  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add code here to handle form submission, e.g., sending data to a server
    console.log('Signup Form submitted!');
  });
};




