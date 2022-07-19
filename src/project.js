import { Button, Typography, Space } from "antd";
const { Text } = Typography;

export default function Project(props) {
  return (
    <Space direction="horizontal">
      <Button>{props.name}</Button>
      <Text type="warning">Test text</Text>
    </Space>
  );
}
