import React,{useEffect} from 'react';
import PatientNavBar from '../components/PatientNavBar';

const BookingHistory = () => {
    let bookingData = localStorage.getItem("bookingAppointment")
    let entirePatientData = JSON.parse(localStorage.getItem("EntirePatientDetails"))
    let newBookingData = JSON.parse(bookingData)
    console.log(entirePatientData)
    let newData = JSON.parse(bookingData)
    useEffect(() => {
      dataFunction(newData)
    }, [])
    

    const dataFunction = (newData) => {
        newData?.bookingDetails.map((item,index) => {
            console.log(item.dateAndTime)
            let newDate = new Date(item.dateAndTime);
            console.log(newDate);
            item.date = newDate.toLocaleString();
            let mainDate = item.date.split(',')
            item.date = mainDate[0]
            item.time = mainDate[1];
        })
          console.log("newData: ",newData)
    }
    
  return (
    <>
    <PatientNavBar/>
    <div style={{marginTop: "50px"}}>
    <h4 className='m-5'>Booking History</h4>
 {newBookingData?.fullName === entirePatientData?.fullName ? 
<div className='col-md-8' style={{ marginRight: "auto", marginLeft: "auto" }}>
         <table class="table">
           <thead>
             <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
               <th scope="col">Doctor Name</th>
             </tr>
           </thead>
           <tbody>
             {newData.bookingDetails && newData.bookingDetails.map((data) => {
               return (
                <tr>
                    <td>{data.date}</td>
                    <td>{data.time}</td>
                    <td>{data.doctorEmail}</td>
                  </tr>
               )
             })}
           </tbody>
         </table>
       </div> : <>
             <h4>You don't have any recent bookings</h4>
       </>}
       </div>
     
       </>
  )
}

export default BookingHistory