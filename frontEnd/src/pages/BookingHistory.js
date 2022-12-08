import React,{useEffect} from 'react';
import PatientNavBar from '../components/PatientNavBar';

const BookingHistory = () => {
    let bookingData = localStorage.getItem("bookingAppointment")
    let newData = JSON.parse(bookingData)
    useEffect(() => {
      dataFunction(newData)
    }, [])
    

    const dataFunction = (newData) => {
        newData.bookingDetails.map((item,index) => {
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
    <div >BookingHistory</div>

<div className='col-md-8' style={{ marginRight: "auto", marginLeft: "auto" }}>
         <table class="table">
           <thead>
             <tr>
               <th scope="col">Doctor Name</th>
               <th scope="col">Date & Time</th>
               {/* <th scope="col">Time</th> */}
             </tr>
           </thead>
           <tbody>
             {newData.bookingDetails && newData.bookingDetails.map((data) => {
               return (
                <tr>
                    <td>{data.doctorEmail}</td>
                    <td>{data.dateAndTime}</td>
                    {/* <td>{data.time}</td> */}
                  </tr>
               )
             })}
           </tbody>
         </table>
       </div>
       </div>
     
       </>
  )
}

export default BookingHistory