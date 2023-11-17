import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QrReader } from 'react-qr-reader';
import { attendanceMarkedSuccess, markAttendance } from '../actions/qrActionStudent';

const StudentAttendanceScanner = () => {
  const dispatch = useDispatch();
  const { scannedData } = useSelector(state => state.qrScanner);

  const handleScan = (data) => {
    if (data) {
      dispatch(attendanceMarkedSuccess(data));
      dispatch(markAttendance(data)); 
    }
  };

  const handleError = (err) => {
    // Handle errors during QR scanning
    console.error(err);
  };

  return (
    <div style={{ position: "absolute", width: '40%', height: '40%', top: "300px" }}>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        facingMode={"environment"} 
      />
      <p>Scanned Data: {scannedData}</p>
    </div>
  );
};

export default StudentAttendanceScanner;
