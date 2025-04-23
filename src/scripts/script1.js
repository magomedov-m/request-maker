'use strict';

const downloadBtn = document.querySelector('.downloadBtn');

async function exportToPDF() {
    const { jsPDF } = window.jspdf; // Получаем jsPDF из глобального объекта
    const doc = new jsPDF();

    // Получаем элемент для рендеринга
    const element = document.getElementById('content');
    
    // Рендерим элемент в canvas
    const canvas = await html2canvas(element, { scale: 2 });

    // Преобразуем canvas в изображение
    const imgData = canvas.toDataURL('image/png');

    // Настройка PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    // Добавление изображения в PDF
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Заявление_о_вступлении_в_профсоюз.pdf'); // Сохранение PDF
}

// Обработчик клика на кнопку
downloadBtn.addEventListener('click', exportToPDF);
