type StorageTransactionResponse = {
  message: string
}

interface StorageTransactionMethods {
  storeTransaction: () => StorageTransactionResponse
}
export class StorageTransactionSubsystem implements StorageTransactionMethods {
  storeTransaction = (): StorageTransactionResponse => {
    return {
      message: 'Transaction was storaged'
    }
  }
}