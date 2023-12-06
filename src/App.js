import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deposit, withdraw,Requestloan,Payloan } from './acctActions';


function App() {
  const[depositAmount, setDepositAmount] = useState()
  const[WithdrawAmount, setWithdrawAmount] = useState()
  const[LoanAmount, setLoanAmount] =useState()
  const[LoanPurpose, setLoanPurpose]=useState()  

  const stateValues = useSelector(state=>state)
  const dispatch = useDispatch();
  let amount = stateValues.balance;
  let Lamount = stateValues.loan;
  let Lpurpose = stateValues.loanpurpose;
  let Loanamount = stateValues.loanamount;

    return (
      <div className='contaianer'>
          <div>  
          <h2 > Bank Operation Application</h2></div>
          <div >

              <label for='deposit'>Deposit</label>
              <input 
                type='number' 
                id='deposit' 
                placeholder='enter deposit amount'
                onChange={(e)=>{
                setDepositAmount(+e.target.value)
              }}/>
              <button onClick={()=>dispatch(deposit(depositAmount))}>DEPOSIT</button><br/>
              
              <label for='withdraw'>Withdraw</label>
              <input type='number' 
                id='withdraw'  
                placeholder='enter withdraw amount'
                onChange={(e)=>{setWithdrawAmount(+e.target.value)}}/>
              <button onClick={()=>dispatch(withdraw(WithdrawAmount))}>WITHDRAW </button><br/>
  
              <label for='requestLoan'>Request Loan</label>
              <input type='number' 
              placeholder='loan amount'
              id='requestLoan' 
              onChange={(e)=>{setLoanAmount(+e.target.value)}}/>

              <input type='text' 
              placeholder='loan purpose' 
              id='loan Purpose' onChange={(e)=>{setLoanPurpose(e.target.value)}}/>
              <button onClick={()=>dispatch(Requestloan(LoanAmount, LoanPurpose))}>REQUEST LOAN </button><br/>



              <label for='payBack'>Pay Back ${stateValues.loanamount}</label>
              <button onClick={()=>dispatch(Payloan(stateValues.loan))}>PAY LOAN</button><br/>  
                        
              <label>Balance: {stateValues.balance}</label><br></br><br></br>
              <label>Loan Amount: {stateValues.loan}</label><br></br><br></br>
              <label>Loan Purpose:{ stateValues.loanpurpose}</label>

          </div>
      
      </div>
    );
  

 
}

export default App;