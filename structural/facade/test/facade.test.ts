import { beforeEach, describe, expect, it, vi } from 'vitest'
import { PaymentSubsystem } from '../payment.subsystem'
import { StorageTransactionSubsystem } from '../storage-transaction.subsystem'
import { PaymentTransactionFacade } from '../'


describe('Payment Subsystem', () => {
  let paymentSubsystem: PaymentSubsystem
  
  beforeEach(() => {
    paymentSubsystem = new PaymentSubsystem()
    vi.spyOn(paymentSubsystem, 'payWithPayPal')
    vi.spyOn(paymentSubsystem, 'payWithStripe')
  })

  it('should throw an error if PaymentSubsystem is not a class', () => {
    expect(PaymentSubsystem).toBeTypeOf('function')
  })

  it('should throw an error if PaymentSubsystem has not payWithPayPal and payWithStripe methods', () => {
    expect(paymentSubsystem).property('payWithPayPal')
    expect(paymentSubsystem).property('payWithStripe')
  })

  it('should throw an error if payWithPayPal does not return an action', () => {
    const mock = vi.fn().mockImplementation(paymentSubsystem.payWithPayPal)
    mock()
    expect(mock).toHaveReturnedWith({
      action: 'Payed with PayPal'
    })
  })

  it('should throw an error if payWithStripe does not return an action', () => {
    const mock = vi.fn().mockImplementation(paymentSubsystem.payWithStripe)
    mock()
    expect(mock).toHaveReturnedWith({
      action: 'Payed with Stripe'
    })
  })
})

describe('Storage Transactions Subsystem', () => {
  let storageTransactionSubsystem: StorageTransactionSubsystem
  
  beforeEach(() => {
    storageTransactionSubsystem = new StorageTransactionSubsystem()
    vi.spyOn(storageTransactionSubsystem, 'storeTransaction')
  })

  it('should throw an error if StorageTransactionSubsystem is not a class', () => {
    expect(StorageTransactionSubsystem).toBeTypeOf('function')
  })

  it('should throw an error if StorageTransactionSubsystem has not storeTransaction method', () => {
    expect(storageTransactionSubsystem).property('storeTransaction')
  })

  it('should throw an error if storeTransaction does not return an action', () => {
    const mock = vi.fn().mockImplementation(storageTransactionSubsystem.storeTransaction)
    mock()
    expect(mock).toHaveReturnedWith({
      message: 'Transaction was storaged'
    })
  })
})

describe('Payment Transaction Facade', () => {
  let paymentTransactionFacade: PaymentTransactionFacade
  
  beforeEach(() => {
    paymentTransactionFacade = new PaymentTransactionFacade()
    vi.spyOn(paymentTransactionFacade, 'makePayment')
  })

  it('should throw an error if PaymentTransactionFacade is not a class', () => {
    expect(PaymentTransactionFacade).toBeTypeOf('function')
  })

  it('should throw an error if PaymentTransactionFacade has not makePayment method', () => {
    expect(paymentTransactionFacade).property('makePayment')
  })

  it('should throw an error if storeTransaction does not return an action', () => {
    const mock = vi.fn().mockImplementation(paymentTransactionFacade.makePayment)
    mock()
    expect(mock).toHaveReturnedWith(undefined)
  })
})