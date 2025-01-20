
document.getElementById('btn1').addEventListener('click', function(event) {
    event.preventDefault();
    const pdfUrl = 'bag1.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById("btn2").addEventListener('click', function(event) {
    event.preventDefault();
    const pdfUrl = 'bag 2.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);	
});

document.getElementById('btn3').addEventListener('click', function(event) {
    event.preventDefault();
    const pdfUrl = 'bag  3.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById("btn4").addEventListener('click', function(event) {
    event.preventDefault();
    const pdfUrl = 'bag 4.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);	
});

document.getElementById('btn5').addEventListener('click', function(event) {
    event.preventDefault();
    const pdfUrl = 'bag 5.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById("btn6").addEventListener('click', function(event) {
    event.preventDefault();
    const pdfUrl = 'bag 6.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);	
});

document.getElementById('btn7').addEventListener('click', function(event) {
    event.preventDefault();
    const pdfUrl = 'bag 7.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById("btn8").addEventListener('click', function(event) {
    event.preventDefault();
    const pdfUrl = 'bag 8.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);	
});
