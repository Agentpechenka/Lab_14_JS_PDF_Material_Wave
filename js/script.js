document.getElementById('download').addEventListener('click', function() {
    const element = document.querySelector('.resume-container');
    html2pdf()
        .from(element)
        .save('резюме.pdf');
});
