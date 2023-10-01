function detect() {
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];

    if (file) {
        // Simulate gender and age detection (replace this with your actual detection logic)
        var gender = Math.random() < 0.5 ? 'Male' : 'Female';
        var age = Math.floor(Math.random() * 50) + 18; // Random age between 18 and 67

        var resultElement = document.getElementById('result');
        resultElement.innerText = `Gender: ${gender}\nAge: ${age} years old`;
    } else {
        alert('Please select an image first.');
    }
}
