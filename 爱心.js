

/* 爱心粒子动画 
.hearts-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
}
.heart {
    position: absolute;
    color: var(--primary);
    font-size: 20px;
    opacity: 0;
    animation: floatHeart 6s ease-in-out infinite;
}
@keyframes floatHeart {
    0% {
        opacity: 0;
        transform: translateY(100vh) scale(0.5);
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(-50px) scale(1.2);
    }
}

:root {
    --transition-normal: all 0.3s ease;
    --box-shadow-normal: 0 2px 4px rgba(0, 0, 0, 0.1);
}
*/


// 爱心粒子动画
const heartsContainer = document.getElementById('heartsContainer');
const createHearts = () => {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            
            // 随机位置和大小
            const size = Math.random() * 20 + 10;
            heart.style.fontSize = `${size}px`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 5}s`;
            heart.style.animationDuration = `${Math.random() * 8 + 4}s`;
            
            heartsContainer.appendChild(heart);
            
            // 移除元素以避免性能问题
            setTimeout(() => {
                heart.remove();
            }, 10000);
        }, i * 300);
    }
};

// 页面加载后创建爱心
window.addEventListener('load', createHearts);

// 循环创建爱心
setInterval(createHearts, 10000);
