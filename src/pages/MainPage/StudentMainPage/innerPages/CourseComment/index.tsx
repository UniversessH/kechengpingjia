import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

const mockData = [
  {
    title: "语文",
    content: "垃圾老师",
  },
  {
    title: "英文",
    content:
      "阿萨德就是放假啊放假啊啥都能发掘的算法设计的发烧发的啥看法收到罚单开水力发电是妇女节啊啥的放哪里的烦恼",
  },
  {
    title: "数学",
    // content: "非常的新鲜，非常的美味",
  },
];

const CourseComment: React.FC = () => {
  const dotStyle = {
    width: "5px", // 点的宽度
    height: "5px", // 点的高度
    margin: "3px",
    borderRadius: "50%", // 使点的边框变为圆形
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "课程名称",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "评价状态",
      dataIndex: "content",
      key: "content",
      render: (val) => {
        return val ? (
          <div className="flex-center">
            <div style={{ ...dotStyle, backgroundColor: "green" }}></div>
            <span style={{ color: "green" }}>已评价</span>
          </div>
        ) : (
          <div className="flex-center">
            <div style={{ ...dotStyle, backgroundColor: "red" }}></div>
            <span style={{ color: "red" }}>未评价</span>
          </div>
        );
      },
    },
    {
      title: "评价内容",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "其他",
      dataIndex: "content",
      key: "content",
      render: (val) => {
        return <a>{val ? "修改评价" : "去评价"}</a>;
      },
    },
  ];

  return (
    <>
      <div style={{ fontSize: "20px", marginBottom: "16px", color: "#4780f7" }}>
        我的评价
      </div>
      <Table
        columns={columns}
        style={{ marginTop: "16px" }}
        // dataSource={data}
        dataSource={mockData}
      ></Table>
    </>
  );
};

export default CourseComment;
