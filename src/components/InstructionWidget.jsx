import React from 'react';

const InstructionWidget = () => {
  return (
    <div
      className="bg-gray-500 border-2 border-blue-200 rounded-2xl p-4 overflow-y-auto flex flex-col justify-center"
      style={{ height: '36rem' }} // Fixed height
      data-testid="instruction-widget"
    >
      <h2 className="text-lg font-semibold">Solution Challenge 2023</h2>
      <ul className="list-decimal list-inside space-y-2 font-semibold"> {/* Semi-bold text */}
        <li> A website addressing antenatal care, fetal precautions, and doctor-advised medications is needed to save lives.</li>
      </ul>

      <h3 className="mt-6 text-lg font-semibold">Tool For Monitoring Ground Personnel</h3>
      <ul className="list-disc list-inside space-y-2 font-semibold"> {/* Semi-bold text */}
        <li>To design a remote platform to track police officers using technologies like NFC ,GPS and ensure adherence to assigned posts.</li>
      </ul>

      <h4 className="mt-6 text-lg font-semibold">Proctored Exam Tool</h4>
      <ol className="list-decimal list-inside space-y-2 font-semibold"> {/* Semi-bold text */}
        <li>  The proposed "ProctoredEye" is a desktop application designed to enhance the integrity of online examinations. Facial recognition, real-time monitoring, and behavior checks to prevent cheating.</li>
      </ol>

      <h5 className="mt-6 text-lg font-semibold">Chat application using WebSockets </h5>
      <ul className="list-disc list-inside space-y-2 font-semibold"> {/* Semi-bold text */}
        <li> A chat application using WebSockets enables real-time, bidirectional communication between clients and servers, allowing instant message exchange without the need for repeated HTTP requests.</li>
      </ul>
      
    </div>
  );
};

export default InstructionWidget;
