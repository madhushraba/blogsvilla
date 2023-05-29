import { createSlice } from "@reduxjs/toolkit";
// import PostData from '../post/postlist'

const cardslice = createSlice({
  name: "card",
  initialState: {
    stateinslice: [
      // {...PostData},
      {
        title: "Content Creators, Don’t Get Addicted to Your Stats        ",
        p: "As a content creator, you need your stats to analyze your content as well as your audience. But that doesn’t mean you have to analyze things every few minutess it Youtube views or Blog traffic, are you a person who checks your stats every 10 minutes? The chances are high that you are probably addicted to your own stats.",
        img: "https://images.pexels.com/photos/4041384/pexels-photo-4041384.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        title: "How is tech chsnging the industry",
        p: "Side hustles are a great way to earn extra money and do something you love. They can also be a fun way to meet new people, gain valuable skills and experience, and even discover the path for your future career.",
        img: "https://images.pexels.com/photos/9072336/pexels-photo-9072336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "How I Use AI to Make Money with Faceless YouTube Channels",
        p: "As a full-time content creator, I make money online in a lot of different ways, including publishing books on Amazon/Audible, writing for Medium and NewsBreak, creating digital products, and doing affiliate marketing.",
        img: "https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "The 10 BEST Side Hustles — How I Make $10,000 / Month",
        p: "Side hustles are a great way to earn extra money and do something you love. They can also be a fun way to meet new people, gain valuable skills and experience, and even discover the path for your future career.",
        img: "https://images.pexels.com/photos/112314/pexels-photo-112314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
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
