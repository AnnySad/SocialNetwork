import React, {Suspense} from 'react';
import {CircularProgress} from '@material-ui/core';


export const WithSuspense = (Component: any) => {
    return (props: any) => <Suspense fallback={<CircularProgress size={100}/>}>
        <Component {...props}/>
    </Suspense>
}