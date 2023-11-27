import React from 'react';
import ChatBot from 'react-simple-chatbot';

import { Segment } from 'semantic-ui-react';

export default function MiniStatement() {

// const acc_no = [
//   '123456789','987654321','789456123','321654987','741852963'
// ]
// for(int i=0;i<acc_)
  const steps = [
    // {
    //   id :'first',
    //   user:true,
      // validator: (value) => {
      // if (value === true){
      //   return true;
      // }
    //   trigger : 'Greet',

    // },
    {
      id: 'Greet',
      message: 'Instantly check your Balance',
      trigger: 'AskAccountNumber',
    },
    {
      id: 'AskAccountNumber',
      message: 'Please enter your 11 digit account number.',
      trigger: 'GetAccountNumber',
    },
    {
      id: 'GetAccountNumber',
      user: true,
      validator: (value) => {
        // Boolean fl = false
        // console.log(typeof acc_no[0]);
        if (value === '7418529630'){
          return true;
        }
        return 'Invalid account number. Please try again.';
      },
      trigger: 'AskDateOfBirth',
    },
    {
      id: 'AskDateOfBirth',
      message: 'Great! Now, please enter your date of birth (MM/DD/YYYY).',
      trigger: 'GetDateOfBirth',
    },
    {
      id: 'GetDateOfBirth',
      user: true,
      validator: (value) => {
        if (value === '24/11/2004') {
          return true;
        } else {
          return 'Invalid date of birth. Please try again.';
        }
      },
      trigger: 'DisplayBalance',
    },
    {
      id: 'DisplayBalance',
      message: 'Your account balance is $50,000',
      end: true,
    },
  ];

  return (
    <div>
      <Segment className='chat'>
        <ChatBot steps={steps} />
      </Segment>
    </div>
  );
}