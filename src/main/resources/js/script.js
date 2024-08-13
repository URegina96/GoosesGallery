document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '../GoosesGallery/src/main/resources/images/image1.jpg',
        '../GoosesGallery/src/main/resources/images/image2.jpg',
        '../GoosesGallery/src/main/resources/images/image3.jpg',
    ];

    let currentIndex = 0;
    const sliderImage = document.getElementById('sliderImage');

    function updateImage() {
        sliderImage.src = images[currentIndex];
    }

    // Функция для переключения к предыдущему слайду
    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImage();
    });

    // Функция для переключения к следующему слайду
    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    });

    // Автоматическая смена слайдов каждые 5 секунд
    setInterval(() => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage();
    }, 1000); // Время в миллисекундах (5000 мс = 5 секунд)

    // Начальная установка первого изображения
    updateImage();
});
