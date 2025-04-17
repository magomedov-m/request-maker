'use strict'

let buttonDownload = document.querySelector('.download')
buttonDownload.addEventListener('click', generateText);

function generateText() {
    const {jsPDF} = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica");
    doc.text('hey girl, do you wanna drink this tea', 10, 10);
    doc.text('Я, ФИО, дата рождения, проживающий по адресу: адрес,', 10, 20);
    doc.text('работаю в название организации на должности должность,', 10, 30);
    doc.text('прошу принять меня в члены первичной профсоюзной организации.', 10, 40);
    doc.text('Согласен(на) с уставом профсоюза и обязуюсь выполнять его требования.', 10, 50);
    doc.text('Дата: дата', 10, 60);
    doc.text('Подпись: ____________________', 10, 70);

            // Сохранение PDF
    doc.save('заявление_о_вступлении_в_профсоюз.pdf');
}