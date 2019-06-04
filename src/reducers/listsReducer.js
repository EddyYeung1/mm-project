const initialState = [
  {
    title: "Applied",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Test text"
      },
      {
        id: 1,
        text: "test text2"
      }
    ]
  },
  {
    title: "Rejected",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Test text"
      },
      {
        id: 1,
        text: "test text2"
      },
      {
        id: 2,
        text: "test text3"
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
