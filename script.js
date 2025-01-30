function uploadImage() {
    const fileInput = document.getElementById("fileInput");
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
            localStorage.setItem("uploadedImage", event.target.result);
            window.location.href = "display.html";
        };
        reader.readAsDataURL(file);
    } else {
        alert("Выберите изображение!");
    }
}
