import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Counter, counterReducer } from '..';
import { count } from 'console';

describe('<Counter /> component', () => {
  
  it('should render correctly', () => {
    render(<Counter />);

    const countLabel = screen.getByTestId('count-label');
    const countValue = screen.getByTestId('count-value');
    const incrementButton = screen.getByTestId('increment-button');
    const decrementButton = screen.getByTestId('decrement-button');
  
    expect(countLabel).toBeInTheDocument();
    expect(countValue).toBeInTheDocument();
    expect(countValue).toHaveTextContent('0');
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  it('should render correctly with initial state specified', () => {
    render(<Counter initialState={{count: 5}}/>);

    const countLabel = screen.getByTestId('count-label');
    const countValue = screen.getByTestId('count-value');
    const incrementButton = screen.getByTestId('increment-button');
    const decrementButton = screen.getByTestId('decrement-button');
  
    expect(countLabel).toBeInTheDocument();
    expect(countValue).toBeInTheDocument();
    expect(countValue).toHaveTextContent('5');
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  it('should increment count correctly when clicking on the + button', async () => {
    render(<Counter />);

    const countValue = screen.getByTestId('count-value');
    const incrementButton = screen.getByTestId('increment-button');
    
  
    expect(countValue).toHaveTextContent('0');
    await userEvent.click(incrementButton);
    expect(countValue).toHaveTextContent('1');

    await userEvent.dblClick(incrementButton);
    expect(countValue).toHaveTextContent('3');
  });

  it('should decrement count correctly when clicking on the - button', async () => {
    render(<Counter />);

    const countValue = screen.getByTestId('count-value');
    const decrementButton = screen.getByTestId('decrement-button');
  
    expect(countValue).toHaveTextContent('1');
    await userEvent.click(decrementButton);
    expect(countValue).toHaveTextContent('0');

    await userEvent.dblClick(decrementButton);
    expect(countValue).toHaveTextContent('-1')
      });
  });


describe('counterReducer', () => {
  it('should increment the count by 1 when the action type is INCREMENT', () => {
    const initialState = {count:0};
    const action = {type:"INCREMENT"};
    const newState = counterReducer(initialState,action);
    expect(newState.count).toBe(1);
  });

  it('should decrement the count by 1 when the action type is DECREMENT', () => {
    const initialState = {count:0};
    const action = {type :"DECREMENT"};
      const newState = counterReducer(initialState,action);
      expect(newState.count).toBe(-1);
      });

  it('should not increment or decrement the count when the action type does not match DECREMENT or INCREMENT', () => {
    const initialState = { count :0};
    const action = {type:"UNKNOWN ACTION"};
    const newState = counterReducer(initialState,action);
    expect(newState.count).toBe("0");
  });
});

