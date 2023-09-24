import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({

  name: 'counter',
  initialState: { 
    value: 5, // 
  },
  reducers: { // these are methods that perform certain actions on the state. 
    increment: (state) => { 
      state.value += 1
    },
    decrement: (state) => { 
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// useSelector selects the state to manipulate so useSelector(state => state.counter.value)
// selects the state so that we can manipulate or display it. 
// useDispatch is used in the files so use the below methods. 

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer



