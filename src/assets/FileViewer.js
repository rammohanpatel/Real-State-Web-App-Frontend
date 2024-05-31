const FileViewer = ({ url }) => {
    const fileType = url.split('.').pop().toLowerCase();
    const isPDF = fileType === 'pdf';
    const isPPT = fileType === 'ppt' || fileType === 'pptx';
  
    if (isPDF || isPPT) {
      return (
        <iframe
          src={`https://docs.google.com/gview?url=${url}&embedded=true`}
          className="w-6/12 h-96"
          
          frameBorder="0"
        />
      );
    }
    return null;
  };

export default FileViewer;