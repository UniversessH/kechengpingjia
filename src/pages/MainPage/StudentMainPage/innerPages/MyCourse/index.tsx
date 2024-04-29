import React, { useEffect, useState, useRef } from "react";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { Table, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { searchInfoList } from "../../../../../network/apis";

const mockData = [
  {
    title: "英语",
  },
  {
    title: "语文",
  },
  {
    title: "数学",
  },
];

const MyCourse: React.FC = () => {
  const [data, setData] = useState<any>();
  const formRef = useRef();

  useEffect(() => {
    // getInfoList();
  }, []);

  // const getInfoList = async () => {
  //   try {
  //     const res = await searchInfoList();
  //     setData(res.data.list);
  //     message.success(res.message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const searchHandler = async (value) => {
    console.log(value);
    // try {
    //   const res = await searchInfoList(value);
    //   setData(res.data.list);
    //   message.success(res.message);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "课程名称",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "其他",
      dataIndex: "other",
      key: "other",
      render: (val) => <a>详情</a>,
    },
  ];

  return (
    <>
      <div style={{ fontSize: "20px", marginBottom: "16px", color: "#4780f7" }}>
        我的课程
      </div>
      {/* <div
        style={{ fontSize: "12px ", marginBottom: "16px", color: "#bfbfbf" }}
      >
        最少填写一个查询项
      </div> */}
      <ProForm formRef={formRef} onFinish={searchHandler}>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="title"
            label="课程名称"
            placeholder="请输入课程名称"
          />
        </ProForm.Group>
      </ProForm>
      <Table
        columns={columns}
        style={{ marginTop: "16px" }}
        // dataSource={data}
        dataSource={mockData}
      ></Table>
    </>
  );
};

export default MyCourse;
