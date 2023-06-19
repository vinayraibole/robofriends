import React from "react";
import Card from "./Card";

const CardList = ({robots}) =>{
  return(
    <div>
      {
        robots.map((user,i) => {
          return (
            <Card 
              key={i} 
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email}
            />
          );
        }) //Using Map to get all the variables from the robots file. We use key so that React knows which element gets deleted and doesn't change the entire DOM hence minimizing the workload
      }
    </div>
  );
}

export default CardList;