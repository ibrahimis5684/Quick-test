//3d products full screen function
const fullScreenBtns = document.querySelectorAll('.full-screen'); // Get all buttons
const pImgBoxes = document.querySelectorAll('.p-img-box'); // Get all corresponding elements

fullScreenBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const pImgBox = pImgBoxes[index]; // Get the corresponding p-img-box for this button

        if (!document.fullscreenElement) {
            // Enter fullscreen mode
            if (pImgBox.requestFullscreen) {
                pImgBox.requestFullscreen();
            } else if (pImgBox.webkitRequestFullscreen) { // Safari
                pImgBox.webkitRequestFullscreen();
            } else if (pImgBox.msRequestFullscreen) { // IE/Edge
                pImgBox.msRequestFullscreen();
            }

            btn.innerHTML = '<i class="fa-regular fa-compress"></i>'; // Change to "exit fullscreen" icon
        } else {
            // Exit fullscreen mode
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { // Safari
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }

            btn.innerHTML = '<i class="fa-regular fa-expand"></i>'; // Change back to "fullscreen" icon
        }
    });
});
//benefit content show and hide
// Select all buttons and content boxes
const buttons = document.querySelectorAll(".benefit-btn");
const contentBoxes = document.querySelectorAll(".benefit-content-box");

// Add click event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove the active class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));

        // Hide all content boxes
        contentBoxes.forEach((box) => (box.style.display = "none"));

        // Add the active class to the clicked button
        button.classList.add("active");

        // Display the corresponding content box
        const targetContentId = button.id.replace("-btn", "-content");
        const targetContentBox = document.getElementById(targetContentId);
        if (targetContentBox) {
            targetContentBox.style.display = "block";
        }
    });
});


//dropdown menu in small device
document.getElementById("dropdown-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");

    dropdownMenus.forEach((dropdownMenu) => {
        // Toggle the display property
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });
});