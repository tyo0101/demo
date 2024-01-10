$(document).ready(function () {
    // 获取要添加特效的元素
    var animatedElement = $('#animated-element');

    // 获取元素在文档中的位置
    var offset = 700; // 设置偏移量
    var targetPosition = animatedElement.offset().top - offset;

    // 添加滚动事件监听器
    $(window).scroll(function () {
        // 获取当前滚动位置
        var currentScroll = $(window).scrollTop();

        // 如果滚动位置达到目标位置，显示元素
        if (currentScroll >= targetPosition) {
            animatedElement.css({
                opacity: 1,
                transform: 'translateX(0)'
            });
        }
    });
    
});
