// Mảng devices
const devices = [
    {
        name: "Tecno Pova 7",
        price: 3990000,
        batteryScore: 90,
        cameraScore: 80,
        performanceScore: 85,
        screenScore: 75,
        designScore: 80,
        brandScore: 70,
        reasons: ["Pin 7000mAh siêu trâu", "Chơi game mượt", "Giá hợp lý 3.99 triệu"],
        link: "https://shopee.vn/search?keyword=Tecno%20Pova%207"
    },
    {
        name: "Realme C55",
        price: 3480000,
        batteryScore: 80,
        cameraScore: 85,
        performanceScore: 80,
        screenScore: 82,
        designScore: 85,
        brandScore: 80,
        reasons: ["Camera 64MP chụp nét", "Thiết kế trẻ trung", "Giá chỉ 3.48 triệu"],
        link: "https://shopee.vn/search?keyword=Realme%20C55"
    },
    {
        name: "Nubia V70 Design",
        price: 3290000,
        batteryScore: 75,
        cameraScore: 90,
        performanceScore: 82,
        screenScore: 78,
        designScore: 90,
        brandScore: 65,
        reasons: ["Camera selfie đẹp", "Thiết kế độc lạ", "Giá 3.29 triệu"],
        link: "https://shopee.vn/search?keyword=Nubia%20V70%20Design"
    },
      {
        name: "Meizu Mblu 21",
        price: 1990000,
        batteryScore: 70,
        cameraScore: 60,
        performanceScore: 65,
        screenScore: 70,
        designScore: 75,
        brandScore: 60,
        reasons: ["Giá cực rẻ 1.99 triệu", "Phù hợp cho nhu cầu cơ bản", "Màn hình lớn 6.79 inch"],
        link: "https://shopee.vn/search?keyword=Meizu%20Mblu%2021"
    },
    {
        name: "Nubia V70 Max",
        price: 2690000, // Giá trung bình giữa 2.59 và 2.79 triệu
        batteryScore: 85,
        cameraScore: 75,
        performanceScore: 80,
        screenScore: 80,
        designScore: 85,
        brandScore: 65,
        reasons: ["Pin 6000mAh bền bỉ", "Hiệu năng ổn định", "Màn hình 6.9 inch 120Hz"],
        link: "https://shopee.vn/search?keyword=Nubia%20V70%20Max"
    },
     {
        name: "TECNO Spark 40",
        price: 3190000, // Giá trung bình giữa 2.89 và 3.49 triệu
        batteryScore: 80,
        cameraScore: 80,
        performanceScore: 85,
        screenScore: 82,
        designScore: 80,
        brandScore: 70,
        reasons: ["Hỗ trợ NFC", "Hiệu năng mạnh mẽ", "Màn hình 120Hz mượt mà"],
        link: "https://shopee.vn/search?keyword=TECNO%20Spark%2040"
    },
     {
        name: "Itel RS4 NFC",
        price: 3390000,  // Giá tham khảo 3.390.000₫ (phiên bản 12/256GB, có thể điều chỉnh cho phiên bản khác)
        batteryScore: 82,
        cameraScore: 85,
        performanceScore: 92,
        screenScore: 88,
        designScore: 82,
        brandScore: 65,
        reasons: ["Chip Helio G99 Ultimate chơi game mượt", "Sạc nhanh 45W siêu tốc", "Hỗ trợ NFC tiện lợi", "Màn hình 6.56 inch 120Hz sắc nét", "RAM lớn lên đến 12GB đa nhiệm tốt"],
        link: "https://shopee.vn/search?keyword=Itel%20RS4%20NFC"
    },
    {
        name: "TECNO Spark 30 5G",
        price: 3410000,  // Giá tham khảo 3.410.000₫ (phiên bản 8/256GB, có thể điều chỉnh cho phiên bản khác)
        batteryScore: 82,
        cameraScore: 92,
        performanceScore: 88,
        screenScore: 85,
        designScore: 85,
        brandScore: 75,
        reasons: ["Camera 108MP AI chụp đêm sắc nét", "Hỗ trợ 5G kết nối siêu tốc", "Màn hình 6.67 inch 120Hz mượt mà", "Pin 5000mAh dùng cả ngày với sạc 18W", "Thiết kế IP54 chống nước bụi"],
        link: "https://shopee.vn/search?keyword=TECNO%20Spark%2030%205G"
    },
     {
        name: "Itel P55 Plus NFC",
        price: 2990000,  // Giá tham khảo 2.990.000₫ (phiên bản 8/256GB, có thể điều chỉnh cho phiên bản khác)
        batteryScore: 80,
        cameraScore: 78,
        performanceScore: 78,
        screenScore: 80,
        designScore: 78,
        brandScore: 65,
        reasons: ["RAM 8GB + 256GB lưu trữ thoải mái", "Hỗ trợ NFC thanh toán tiện lợi", "Màn hình 6.6 inch 90Hz mượt mà", "Pin 5000mAh dùng cả ngày", "Chip Unisoc T606 đa nhiệm ổn định"],
        link: "https://shopee.vn/search?keyword=Itel%20P55%20Plus%20NFC"
    }
];

