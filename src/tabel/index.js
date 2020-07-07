/**
 * @description Tabel的使用
 * @author cq
 * @Date 2020-06-28 15:07:52
 * @LastEditTime 2020-07-07 19:53:04
 * @LastEditors cq
 */



import React, { FunctionComponent, useEffect } from 'react'
import { Table } from 'antd';
import columns from "./columns"
import data from './data';
import childData from './childData';
import style from "./index.module.less"
import 'antd/dist/antd.css'

//  子项展开会错位

const TabelDemo = () => {


  const getColumns = () => {
    return columns({})
  }
  const expandedRowRender = () => {
    return (
      // <h1>sdjfj</h1>
      <Table
        rowKey="childId"
        showHeader={false}
        columns={getColumns()}
        dataSource={childData}
        pagination={false}
        scroll={{ x: 478 }}
        className={style.childTable}
      />
    )
  }
  return (
    <div>
      <h1>我是tabel测试页面</h1>
      <Table
        rowKey="id"
        // expandedRowKeys={["1"]}
        columns={getColumns()}
        dataSource={data}
        expandedRowRender={expandedRowRender}//额外的展开行
        scroll={{ x: 478 }}
        expandRowByClick={true}
      // onExpand={this.handleExpand}
      />
    </div>
  )
}


export default React.memo(TabelDemo)
