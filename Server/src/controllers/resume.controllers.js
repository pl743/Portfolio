import path from 'path';

export const downloadPDF = (req, res) => {
  const filePath = path.join(
    process.cwd(), 'src/files/Resume_Parth.pdf'
  );

  res.download(filePath, 'Resume_Parth.pdf', (err) => {
    if (err && !res.headersSent) {
      console.error('Download error:', err);
      res.status(500).json({
        success: false,
        message: 'PDF resume download failed',
      });
    }
  });
};

export const downloadDOCX = (req, res) => {
  const filePath = path.join(
    process.cwd(), 'src/files/Resume_Parth.docx'
  );

  res.download(filePath, 'Resume_Parth.docx', (err) => {
    if (err && !res.headersSent) {
      console.error('Download error:', err);
      res.status(500).json({
        success: false,
        message: 'Word resume download failed',
      });
    }
  });
};
