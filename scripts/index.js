// JavaScript cho công cụ tư vấn
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result');
    let currentQuestion = 0;
    
    // Hiển thị câu hỏi đầu tiên
    showQuestion(currentQuestion);
    
    // Xử lý nút Next
    nextBtn.addEventListener('click', function() {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
            updateNavigation();
        }
    });
    
    // Xử lý nút Previous
    prevBtn.addEventListener('click', function() {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
            updateNavigation();
        }
    });
    
    // Xử lý nút Submit
    submitBtn.addEventListener('click', function() {
        showResults();
    });
    
    // Xử lý chọn option
    document.querySelectorAll('.options button').forEach(button => {
        button.addEventListener('click', function() {
            // Xóa selection trước đó
            const siblings = this.parentElement.querySelectorAll('button');
            siblings.forEach(btn => btn.classList.remove('selected'));
            
            // Thêm selection mới
            this.classList.add('selected');
        });
    });
    
    function showQuestion(index) {
        // Ẩn tất cả câu hỏi
        questions.forEach(question => {
            question.style.display = 'none';
        });
        
        // Hiển thị câu hỏi hiện tại
        questions[index].style.display = 'block';
    }
    
    function updateNavigation() {
        // Cập nhật trạng thái nút Previous
        prevBtn.disabled = currentQuestion === 0;
        
        // Ẩn/hiện nút Next và Submit
        if (currentQuestion === questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }
    
    function showResults() {
        // Ẩn công cụ tư vấn
        document.querySelector('.quiz-container').style.display = 'none';
        
        // Hiển thị kết quả
        resultContainer.style.display = 'block';
        
        // Hiển thị điện thoại được đề xuất (trong thực tế sẽ dựa trên câu trả lời)
        const recommendation = document.querySelector('.recommendation');
        recommendation.innerHTML = `
            <div class="phone-result">                
                <h4>Tecno pova 7</h4>
                <p>Dựa trên các lựa chọn của bạn, chúng tôi đề xuất điện thoại này vì:</p>
                <ul>
                    <li>Pin 7000 mAh sử dụng được 2 ngày</li>
                    <li>Màn hình IPS LCD đẹp, sáng</li>
                    <li>Hiệu năng mạnh mẽ cho mọi tác vụ</li>
                    <li>Camera 108MP chụp ảnh sắc nét</li>
                </ul>
                <div class="price">Giá: 3.990.000₫</div>
                <button class="cta-button">Xem địa điểm mua</button>
            </div>
        `;
        
        // Cuộn đến kết quả
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
});

// Hàm cuộn đến công cụ tư vấn
function scrollToAdvisor() {
    document.getElementById('advisor').scrollIntoView({ behavior: 'smooth' });
}

