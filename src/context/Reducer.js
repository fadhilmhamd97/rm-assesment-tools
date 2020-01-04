import React from "react";
import { createStore } from "redux";


const initialState = {
    context:
    {
        QUESTION:
        [
            {
                id: '',
                description: '',
                answer: 
                [
                    {
                        id: '',
                        option: '',
                        description: '',
                        score: 0
                    }
    
                ]
            }
        ]
    } 
}

const AppReducer = (state = initialState, actionProc) => {
    switch(actionProc){
        case 'ADD_QUESTIONS':
        return{
            ...state,
            QUESTION: [
                ...state.QUESTION,
                actionProc.payload
            ]
        }
    }
}

const AppContext = createStore(AppReducer);

export {AppReducer, AppContext};