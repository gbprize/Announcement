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
            countryText = "Date: 29 April 2025 11:30 PM";
            break;
        case "Pakistan":
            countryText = "You have selected Pakistan";
            break;
        case "India":
            countryText = "You have selected India.";
            break;
        case "United States":
            countryText = "You have selected the United States.";
            break;
        case "United Kingdom":
            countryText = "You have selected the United Kingdom.";
            break;
        case "Australia":
            countryText = "You have selected Australia.";
            break;
        case "Canada":
            countryText = "You have selected Canada.";
            break;
        case "China":
            countryText = "You have selected China.";
            break;
        case "Russia":
            countryText = "You have selected Russia.";
            break;
        case "Japan":
            countryText = "You have selected Japan.";
            break;
        case "South Korea":
            countryText = "You have selected South Korea.";
            break;
        case "Germany":
            countryText = "You have selected Germany.";
            break;
        case "France":
            countryText = "You have selected France.";
            break;
        case "Italy":
            countryText = "You have selected Italy.";
            break;
        case "Spain":
            countryText = "You have selected Spain.";
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
            countryText = "You have selected Switzerland.";
            break;
        case "Luxembourg":
            countryText = "You have selected Luxembourg.";
            break;
        case "Monaco":
            countryText = "You have selected Monaco.";
            break;
        case "Belgium":
            countryText = "You have selected Belgium.";
            break;
        case "Hong Kong":
            countryText = "You have selected Hong Kong.";
            break;
        case "New Zealand":
            countryText = "You have selected New Zealand.";
            break;
        default:
            countryText = "Please select a country.";
    }

    // Display the selected country text in both sections
    //selectedCountryText.innerHTML = `${countryText}`; 
    countryDate.innerHTML = `${countryText}`; //update country date
});