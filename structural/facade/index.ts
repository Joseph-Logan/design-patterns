import { PaymentSubsystem, PaymentTypes } from './payment.subsystem'
import { StorageTransactionSubsystem } from './storage-transaction.subsystem'

export class PaymentTransactionFacade {
  protected paymentSubSystem: PaymentSubsystem
  protected storageTransactionSubsystem: StorageTransactionSubsystem

  constructor() {
    this.paymentSubSystem = new PaymentSubsystem()
    this.storageTransactionSubsystem = new StorageTransactionSubsystem()
  }

  makePayment = (paymentMethod: PaymentTypes) => {
    let paymentResponse = null
    if (paymentMethod === PaymentTypes.PAYPAL) {
      paymentResponse = this.paymentSubSystem.payWithPayPal()
    }

    if (paymentMethod === PaymentTypes.STRIPE) {
      paymentResponse = this.paymentSubSystem.payWithStripe()
    }

    const storageTransactionResponse =
      this.storageTransactionSubsystem.storeTransaction()

    console.log(
      '[PAYMENT RESPONSE]',
      paymentResponse,
      '[STORAGE TRANSACTION RESPONSE]',
      storageTransactionResponse
    )
  }
}


const clientCode = () => {
  const paymentTransactionFacade = new PaymentTransactionFacade()

  paymentTransactionFacade.makePayment(PaymentTypes.PAYPAL)
  paymentTransactionFacade.makePayment(PaymentTypes.STRIPE)
}

clientCode()