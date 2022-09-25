import { Avatar, Badge, Card, Table, Tag } from "antd";
import { $PERSONS } from "./data/Persons";
import { Persons } from "./models/persons.interface";
import type { ColumnsType } from "antd/es/table";

function App() {
  const columns: ColumnsType<Persons> = [
    {
      title: "Avatar",
      dataIndex: "fullname",
      key: "fullname",
      render: (_, { fullname }) => {
        return (
          <>
            <Avatar
              style={{ backgroundColor: "red", verticalAlign: "middle" }}
              size="large"
              gap={4}
            >
              {fullname}
            </Avatar>
          </>
        );
      },
    },
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Bio",
      dataIndex: "bio",
      key: "bio",
    },
    {
      title: "Skills",
      dataIndex: "skills",
      key: "skills",
      render: (_, { skills }) => {
        return (
          <>
            {skills?.map((el, index) => {
              return (
                <>
                  <Tag color={"blue"} key={index}>
                    {el}
                  </Tag>
                </>
              );
            })}
          </>
        );
      },
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
  ];

  const data: Persons[] = $PERSONS;
  return (
    <div className="App">
      <div>
        <Badge.Ribbon text="TensorCode">
          <Card size="small">
            <h3>Git/Github Workshop 22:00</h3>
          </Card>
        </Badge.Ribbon>
      </div>
      <br />
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default App;
