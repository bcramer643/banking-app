export function deposit(amount) {
    console.log("Action called =>")
    return {
        type: 'DEPOSIT',
        payload: amount
    }
}

export function withdraw(amount) {
    return {
        type: 'WITHDRAW',
        payload: amount
    }
}

export function Requestloan(amount, purpose = '') {
    return {
        type: 'REQUEST_LOAN',
        payload: { amount, purpose },
    };
}

export function Payloan() {
    return {
        type: 'PAY_LOAN',
    };
}