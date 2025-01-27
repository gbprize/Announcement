// Set the date we're counting down to
const countDownDate = new Date("April 29, 2025 23:30:00").getTime();

// Update the countdown every 1 second
const interval = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown-timer"
    document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds} SECONDS`;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);

// Get the country select element
const countrySelect = document.getElementById("country");
const selectedCountryText = document.getElementById("selected-country-text");
const countryDate = document.getElementById("country-date");

// Add event listener for change on country select
countrySelect.addEventListener("change", function() {
    // Get the selected country
    const country = countrySelect.value;

    // Set the text based on the selected country
    let countryText = "";

    switch(country) {
        case "Bangladesh":
            countryText = "Date: 29 April 2025, 11:30 PM"; //bd time
            break;
        case "Pakistan":
            countryText = "Date: 29 April 2025, 10:30 PM"; //Pakistan time
            break;
        case "India":
            countryText = "Date: 29 April 2025, 11:00 PM"; //India time
            break;
        case "United States":
            countryText = "You have selected USA"; //us time
            break;
        case "United Kingdom":
            countryText = "Date: 29 April 2025, 6:30 PM"; //UK (BST) time
            break;
        case "Australia":
            countryText = "You have selected Australia.";
            break;
        case "Canada":
            countryText = "Date: 29 April 2025, 1:30 PM"; //Canada (EDT) time
            break;
        case "China":
            countryText = "Date: 30 April 2025, 1:30 AM"; //China (cst) time 
            break;
        case "Russia":
            countryText = "Date: 29 April 2025, 8:30 PM"; //Russia MOSCO time
            break;
        case "Japan":
            countryText = "Date: 30 April 2025, 2:30 AM"; // japan (JST) time
            break;
        case "South Korea":
            countryText = "Date: 30 April 2025, 2:30 AM"; //South Korea (KST) time
            break;
        case "Germany":
            countryText = "Date: 29 April 2025, 7:30 PM"; //Germany time
            break;
        case "France":
            countryText = "Date: 29 April 2025, 10:30 AM"; //France (PDT) time
            break;
        case "Italy":
            countryText = "Date: 29 April 2025, 7:30 PM"; //Italy (CEST) time
            break;
        case "Spain":
            countryText = "Date: 29 April 2025, 7:30 PM"; //Spain (CEST) time
            break;
        case "Netherlands":
            countryText = "You have selected Netherlands."; 
            break;
        case "Sweden":
            countryText = "You have selected Sweden.";
            break;
        case "Singapore":
            countryText = "You have selected Singapore.";
            break;
        case "Thailand":
            countryText = "You have selected Thailand.";
            break;
        case "Malaysia":
            countryText = "You have selected Malaysia.";
            break;
        case "Macau":
            countryText = "You have selected Macau.";
            break;
        // New Developed Countries
        case "Switzerland":
            countryText = "Date: 29 April 2025, 7:30 PM"; //Switzerland (SAST) time
            break;
        case "Luxembourg":
            countryText = "Date: 29 April 2025, 7:30 PM"; //Luxembourg (SAST) time
            break;
        case "Monaco":
            countryText = "Date: 29 April 2025, 7:30 PM"; //Monaco (CEST) time
            break;
        case "Belgium":
            countryText = "Date: 29 April 2025, 7:30 PM"; //Belgium (CEST) time
            break;
        case "Hong Kong":
            countryText = "Date: 30 April 2025, 1:30 AM"; //Hong Kong (HKT) time
            break;
        case "New Zealand":
            countryText = "Date: 30 April 2025, 5:30 AM"; //New Zealand (NZST) time
            break;
        default:
            countryText = "Please select a country.";
    }

    // Display the selected country text in both sections
    //selectedCountryText.innerHTML = `${countryText}`;
    countryDate.innerHTML = `${countryText}`; //update country date
});