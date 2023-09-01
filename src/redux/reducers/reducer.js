// import{INCREMENT, DECREMENT, COUNTDOWN, COUNTDOWNATZERO, RESET,}from "../actions";



// const initialState = { time: { h: 0, m: 0, s: 0 }, seconds: 0 };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT: // on clicking "+"
//             return {
//                 ...state,
//                 seconds: state.seconds + 60,
//                 time: action.secToTime(state.seconds + 60),
//             };
//         case DECREMENT: // on clicking "-"
//             return {
//                 ...state,
//                 seconds: state.seconds - 60,
//                 time: action.secToTime(state.seconds - 60),
//             };
//         case COUNTDOWN: // after clicking "start"
//             return {
//                 ...state,
//                 seconds: state.seconds - 1,
//                 time: action.secToTime(state.seconds - 1),
//             };
//         case COUNTDOWNATZERO: // after clicking "start" but when time becomes 0
//             return {
//                 ...state,
//                 seconds: 0,
//                 time: { h: 0, m: 0, s: 0 },
//             };
//         case RESET: // on clicking "reset"
//             return {
//                 ...state,
//                 time: { h: 0, m: 0, s: 0 },
//                 seconds: 0,
//             };
//         default:
//             return state;
//     }
// };

// export default reducer;