import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {

  const { name, userId } = useSelector(store => store.Authreducer);

    // console.log()
    if(!userId){
        return <Navigate to="/login" state={{ from: history.location }} />
    }
  return children;
}

export default PrivateRoute