import LayoutDefault from '../layout/LayoutDefault';
import Home from './../pages/Home/index';
import Cart from './../pages/Cart/index';
export const routes = [
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ]

  }
];