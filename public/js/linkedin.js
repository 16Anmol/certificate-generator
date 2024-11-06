function updateCertificate() {
  document.getElementById('certName').textContent = document.getElementById('name').value;
  document.getElementById('certSchool').textContent = document.getElementById('schoolName').value;
  document.getElementById('certPosition').textContent = document.getElementById('position').value;
  document.getElementById('certEvent').textContent = document.getElementById('eventName').value;
  
  // Update the organizer name dynamically
  const organiserInput = document.getElementById('organiserName');
  const displayName = document.getElementById('displayName');
  displayName.textContent = organiserInput.value || 'Anmoldeep Singh'; // Default name if input is empty
  
  const date = new Date(document.getElementById('date').value);
  document.getElementById('certDate').textContent = `held on ${date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
}

// Add event listener for input/changes to update certificate dynamically
document.querySelectorAll('input, select').forEach(el => {
  el.addEventListener('change', updateCertificate);
});

// Function to download certificate as PDF
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

// Function to download certificate as PNG
function downloadAsPNG() {
  const certificate = document.getElementById('certificate');
  
  // Set white background
  const originalBackground = certificate.style.background;
  certificate.style.background = 'white';
  
  html2canvas(certificate, {
    scale: 2,
    backgroundColor: 'white',
    logging: false
  }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'certificate.png'; // Set the download name
    link.click(); // Simulate a click to trigger download
  }).finally(() => {
    certificate.style.background = originalBackground; // Restore background
  });
}

// Initialize certificate display
updateCertificate();

// Event listener for dynamic updates of the organiser name
const organiserInput = document.getElementById('organiserName');
const displayName = document.getElementById('displayName');
organiserInput.addEventListener('input', function() {
  displayName.textContent = organiserInput.value || 'Anmoldeep Singh'; // Default name if input is empty
});
