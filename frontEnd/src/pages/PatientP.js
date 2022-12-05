import React from 'react'
import Patient from './Patient';
import PatientPortal from './PatientPortal';

export default function PatientP() {
    let doc1 = 'yes';
  return (
    <div>
        {doc1=='yes'? <Patient/> : <PatientPortal/>}
    </div>
  )
}
