document.addEventListener('DOMContentLoaded', function () {
    const showPicturesButton = document.getElementById('showPicturesButton');
    const pictureContainer = document.getElementById('pictureContainer');

    showPicturesButton.addEventListener('click', function () {
        pictureContainer.classList.remove('hidden');
    });
});