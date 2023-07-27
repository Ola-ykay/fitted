import React from 'react';
import { Link } from 'react-router-dom';

const AccountCreated = () => {
    return (
<div className='account_container'>
    <img src='sidebar.png' alt='sidebar' className='acct_sidebar' />
<div className='account_created_sec'>
            <img src='success.png' alt='success' />
            <h1>Yay!!!</h1>
            <p>Your application to become a vetted tailor has been sent,
                 a Fitted Agent will get in touch with you regard the next steps.
                  Goodluck!</p>
                  <button className='btn'>
                    <Link to='/dashboard'>Go to Dashboard
                        </Link></button>
           

        </div>
</div>

        
    )
}

export default AccountCreated;