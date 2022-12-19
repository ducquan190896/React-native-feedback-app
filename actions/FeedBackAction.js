export const getFeedbacks = () => async (dispatch, getState) => {
    try {
        const data = await fetch("http://10.0.2.2:5000/feedback");
        const datajson = await data.json()
        dispatch({
            type: "get_feedbacks",
            payload: datajson
        })
    } catch (err) {
        dispatch({
            type: "error_feedback",
            payload: err
        })
    }
}

export const getFeedback = (id) => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://10.0.2.2:5000/feedback/${id}`)
        const datajson = await data.json();
        dispatch({
            type: "get_feedback",
            payload: datajson
        })

    } catch (err) {
        dispatch({
            type: "error_feedback",
            payload: err
        })
    }
}

export const deleteFeedback = (id) => async (dispatch, getState) => {
    try {
        await fetch(`http://10.0.2.2:5000/feedback/${id}`, {
            method: "DELETE"
        })

        dispatch({
            type: "delete_feedback",
            payload: id
        })

    }  catch (err) {
        dispatch({
            type: "error_feedback",
            payload: err
        })
    }
}

export const updateFeedbackFunction = (id, feedback) => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://10.0.2.2:5000/feedback/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(feedback)
        })
        const datajson = data.json();
        fetch({
            type: "update_feedback",
            payload: datajson
        })

    } catch (err) {
        dispatch({
            type: "error_feedback",
            payload: err
        })
    }
}

export const createFeedback = (data) => async (dispatch, getState) => {
    try {
        const feed = await fetch("http://10.0.2.2:5000/feedback", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        const feedjson = await feed.json();

        dispatch({
            type: "create_feedback",
            payload: feedjson
        })

    } 
    catch (err) {
        dispatch({
            type: "error_feedback",
            payload: err
        })
    }
}

export const resetData = () => (dispatch) => {
    dispatch({
        type: "reset_state"
    })
}

export const openUpdateButton = (feedback) => (dispatch, getState) => {
    dispatch({
        type: "open_update",
        payload: feedback
    })
}