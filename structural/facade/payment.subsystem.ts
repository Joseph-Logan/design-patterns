type TPaymentResponse = {
  action: string
}

export interface PaymentMethods {
  payWithPayPal: () => TPaymentResponse
  payWithStripe: () => TPaymentResponse
}

export enum PaymentTypes {
  PAYPAL = 'PayPal',
  STRIPE = 'Stripe'
}

export class PaymentSubsystem implements PaymentMethods {
  payWithPayPal = (): TPaymentResponse => {
    const response: TPaymentResponse = {
      action: 'Payed with PayPal'
    }

    return response
  }

  payWithStripe = (): TPaymentResponse => {
    const response: TPaymentResponse = {
      action: 'Payed with Stripe'
    }
    
    return response
  }
}