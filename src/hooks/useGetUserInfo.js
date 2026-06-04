// export const useGetUserInfo = () => {
//     const {name, profilePic, userID, isAuth} = JSON.parse(localStorage.getItem("auth"))

//     return {name, profilePic, userID, isAuth}
// }

export const useGetUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem("auth") || "null");

  return {
    name: userInfo?.name,
    profilePic: userInfo?.profilePic,
    userID: userInfo?.userID,
    isAuth: userInfo?.isAuth ?? false,
  };
};