export const ADDNEW_USER = (newUser) => {
    return {
        type: "ADD_NEW_USER",
        payload: newUser
    }
}
export const DELETEUSER = (id) => {
    return {
        type: "DELETE_USER",
        payload: id
    }
}

export const USER = (user) => {
    return {
        type: "NEW_USER",
        payload: user,
    }
}