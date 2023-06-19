import React from 'react'; //To understand JSX (HTML like syntax)

const Card = ({ name,email,id }) =>{ //Destructuring props in the brackets itself
  // const { name,email,id } = props; //Destructuring
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;