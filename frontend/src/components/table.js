import React, { useState, useMemo, useCallback, useEffect } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/theme/blue-light.css'
import '@inovua/reactdatagrid-community/theme/blue-dark.css'

import icon from '../images/dark-mode.png'

const MyTable = ({ data }) => {
  // Create an array of all the column names
  const columns = useMemo(
    () => Object.keys(data[0]).map(key => ({ key, name: key })),
    [data]
  );


  let updatedData = data.map((item, index) => {
    return {
      id: index + 1,
      ...item
    }
  }, [data]);

  const [dataSource, setDataSource] = useState(updatedData);

  const onEditComplete = useCallback(({ value, columnId, rowId }) => {
    const newDataSource = [...dataSource];
    newDataSource[rowId - 1][columnId] = value;

    setDataSource(newDataSource)
  }, [dataSource])

  const gridStyle = { minHeight: 550, columnMinWidth: 550 };

  return (
    <div>
      <div className='editor-table-title-div'>
       {/*<p className='table-title-text'>User Uploaded Data Table</p>*/}
        {/*<button className='dark_light_mode'><img src={icon}></img></button>*/}
      </div>
      <div className='table-from-csv'>

        <ReactDataGrid
          idProperty='id'
          columns={columns}
          dataSource={dataSource}
          style={gridStyle}
          theme={'blue-light'}
          pagination
          defaultLimit={10}
          onEditComplete={onEditComplete}
          editable
        />
      </div>
    </div>

  );
};

export default MyTable;