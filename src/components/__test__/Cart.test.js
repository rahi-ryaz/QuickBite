import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA_NAME from '../mocks/mockResMenu.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import Header from "../Header.js"
import "@testing-library/jest-dom"
import Cart from "../Cart.js"


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  });
});

it('should load Restauarant Menu component', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <RestaurantMenu />  
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText('Recommended (20)');
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId('foodItems').length).toBe(20);

  const addBtn=screen.getAllByRole("button", {name :"Add +"});

  fireEvent.click(addBtn[0]);

 expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

 fireEvent.click(addBtn[1]);

 expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

 expect(screen.getAllByTestId("foodItems").length).toBe(22);

 fireEvent.click(screen.getByRole("button", {name :"Clear Cart"}));

 expect(screen.getAllByTestId("foodItems").length).toBe(20);
 
 expect(screen.getByText("Cart Is Empty, Add Items to the cart!")).toBeInTheDocument();





});
