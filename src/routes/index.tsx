import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from '../routes/app.routes';
// import { useAuth } from '../hooks/auth';
// import { SignIn } from '../screens/SignIn';

type Props ={
    onReady: any
}

export function Routes({onReady}: Props){
  {/* const { user } =useAuth(); */}

  return(
    <NavigationContainer onReady={onReady} >
       {/* { user.id ? <AppRoutes/> : <SignIn/> } */}
       <AppRoutes/>
    </NavigationContainer>
  )
}