// Dữ liệu về vị trí và chữ cái trong ô chữ
const crosswordData = [
    //Từ số 1
    { row: 0, col: 15, letter: "M" },
    { row: 1, col: 15, letter: "Â" },
    { row: 2, col: 15, letter: "U" },
    { row: 3, col: 15, letter: "T" },
    { row: 4, col: 15, letter: "H" },
    { row: 5, col: 15, letter: "U" },
    { row: 6, col: 15, letter: "Ẫ" },
    { row: 7, col: 15, letter: "N" },
    
    //Từ số 2
    { row: 1, col: 5, letter: "L" },
    { row: 2, col: 5, letter: "Ợ" },
    { row: 3, col: 5, letter: "I" },
    { row: 4, col: 5, letter: "N" },
    { row: 5, col: 5, letter: "H" },
    { row: 6, col: 5, letter: "U" },
    { row: 7, col: 5, letter: "Ậ" },
    { row: 8, col: 5, letter: "N" },

    //Từ số 3
    { row: 2, col: 17, letter: "G" },
    { row: 3, col: 17, letter: "I" },
    { row: 4, col: 17, letter: "Á" },
    { row: 5, col: 17, letter: "T" },
    { row: 6, col: 17, letter: "R" },
    { row: 7, col: 17, letter: "Ị" },

    //Từ số 4
    { row: 4, col: 0, letter: "L" },
    { row: 4, col: 1, letter: "A" },
    { row: 4, col: 2, letter: "O" },
    { row: 4, col: 3, letter: "Đ" },
    { row: 4, col: 4, letter: "Ộ" },
    { row: 4, col: 5, letter: "N" },
    { row: 4, col: 6, letter: "G" },

    //Từ số 5 
    //Ngang
    { row: 5, col: 8, letter: "T" },
    { row: 5, col: 9, letter: "Á" },
    { row: 5, col: 10, letter: "I" },
    { row: 5, col: 11, letter: "S" },
    { row: 5, col: 12, letter: "Ả" },
    { row: 5, col: 13, letter: "N" },
    { row: 5, col: 14, letter: "X" },
    { row: 5, col: 15, letter: "U" },
    { row: 5, col: 16, letter: "Ấ" },
    { row: 5, col: 17, letter: "T" },

    //Dọc
    { row: 5, col: 8, letter: "T" },
    { row: 6, col: 8, letter: "T" },
    { row: 7, col: 8, letter: "T" },
    { row: 8, col: 8, letter: "T" },
    { row: 9, col: 8, letter: "T" },
    { row: 10, col: 8, letter: "T" },
    { row: 11, col: 8, letter: "T" },

    //Từ số 6
    { row: 6, col: 3, letter: "V" },
    { row: 7, col: 3, letter: "Ố" },
    { row: 8, col: 3, letter: "N" },

    //Từ số 7
    { row: 8, col: 1, letter: "C" },
    { row: 8, col: 2, letter: "Ô" },
    { row: 8, col: 3, letter: "N" },
    { row: 8, col: 4, letter: "G" },
    { row: 8, col: 5, letter: "N" },
    { row: 8, col: 6, letter: "H" },
    { row: 8, col: 7, letter: "Â" },
    { row: 8, col: 8, letter: "N" },

    //Từ số 8
    //Ngang
    { row: 11, col: 7, letter: "T" },
    { row: 11, col: 8, letter: "Ư" },
    { row: 11, col: 9, letter: "B" },
    { row: 11, col: 10, letter: "Ả" },
    { row: 11, col: 11, letter: "N" },

    //Dọc
    { row: 11, col: 7, letter: "T" },
    { row: 12, col: 7, letter: "T" },
    { row: 13, col: 7, letter: "T" },
    { row: 14, col: 7, letter: "T" },
    { row: 15, col: 7, letter: "T" },
    { row: 16, col: 7, letter: "T" },
    { row: 17, col: 7, letter: "T" },
  ];
  
  // Tạo bảng ô chữ
  const container = document.getElementById('crossword-container');
  
  // Tạo 18x18 ô
  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 18; j++) {
      const input = document.createElement('input');
      input.setAttribute('maxlength', '1'); // Chỉ cho phép nhập 1 ký tự
  
      // Kiểm tra xem ô này có phải là một phần của ô chữ không
      const cellData = crosswordData.find(cell => cell.row === i && cell.col === j);
      if (cellData) {
        input.dataset.correct = cellData.letter; // Lưu đáp án đúng
      } else {
        input.disabled = true; // Vô hiệu hóa các ô không dùng
      }
  
      container.appendChild(input);
    }
  }
  
  // Xử lý sự kiện khi bấm nút "Kiểm tra Đáp Án"
  document.getElementById('checkButton').addEventListener('click', () => {
    let correct = true;
  
    // Kiểm tra tất cả các ô
    document.querySelectorAll('#crossword-container input').forEach(input => {
      if (!input.disabled && input.value.toUpperCase() !== input.dataset.correct) {
        correct = false;
        input.style.borderColor = 'red'; // Đánh dấu ô sai
      } else {
        input.style.borderColor = 'green'; // Đánh dấu ô đúng
      }
    });
  
    // Hiển thị kết quả
    const result = document.getElementById('result');
    if (correct) {
      result.textContent = 'Chúc mừng! Bạn đã giải đúng ô chữ!';
      result.style.color = 'green';
    } else {
      result.textContent = 'Có lỗi trong câu trả lời của bạn. Hãy thử lại!';
      result.style.color = 'red';
    }
  });
  