import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getAllLabel } from "../../api";
import { AxiosResponse } from "axios";
interface LabelDataType {
    no: number,
    key: string,
    name: string,
    color: string
}

interface LabelResType {
    _id: string,
    value: string,
    color: string
}

type resArr = Array<LabelResType>

const Label:React.FC=()=>{  
  const columns: ColumnsType<LabelDataType> = [
    {
        title: '序号',
        dataIndex: 'no',
        key: 'no',
    },
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '颜色',
        dataIndex: 'color',
        key: 'color',
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
          <Space>
              <Button onClick={() => editLabel(record)}>编辑</Button>
              <Button onClick={() => deleteLabel(record)}>删除</Button>
          </Space>
        ),
    },
  ];
    const editLabel=(record: LabelDataType):void=>{
        console.log(record);
    }
    const deleteLabel=(record: LabelDataType):void=>{
        console.log(record);
    }
    const [labelData, setLabelData]=useState<LabelDataType[]>([])
    useEffect(()=>{
        getAllLabel().then((res: LabelResType[])=>{
            console.log(res)
            setLabelData((res).map((item, index)=>{
                return {
                    no: index,
                    key: item._id,
                    name: item.value,
                    color: item.color,
                }
            }))
        }).catch((e)=>{
            console.warn(e)
        })
    },[])
    return (
        <Table columns={columns} dataSource={labelData} />
    )
}

export default Label