function updateCertificate() {
    document.getElementById('certName').textContent = document.getElementById('name').value;
    document.getElementById('certSchool').textContent = document.getElementById('schoolName').value;
    document.getElementById('certPosition').textContent = document.getElementById('position').value;
    document.getElementById('certEvent').textContent = document.getElementById('eventName').value;
    const date = new Date(document.getElementById('date').value);
    document.getElementById('certDate').textContent = `held on ${date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
  }
  
  document.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('change', updateCertificate);
  });
  
  function printCertificate() {
    window.print();
  }
  
  async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const certificate = document.getElementById('certificate');
    
    // Set white background
    const originalBackground = certificate.style.background;
    certificate.style.background = 'white';
    
    try {
        const canvas = await html2canvas(certificate, {
            scale: 2,
            backgroundColor: 'white',
            logging: false
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('l', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('certificate.pdf');
    } finally {
        certificate.style.background = originalBackground; // Restore background
    }
  }
  
  // Initialize certificate display
  updateCertificate();
  