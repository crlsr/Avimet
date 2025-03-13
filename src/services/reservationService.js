export const saveReservation = async (reservationData) => {
    // This is where you'd typically make an API call to your backend
    // to save the reservation data
    console.log('Saving reservation:', reservationData);
    
    // Simulating an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Reservation saved successfully' });
      }, 1000);
    });
  };