{text?.trim() && (
  <div
    className="fade-up"
    style={{
      position: 'absolute',
      top: '18%',
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'white',
      textAlign: 'center',
      padding: '8px 12px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '12px',
      fontSize: '16px',
      whiteSpace: 'pre-wrap',
      maxWidth: '80%',
      lineHeight: '1.5',
    }}
  >
    {text}
  </div>
)}
