export const addUser = (user) => dispatch => {
    dispatch({
        type: 'CURRENT_USER',
        payload: user
    })
}