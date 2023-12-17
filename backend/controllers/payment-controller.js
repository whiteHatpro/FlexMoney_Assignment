import Payment from '../model/Payment';


export const paymentHandler = async (userId, month, amount) => {
  try {
  
    const newPayment = new Payment({
      user: userId,
      month,
      amount,
    });

   
    const savedPayment = await newPayment.save();

    return savedPayment;
  } catch (error) {

    console.error('Error processing payment:', error);
    throw error;
  }
};

