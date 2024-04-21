// script.js

const hasilBooking = document.getElementById("hasilBooking");

const apiUrl = 'https://be-semarang-28-production.up.railway.app/bookings';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const lastBooking = data[data.length - 1];
        const bookingDetails = `
            <h2>Booking Information</h2>
            <p><span class="booking-label">Booking ID:</span><span class="booking-value">${lastBooking.bookingID}</span></p>
            <p><span class="booking-label">Patient Name:</span><span class="booking-value">${lastBooking.patientname}</span></p>
            <p><span class="booking-label">Doctor:</span><span class="booking-value">${lastBooking.doctor}</span></p>
            <p><span class="booking-label">Clinic:</span><span class="booking-value">${lastBooking.clinic}</span></p>
            <p><span class="booking-label">Appointment Time:</span><span class="booking-value">${lastBooking.appointment_time}</span></p>
        `;
        hasilBooking.innerHTML = bookingDetails;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
