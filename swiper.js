// 當 DOM 內容完全加載後執行以下函數
document.addEventListener("DOMContentLoaded", function() {

    // 初始化 Swiper 實例，並指定使用的容器
    const swiper = new Swiper('.card-wrapper', { 
        loop: true, // 啟用循環模式
        spaceBetween: 30, // 每個幻燈片之間的間距為 30 像素
        pagination: {
            el: '.swiper-pagination', // 分頁器的容器
            clickable: true, // 啟用可點擊的分頁器
        },
        navigation: {
            nextEl: '.swiper-button-next', // 下一張幻燈片的按鈕選擇器
            prevEl: '.swiper-button-prev', // 上一張幻燈片的按鈕選擇器
        },
        breakpoints: { // 根據螢幕寬度設定不同的顯示方式
            0: {
                slidesPerView: 1 // 當螢幕寬度小於 768 像素時，每行顯示一張幻燈片
            },
            768: {
                slidesPerView: 2 // 當螢幕寬度在 768 像素及以上時，每行顯示兩張幻燈片
            },
            1024: {
                slidesPerView: 3 // 當螢幕寬度在 1024 像素及以上時，每行顯示三張幻燈片
            },
        }
    });
});



