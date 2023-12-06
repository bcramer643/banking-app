const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""

}

export default function Bankreducer(state = initialState, action) {

    switch (action.type) {
        case "DEPOSIT":
            return { ...state, balance: state.balance + action.payload }

        case "WITHDRAW":
            return { ...state, balance: state.balance - action.payload }

        case "REQUEST_LOAN":
            if (state.loan > 0) return state;
            return { ...state, loan: action.payload.amount, loanpurpose: action.payload.purpose, balance: state.balance + action.payload.amount }

        case "PAY_LOAN":
            return { ...state, loan: 0, loanpurpose: "", balance: state.balance - state.loan, loanamount: state.loan }

        default:
            return state;

    }
}
