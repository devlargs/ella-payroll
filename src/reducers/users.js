const users = (state = {}, action) => {
  console.log(action)
  
  switch (action.type) {
    case 'CURRENT_USER':
      return [
        ...state,
        { currentUser: action.payload }
      ]
    default:
      return state
  }
}

export default users;