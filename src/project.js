import { Button, Typography, Space } from "antd";
import dayjs from "dayjs";
const { Text } = Typography;

var date = dayjs().unix();

function setDate() {
  var date2 = dayjs().unix();
  console.log(date2 - date);
}

export default function Project(props) {
  return (
    <Space direction="horizontal">
      <Button onClick={() => setDate()}>{props.name}</Button>
      <Text type="warning">{date}</Text>
    </Space>
  );
}
