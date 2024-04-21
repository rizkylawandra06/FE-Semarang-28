document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointmentForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const patientname =  document.getElementById("patientname").value;
        const doctor = document.getElementById("doctor").value;
        const clinic = document.getElementById("clinic").value;
        const dateInput = document.getElementById("date");
        const rawDate = dateInput.value; 

        const dateParts = rawDate.split("-");
        const formattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;



const apiUrl = 'https://be-semarang-28-production.up.railway.app/bookings';
const postData = {
    patientname: patientname,
    doctor: doctor,
    clinic: clinic,
    appointment_time: formattedDate,
};


function redirectToNewPage() {
  window.location.href = 'hasilbooking.html';
}

// Use the fetch() function to make a POST request
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify(postData)
})
.then(response => {

    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
    }
    redirectToNewPage();
})
.catch(error => {
    console.error('Fetch error:', error);
        });
    });
});