// Lưu câu trả lời và theo dõi câu hỏi hiện tại
let userAnswers = {};
let currentQuestion = 0;
const questions = document.querySelectorAll('.question');

// Hiển thị câu hỏi hiện tại
function showQuestion(index) {
    questions.forEach((q, i) => {
        q.classList.toggle('active', i === index);
    });
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').style.display = index < questions.length - 1 ? 'inline-block' : 'none';
    document.getElementById('submit-btn').style.display = index === questions.length - 1 ? 'inline-block' : 'none';
}

// Xử lý khi chọn đáp án
document.querySelectorAll('.options button').forEach(button => {
    button.addEventListener('click', function() {
        // Sử dụng chỉ số câu hỏi để lưu đáp án
        const questionIndex = Array.from(questions).indexOf(this.closest('.question'));
        userAnswers[`question${questionIndex + 1}`] = this.getAttribute('data-value');
        // Highlight nút được chọn
        this.parentElement.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        // Tự động chuyển câu nếu chưa phải câu cuối
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    });
});

// Nút "Tiếp theo"
document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
});

// Nút "Quay lại"
document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
});

// Nút "Xem kết quả"
document.getElementById('submit-btn').addEventListener('click', submitQuiz);

// Tính điểm tổng hợp dựa trên tất cả câu trả lời
function calculateDeviceScore(device, userAnswers) {
    let totalScore = 0;
    let weightSum = 0;

    // Câu 1: Mục đích sử dụng (trọng số cao)
    const usageWeight = 1.5;
    switch (userAnswers.question1) {
        case "basic":
            totalScore += device.performanceScore * 0.7 + device.batteryScore * 1.3;
            weightSum += 2.0;
            break;
        case "camera":
            totalScore += device.cameraScore * 1.8 + device.screenScore * 0.7;
            weightSum += 2.5;
            break;
        case "game":
            totalScore += device.performanceScore * 1.5 + device.batteryScore * 1.0;
            weightSum += 2.5;
            break;
        case "work":
            totalScore += device.performanceScore * 1.2 + device.batteryScore * 1.3;
            weightSum += 2.5;
            break;
    }

    // Câu 2: Yếu tố ưu tiên (trọng số rất cao)
    const priorityWeight = 2.0;
    switch (userAnswers.question2) {
        case "battery":
            totalScore += device.batteryScore * priorityWeight;
            break;
        case "screen":
            totalScore += device.screenScore * priorityWeight;
            break;
        case "performance":
            totalScore += device.performanceScore * priorityWeight;
            break;
        case "brand":
            totalScore += device.brandScore * priorityWeight;
            break;
    }
    weightSum += priorityWeight;

    // Câu 3: Chụp ảnh selfie (ảnh hưởng đến camera)
    const selfieWeight = 0.8;
    switch (userAnswers.question3) {
        case "often":
            totalScore += device.cameraScore * 1.5 * selfieWeight;
            weightSum += 1.5 * selfieWeight;
            break;
        case "sometimes":
            totalScore += device.cameraScore * 1.0 * selfieWeight;
            weightSum += 1.0 * selfieWeight;
            break;
        case "rarely":
        case "never":
            totalScore += device.cameraScore * 0.5 * selfieWeight;
            weightSum += 0.5 * selfieWeight;
            break;
    }

    // Câu 4: Thời gian sử dụng (ảnh hưởng đến pin và hiệu năng)
    const durationWeight = 0.8;
    switch (userAnswers.question4) {
        case "1":
        case "2":
            totalScore += (device.batteryScore * 0.7 + device.performanceScore * 0.8) * durationWeight;
            weightSum += 1.5 * durationWeight;
            break;
        case "3":
        case "long":
            totalScore += (device.batteryScore * 1.0 + device.performanceScore * 1.0) * durationWeight;
            weightSum += 2.0 * durationWeight;
            break;
    }

    // Tính điểm trung bình có trọng số
    const weightedScore = totalScore / weightSum;

    // Điều chỉnh theo giá (ưu tiên thiết bị có giá gần với ngân sách tối đa hơn)
    const budgetMap = {
    	"2": [1000000, 2000000],
        "3": [2000000, 3000000],
        "5": [3000000, 5000000],
        "7": [5000000, 7000000]
    };
    const budget = budgetMap[userAnswers.question5];
    const maxBudget = budget[1] === Infinity ? 10000000 : budget[1];
    const priceRatio = device.price / maxBudget;

    // Thiết bị có giá càng gần ngân sách tối đa càng được ưu tiên (trong phạm vi ngân sách)
    const priceAdjustment = priceRatio <= 1.0 ? 1.0 + (1.0 - priceRatio) * 0.2 : 0.5;

    return weightedScore * priceAdjustment;
}

