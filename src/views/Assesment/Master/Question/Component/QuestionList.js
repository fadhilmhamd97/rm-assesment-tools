import React,{ useEffect, useState } from 'react';
import {  } from "react-router-dom";

import DataTableHelper from "../../../../Shared/DataTable";
import { getQuestionList } from "../../../../../services/Question/questionService";
import { Redirect } from 'react-router-dom';

    //Set Columns
    const columns = [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Question Code',
            selector: 'question_code',
            sortable: true,
        },
        {
            name: 'Indicator Id',
            selector: 'indicator_id',
            sortable: true,
        },
        {
            name: 'Question',
            selector: 'question',
            sortable: true,
        },
        {
            name: 'Created At',
            selector: 'createdAt',
            sortable: true,
        },
        {
            name: 'Updated At',
            selector: 'updatedAt',
            sortable: true,
        },
    ];

const QuestionListComponent = props => {

    console.info(props);

    const [propsEntity, propsDelegator] = useState({
        questionList: []
    });

    const [flagLoaded, flagDelegator] = useState(false);
    const [propsDetailRouter, actionDetailRouter] = useState({flag:false, id: ''});

    const onDetailHandler = (idContext) => {
        //Here you can define what next after button triggered
        actionDetailRouter({...propsDetailRouter, flag: true, id: "/assesment/question/detail/".concat(idContext) });
    }

    useEffect(
        () => {
                getQuestionList().then(
                    (result) => {
                        propsDelegator({
                            questionList: propsEntity.questionList.concat(result.data)
                        });
                        flagDelegator(true);
                    },
                    (error) =>{

                    }
                )
        }, [])

        if(propsDetailRouter.flag)
            return <Redirect to={propsDetailRouter.id} />

        if(flagLoaded){
            return(
                <DataTableHelper
                    columns={columns}
                    buttons={["EDIT"]}
                    data={propsEntity.questionList}
                    onDetail={onDetailHandler}
                    />
                )
        }
        else
            return(<div>Loading.....</div>)
}

export default QuestionListComponent;