// Project2 - 人工智能算法实践
// JavaScript 文件

document.addEventListener('DOMContentLoaded', function() {
    console.log('Project2 页面已加载');
    
    // 导航功能
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 移除所有活动状态
            navLinks.forEach(l => l.classList.remove('active'));
            // 给当前点击的链接添加活动状态
            this.classList.add('active');
            
            // 获取目标ID并平滑滚动到对应部分
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 设置第一个导航链接为活动状态
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
    
    // AI演示功能
    const aiDemoBtn = document.getElementById('ai-demo-btn');
    const demoOutput = document.getElementById('demo-output');
    
    if(aiDemoBtn && demoOutput) {
        aiDemoBtn.addEventListener('click', function() {
            // 显示加载状态
            demoOutput.innerHTML = '<p>AI正在处理中...</p>';
            
            // 模拟AI处理时间
            setTimeout(() => {
                const result = simpleAIFunction("人工智能算法演示");
                demoOutput.innerHTML = `<p>${result}</p>`;
            }, 1500);
        });
    }
    
    // 反馈表单功能
    const feedbackForm = document.getElementById('feedback-form');
    
    if(feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 在实际项目中，这里应该发送数据到服务器
            alert(`感谢您的反馈！\n姓名: ${name}\n邮箱: ${email}\n留言: ${message}`);
            
            // 清空表单
            feedbackForm.reset();
        });
    }
});

// 一个简单的人工智能相关函数示例
function simpleAIFunction(input) {
    // 这是一个简单的AI模拟函数
    // 实际的AI算法会更复杂
    console.log('AI处理输入:', input);
    
    // 模拟AI处理结果
    const responses = [
        `AI分析结果: "${input}" 是一个重要的人工智能概念`,
        `AI预测: "${input}" 相关技术将在未来快速发展`,
        `AI建议: 深入了解 "${input}" 将有助于提升AI应用能力`,
        `AI总结: "${input}" 是现代智能系统的基础`,
        `AI洞察: "${input}" 代表了人工智能的重要发展方向`
    ];
    
    // 返回随机响应
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}
