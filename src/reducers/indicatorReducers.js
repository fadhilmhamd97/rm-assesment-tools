import React from "react";

const InitialIndicatorValue = {
    context_id: ''
}

const IndicatorReducer = (state = InitialIndicatorValue, propsAction) => {
    if(propsAction === 'SHOW_ID')
    {
        state = {...state, context_id: propsAction.payload}
    }
}

export {InitialIndicatorValue};
export default IndicatorReducer;