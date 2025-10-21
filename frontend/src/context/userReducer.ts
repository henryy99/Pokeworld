// const MAX_HEALTH = 1;

// export const userInitialState = {
//   username: "",
//   health: MAX_HEALTH,
//   profile_pic_path: "",
//   highestScore: 0,
//   currentScore: 0,
// };

// export function userReducer(state, action) {
//   switch (action.type) {
//     case "USERNAME/SET":
//       return { ...state, username: action.payload };
//     case "PROFILE_PIC/SET":
//       return { ...state, profile_pic_path: action.payload };
//     case "HEALTH/MINUS":
//       return { ...state, health: state.health > 0 ? state.health - 1 : 0 };
//     case "CURRENT_SCORE/SET":
//       return { ...state, currentScore: state.currentScore + action.payload };
//     case "USER/RESET":
//       return {
//         ...state,
//         highestScore:
//           state.highestScore > state.currentScore
//             ? state.highestScore
//             : state.currentScore,
//         currentScore: 0,
//         health: MAX_HEALTH,
//       };
//     default:
//       break;
//   }
// }
