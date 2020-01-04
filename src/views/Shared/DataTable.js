import React,{ useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import { 
    Button
 } from "reactstrap";
import memoize from 'memoize-one';

const TextField = styled.input`
    height: 32px;
    width: 200px;
    border-radius: 3px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #e5e5e5;
    padding: 0 32px 0 16px;

    &:hover {
        cursor: pointer;
    }`;

const ClearButton = styled(Button)`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 34px;
    width: 32px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const Table = styled(DataTable)`
    .rdt_TableCell {
        font-size: 12px;
    }
    .rdt_TableCol_Sortable{
        font-size: 14px;
        font-weight: bold;
    }
    `;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
      <TextField id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
      <ClearButton onClick={onClear}>X</ClearButton>
    </>
 );

const contextActions = memoize(deleteHandler => (
    <Button className="btn btn-lg" color="danger" onClick={deleteHandler}>
      <i className="fa fa-trash" ></i>
    </Button>
));

 const DataTableHelper = props => {

    //props column
    const [columnEntities, columnAction] = useState({
        columns: []
    })

    const [propsEntity, propsDelegator] = useState({
        indicatorList: []
    })

    //is there any button
    useEffect(
        () => {
            if(props.buttons.length > 0)
                columnAction({
                    columns: [...props.columns,                         
                    {
                        name: 'Action',
                        cell: (row) => {    
                                        return(<div>
                                                {props.buttons.map((value, index) => {
                                                    if(value === "PREVIEW")
                                                        return <Button key={index} onClick={() => props.onShow(row.id)} color="default"><i className="fa fa-search"></i></Button>
                                                    if(value === "EDIT")
                                                        return <Button key={index} onClick={() => props.onDetail(row.id)} className="btn btn-xs" color="primary"><i className="fa fa-edit"></i></Button>
                                                    if(value === "DELETE")
                                                        return <Button key={index} onClick={() => props.onDelete(row.id)} color="danger"><i className="fa fa-times"></i></Button>
                                                })}</div>)
                            },
                        button: true
                    }]
                  })
        }, [])

        useEffect(
            () => {
                console.info(props.data);
                propsDelegator({
                    indicatorList: props.data
                });
                setFilterValue(props.data);
            },[]
        )
    
        const [filteredValue, setFilterValue] = React.useState([]);
        const [filterText, setFilterText] = React.useState('');
        const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    
        const subHeaderComponentMemo = React.useMemo(() => {
            const handleClear = () => {
              if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
                setFilterValue(propsEntity.indicatorList);
              }
            };
        
        const handleChange = event => {
            setFilterValue([...propsEntity.indicatorList.filter(item => item.indicator && item.indicator.includes(event.target.value))]);
            setFilterText(event.target.value);
        }
        
        return <FilterComponent onFilter={e => handleChange(e) } onClear={handleClear} filterText={filterText} />;
          }, [filterText, resetPaginationToggle, propsEntity]); 

    return(<div className="animate fadeIn">
            <Table
              columns={columnEntities.columns}
              data={filteredValue}
              pagination
              contextActions={contextActions(props.deleteAction)}
              selectableRows
              highlightOnHover
              paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              bordered
              />
        </div>)
 }

 export default DataTableHelper;