// Xử lý khi nhấn "Xem kết quả"
function submitQuiz() {
    // Kiểm tra đủ 5 câu trả lời
    if (Object.keys(userAnswers).length < 5) {
        alert("Vui lòng trả lời đủ 5 câu hỏi!");
        return;
    }

    // Lọc thiết bị trong ngân sách
    const budgetMap = {
    	"2": [1000000, 2000000],
        "3": [2000000, 3000000],
        "5": [3000000, 5000000],
        "7": [5000000, 7000000]
    };
    const budget = budgetMap[userAnswers.question5];
    let filteredDevices = devices.filter(device => 
        device.price >= budget[0] && device.price <= budget[1]
    );

    // Nếu không có thiết bị nào trong ngân sách, mở rộng tìm kiếm
    if (filteredDevices.length === 0) {
        filteredDevices = devices.filter(device => device.price >= budget[0]);
        if (filteredDevices.length === 0) {
            filteredDevices = devices; // Nếu vẫn không có, hiển thị tất cả
        }
    }

    // Tính điểm cho từng thiết bị
    const scoredDevices = filteredDevices.map(device => ({
        ...device,
        score: calculateDeviceScore(device, userAnswers)
    }));

    // Sắp xếp theo điểm cao nhất
    scoredDevices.sort((a, b) => b.score - a.score);
    const bestDevice = scoredDevices[0];

    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.querySelector('.recommendation').innerHTML = `
        <h4>${bestDevice.name}</h4>
        <p>Giá: ${bestDevice.price.toLocaleString()}₫</p>
        <p>Điểm phù hợp: ${Math.round(bestDevice.score)}/100</p>
        <p>Lý do: ${bestDevice.reasons.join(", ")}</p>
        <a href="${bestDevice.link}" target="_blank" class="buy-button">Xem chi tiết</a>
        <button onclick="shareResult('${bestDevice.name}')">Chia sẻ kết quả</button>
        
        ${scoredDevices.length > 1 ? `
        <div class="alternative-devices">
            <h5>Lựa chọn thay thế:</h5>
            ${scoredDevices.slice(1, 3).map(device => `
                <div class="alternative">
                    <p>${device.name} - ${device.price.toLocaleString()}₫ (Điểm: ${Math.round(device.score)})</p>
                </div>
            `).join('')}
        </div>
        ` : ''}
    `;
    
    // Cuộn đến kết quả
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Chia sẻ kết quả trên Twitter
function shareResult(deviceName) {
    const shareText = `Tôi vừa làm quiz trên PhoneAdvice và được đề xuất ${deviceName}! 📱 Thử ngay: https://noirnguyen2007.github.io/PhoneAdvice #DienThoaiGiaRe #TechVN`;
    window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`);
}

// Khởi tạo câu hỏi đầu tiên
showQuestion(currentQuestion);

// Hàm cuộn đến công cụ tư vấn
function scrollToAdvisor() {
    document.getElementById('advisor').scrollIntoView({ behavior: 'smooth' });
}

