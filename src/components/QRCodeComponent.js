import React from 'react';
import { QRCodeSVG } from 'qrcode.react';



const QRCodeComponent = () => {
  const url = window.location.href; // Current URL for scanning

  return (
    <div>
      <h2>Scan the QR Code to Join!</h2>
      <QRCodeSVG value={url} size={256} /> {/* You can adjust the size as needed */}
    </div>
  );
};

export default QRCodeComponent;
