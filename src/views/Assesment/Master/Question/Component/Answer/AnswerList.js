import React,{ useEffect, useState } from 'react';

import DataTableHelper from "../../../../../Shared/DataTable";
import { getQuestionAnswerList } from "../../../../../../services/Answer/answerService";

    //Set Columns
    const columns = [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Question Id',
            selector: 'question_id',
            sortable: true,
        },
        {
            name: 'Question Answer',
            selector: 'question_answer',
            sortable: true,
        },
        {
            name: 'Score',
            selector: 'bobot',
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

const AnswerListComponent = props => {

     const [propsEntity, propsDelegator] = useState({
        answerList: []
    });

    const [flagLoaded, flagDelegator] = useState(false);

    const onDetailHandler = (idContext) => {
        //Here you can define what next after button triggered
        props.editDetailPanel(idContext);
    }

    useEffect(
        () => {
                getQuestionAnswerList(props.contextId).then(
                    (result) => {
                        propsDelegator({
                            answerList: propsEntity.answerList.concat(result.data)
                        });
                        flagDelegator(true);
                    },
                    (error) =>{

                    }
                )
        }, [])

        if(flagLoaded){
            return(
                <DataTableHelper
                    columns={columns}
                    buttons={["EDIT"]}
                    data={propsEntity.answerList}
                    onDetail={onDetailHandler}
                    />
                )
        }
        else
            return(<div>Loading.....</div>)
}

export default AnswerListComponent;