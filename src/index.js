import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { Mcard } from './View/Block/Block';
import { Info } from './View/Block/Info';





const routes = createBrowserRouter(

[

  {
    path :'/',
    element :<Mcard/>
  },

  {
    path: '/info/:id',
    element:<Info/>
  }
]

)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<RouterProvider router={routes}/>

</>
);

