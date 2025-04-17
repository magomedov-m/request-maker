'use strict'

const doc = new jsPDF();

doc.text('это тестовые текст', 10, 10);
doc.save("a4.pdf");