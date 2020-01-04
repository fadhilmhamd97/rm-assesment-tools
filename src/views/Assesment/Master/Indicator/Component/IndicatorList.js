import React,{ useEffect, useState } from 'react';

import DataTableHelper from "../../../../Shared/DataTable";
import { IndicatorListService } from "../../../../../services/Indicator/indicatorService";

    //Set Columns
    const columns = [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Indicator Id',
            selector: 'indicator_id',
            sortable: true,
        },
        {
            name: 'Parent Id',
            selector: 'parent_id',
            sortable: true,
        },
        {
            name: 'Indicator',
            selector: 'indicator',
            sortable: true,
        },
        {
            name: 'Created At',
            selector: 'created_at',
            sortable: true,
        },
        {
            name: 'Updated At',
            selector: 'updated_at',
            sortable: true,
        },
    ];

const IndicatorList = props => {

     const [propsEntity, propsDelegator] = useState({
        indicatorList: []
    });

    const [flagLoaded, flagDelegator] = useState(false);

    const onDetailHandler = (idContext) => {
        //Here you can define what next after button triggered
        props.editDetailPanel(idContext);
    }

    const onViewHandler = (idContext) => {
        //Here you can define what next after button triggered
        props.showDetailPanel(idContext);
    }

    useEffect(
        () => {
                IndicatorListService().then(
                    (result) => {
                        propsDelegator({
                            indicatorList: propsEntity.indicatorList.concat(result.data)
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
                    buttons={["PREVIEW","EDIT"]}
                    data={propsEntity.indicatorList}
                    onDetail={onDetailHandler}
                    onShow={onViewHandler}
                    />
                )
        }
        else
            return(<div>Loading.....</div>)
}

export default IndicatorList;