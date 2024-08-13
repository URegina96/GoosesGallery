document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '../GoosesGallery/src/main/resources/images/image1.jpg',
        '../GoosesGallery/src/main/resources/images/image2.jpg',
        '../GoosesGallery/src/main/resources/images/image3.jpg',
    ];

    let currentIndex = 0;
    const sliderImage = document.getElementById('sliderImage');
    let isTransitioning = false; // Флаг для отслеживания перехода

    function updateImage(nextIndex) {
        if (isTransitioning) return; // Если идет переход, то ничего не делаем
        isTransitioning = true;

        sliderImage.classList.add('slide-out'); // Добавляем класс выхода

        setTimeout(() => {
            currentIndex = nextIndex !== undefined ? nextIndex : (currentIndex + 1) % images.length;
            sliderImage.src = images[currentIndex];
            sliderImage.classList.remove('slide-out');
            sliderImage.classList.add('slide-in');

            setTimeout(() => {
                sliderImage.classList.remove('slide-in'); // Убираем класс входа
                isTransitioning = false; // Разрешаем следующий переход
            }, 1000); // Длительность анимации
        }, 1000); // Время, необходимое для завершения предыдущей анимации
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        updateImage((currentIndex - 1 + images.length) % images.length);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        updateImage();
    });

    setInterval(() => {
        updateImage(); // Автоматическая смена слайдов каждые 5 секунд
    }, 7000);

    updateImage(); // Начальная установка первого изображения
});
