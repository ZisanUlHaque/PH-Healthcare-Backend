import config from "../../config";
import { getBkashIdToken } from "../../lib/bkash";

const bookAppointment = async () => {
  //business logic

  const bkashIdToken = await getBkashIdToken();
  if (!bkashIdToken) {
    throw new Error("No Bkash Access Token Found");
  }
// console.log("bkashIdToken" , bkashIdToken,
//   "bkash_app_key" , config.bkash_app_key
// );
  const bkashCreatePaymentResponse = await fetch(
    `${config.bkash_base_url}/tokenized/checkout/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: bkashIdToken,
        "X-App-Key": config.bkash_app_key,
      },
      body: JSON.stringify({
        mode: "0011",
        payerReference: "01770618575",
        callbackURL: `${config.bkash_callback_url}/appointment/book-appointment/payment/callback`,
        amount: "1200",
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: "Inv0124",
      }),
    },
  );
//  console.log(bkashCreatePaymentResponse);
  const bkashCreatePaymentResult = await bkashCreatePaymentResponse.json()

  return bkashCreatePaymentResult
};

const bookAppointmentCallback =  () =>{
  return {
    success : true
  }
}
export const AppointmentServices = {
  bookAppointment,
  bookAppointmentCallback
};
