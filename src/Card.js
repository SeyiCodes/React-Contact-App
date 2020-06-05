import React from 'react';
// import Api from './Api'

const Card = ({name, email, id}) => {
    return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw3 shadow-6'>
    <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
    <div>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
   </div>
   );
    }



    

export default Card;