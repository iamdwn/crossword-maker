// Dữ liệu về vị trí và chữ cái trong ô chữ
const crosswordData10 = [
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

  const crosswordData7 = [
    //Từ số 1
    { row: 0, col: 9, letter: "C" },
    { row: 1, col: 9, letter: "Ô" },
    { row: 2, col: 9, letter: "N" },
    { row: 3, col: 9, letter: "G" },
    { row: 4, col: 9, letter: "N" },
    { row: 5, col: 9, letter: "H" },
    { row: 6, col: 9, letter: "Â" },
    { row: 7, col: 9, letter: "N" },

    //Từ số 2
    { row: 1, col: 15, letter: "T" },
    { row: 2, col: 15, letter: "Á" },
    { row: 3, col: 15, letter: "I" },
    { row: 4, col: 15, letter: "S" },
    { row: 5, col: 15, letter: "Ả" },
    { row: 6, col: 15, letter: "N" },
    { row: 7, col: 15, letter: "X" },
    { row: 8, col: 15, letter: "U" },
    { row: 9, col: 15, letter: "Ấ" },
    { row: 10, col: 15, letter: "T" },

    //Từ số 3
    //Ngang
    { row: 3, col: 3, letter: "L" },
    { row: 3, col: 4, letter: "A" },
    { row: 3, col: 5, letter: "O" },
    { row: 3, col: 6, letter: "Đ" },
    { row: 3, col: 7, letter: "Ộ" },
    { row: 3, col: 8, letter: "N" },
    { row: 3, col: 9, letter: "G" },

    //Dọc
    { row: 3, col: 3, letter: "L" },
    { row: 4, col: 3, letter: "L" },
    { row: 5, col: 3, letter: "L" },
    { row: 6, col: 3, letter: "L" },
    { row: 7, col: 3, letter: "L" },
    { row: 8, col: 3, letter: "L" },
    { row: 9, col: 3, letter: "L" },
    { row: 10, col: 3, letter: "L" },

    //Từ số 4
    { row: 5, col: 13, letter: "T" },
    { row: 6, col: 13, letter: "H" },
    { row: 7, col: 13, letter: "Ặ" },
    { row: 8, col: 13, letter: "N" },
    { row: 9, col: 13, letter: "G" },
    { row: 10, col: 13, letter: "D" },
    { row: 11, col: 13, letter: "Ư" },

    //Từ số 5
    { row: 6, col: 8, letter: "M" },
    { row: 6, col: 9, letter: "Â" },
    { row: 6, col: 10, letter: "U" },
    { row: 6, col: 11, letter: "T" },
    { row: 6, col: 12, letter: "H" },
    { row: 6, col: 13, letter: "U" },
    { row: 6, col: 14, letter: "Ẫ" },
    { row: 6, col: 15, letter: "N" },

    //Từ số 6
    { row: 7, col: 0, letter: "T" },
    { row: 7, col: 1, letter: "Í" },
    { row: 7, col: 2, letter: "C" },
    { row: 7, col: 3, letter: "H" },
    { row: 7, col: 4, letter: "L" },
    { row: 7, col: 5, letter: "U" },
    { row: 7, col: 6, letter: "Ỹ" },
  ]
  
  const crosswordData5 = [
    //Từ số 1
    { row: 0, col: 8, letter: "T" },
    { row: 1, col: 8, letter: "H" },
    { row: 2, col: 8, letter: "Ặ" },
    { row: 3, col: 8, letter: "N" },
    { row: 4, col: 8, letter: "G" },
    { row: 5, col: 8, letter: "D" },
    { row: 6, col: 8, letter: "Ư" },

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
    { row: 1, col: 10, letter: "M" },
    { row: 2, col: 10, letter: "Â" },
    { row: 3, col: 10, letter: "U" },
    { row: 4, col: 10, letter: "T" },
    { row: 5, col: 10, letter: "H" },
    { row: 6, col: 10, letter: "U" },
    { row: 7, col: 10, letter: "Ẫ" },
    { row: 8, col: 10, letter: "N" },

    //Từ số 4
    { row: 3, col: 3, letter: "T" },
    { row: 3, col: 4, letter: "Á" },
    { row: 3, col: 5, letter: "I" },
    { row: 3, col: 6, letter: "S" },
    { row: 3, col: 7, letter: "Ả" },
    { row: 3, col: 8, letter: "N" },
    { row: 3, col: 9, letter: "X" },
    { row: 3, col: 10, letter: "U" },
    { row: 3, col: 11, letter: "Ấ" },
    { row: 3, col: 12, letter: "T" },

    //Từ số 5
    { row: 8, col: 0, letter: "L" },
    { row: 8, col: 1, letter: "A" },
    { row: 8, col: 2, letter: "O" },
    { row: 8, col: 3, letter: "Đ" },
    { row: 8, col: 4, letter: "Ộ" },
    { row: 8, col: 5, letter: "N" },
    { row: 8, col: 6, letter: "G" },
  ]

const container = document.getElementById('crossword-container');

document.getElementById('generateButton').addEventListener('click', () => {
    const questionCount = parseInt(document.getElementById('questionCount').value);
    let rows, cols;

    if (questionCount === 5) {
      rows = 9; 
      cols = 13; 
      crosswordData = crosswordData5;

      document.getElementById('crossword-container').style.gridTemplateColumns = 'repeat(13, 40px)';
      document.getElementById('crossword-container').style.gridTemplateRows = 'repeat(9, 40px)';
    } else if (questionCount === 7) {
      rows = 12; 
      cols = 16; 
      crosswordData = crosswordData7;

      document.getElementById('crossword-container').style.gridTemplateColumns = 'repeat(16, 40px)';
      document.getElementById('crossword-container').style.gridTemplateRows = 'repeat(12, 40px)';
    } else if (questionCount === 10) {
      rows = 18;
      cols = 18; 
      crosswordData = crosswordData10;

      document.getElementById('crossword-container').style.gridTemplateColumns = 'repeat(18, 40px)';
      document.getElementById('crossword-container').style.gridTemplateRows = 'repeat(18, 40px)';
    }
  
    container.innerHTML = '';
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const input = document.createElement('input');
        input.setAttribute('maxlength', '1'); 
  
        const cellData = crosswordData.find(cell => cell.row === i && cell.col === j);
        if (cellData) {
          input.dataset.correct = cellData.letter; 
        } else {
          input.disabled = true;
        }
  
        container.appendChild(input);
      }
    }
  });  

document.getElementById('checkButton').addEventListener('click', () => {
  let correct = true;

  document.querySelectorAll('#crossword-container input').forEach(input => {
    if (!input.disabled && input.value.toUpperCase() !== input.dataset.correct) {
      correct = false;
      if (input.value.toUpperCase() !== '') 
        input.style.backgroundColor = '#e48989'; 
      input.style.borderColor = 'red'; 
    } else {
      input.style.borderColor = 'green'; 
      if (!input.disabled)
      input.style.backgroundColor = '#71c58d';
    }
  });

  const result = document.getElementById('result');
  if (correct) {
    result.textContent = 'Chúc mừng! Bạn đã giải đúng ô chữ!';
    result.style.color = 'green';
  } else {
    result.textContent = '';
    result.style.color = 'red';
  }
});

function showAllAnswers() {
}