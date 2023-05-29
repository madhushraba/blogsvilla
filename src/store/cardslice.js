import { createSlice } from '@reduxjs/toolkit';
// import PostData from '../post/postlist'

const cardslice = createSlice({
  name: 'card',
  initialState: {
    stateinslice: [
      // {...PostData},
      {
        title: 'Rohu',
        p: 'topper',
        img: 'https://images.pexels.com/photos/4041384/pexels-photo-4041384.jpeg?auto=compress&cs=tinysrgb&w=600',
      },
      { title: 'How is tech chsnging the industry', p: 'bitchk tukgfcjkmi uhgjfmckgjcfvm', img: 'https://images.pexels.com/photos/9072336/pexels-photo-9072336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { title: 'Baby', p: 'topper', img: 'https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { title: 'Madhushraba', p: 'bitch', img: 'https://images.pexels.com/photos/112314/pexels-photo-112314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.stateinslice.unshift(action.payload);
    },
  },
});

//  PostData
export const { add } = cardslice.actions;
export const cardslicer = cardslice.reducer;

export default cardslicer;
