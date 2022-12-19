const initialState = {
    feedback: null,
    feedbacks: [],
    fbSuccess: false,
    fbError: false,
    message: null,
    updateStatus: false,
    updateFeedback: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "get_feedback":
            return {
                ...state,
                fbSuccess: true,
                feedback: action.payload
            }
        case "get_feedbacks":
            return {
                ...state,
                fbSuccess: true,
                feedbacks: action.payload
            }
        case "update_feedback":
            return {
                ...state,
                fbSuccess: true,
                updateStatus: false,
                feedback: action.payload,
                feedbacks: state.feedbacks.map(fee => fee.id == action.payload.id ? action.payload : fee)
            }
        case "create_feedback": 
            return {
                ...state,
                fbSuccess: true,
                feedback: null,
                feedbacks: state.feedbacks.push(action.payload)
            }
        case "delete_feedback":
            return {
                ...state,
                fbSuccess: true,
                feedback: null,
                feedbacks: state.feedbacks.filter(fee => fee.id != action.payload)
            }
        case "open_update":
            return {
                ...state,
                fbSuccess: true,
                updateFeedback: action.payload,
                updateStatus: true
            }
        case "error_feedback":
            return {
                ...state,
                fbError:true,
                fbSuccess: false,
                message: action.payload
            }
        case "reset_state":
            return {
                ...state,
                fbError: false,
                fbSuccess: false,
                updateStatus: false
            }
        default:
            return state;
    }
}