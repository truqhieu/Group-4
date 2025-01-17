import {
  Layout,
  Menu,
  Typography,
  Row,
  Col,
  Avatar,
  Dropdown,
  Space,
} from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import "./NavbarLogin.css";

const { Header } = Layout;
const { Text } = Typography;

const AppNavbarLogin = () => {
  // Menu cho dropdown
  const menu = (
    <Menu className="dropdown-menu">
      <Menu.Item key="1">Lịch Khám</Menu.Item>
      <Menu.Item key="2">Đăng xuất</Menu.Item>
    </Menu>
  );

  return (
    <Header className="app-navbar">
      <Row justify="space-between" align="middle">
        {/* Logo và thông tin */}
        <Col>
          <div className="logo">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QkhaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+AP/bAIQAAwMDAwMDAwMDAwQEBAQEBgUFBQUGCQYHBgcGCQ4ICggICggODA8MCwwPDBYRDw8RFhkVFBUZHhsbHiYkJjIyQwEDAwMDAwMDAwMDBAQEBAQGBQUFBQYJBgcGBwYJDggKCAgKCA4MDwwLDA8MFhEPDxEWGRUUFRkeGxseJiQmMjJD/8IAEQgAcAB0AwEiAAIRAQMRAf/EAB0AAAICAwEBAQAAAAAAAAAAAAAFBAYBAgMHCAn/2gAIAQEAAAAA/VMxzVr4+Ok1pMMgL0HMABlYDOsGu4AACbZc8qpoBXF1qlAOHaROBXKzfPMvUpAbW2sRwKQv0ZtbEA+RYApKFkt9AaAdeeACkaWFyAdd4/nSxE6bd3Hk1xn38fck3zs0pzRSwl2/xlR9t7W0qddgv1EhS4rVnjWJw7IFcwAAEuz5CAg5AAMLDsBrqrXR9esxpNMn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"
              alt="Logo"
              className="logo-image"
            />
            <div className="logo-text">
              <Text className="subtitle">Chữa lành tâm vệ</Text>
              <Text className="subtitle">Nâng bước tâm hồn</Text>
            </div>
          </div>
        </Col>

        {/* Title và menu */}
        <Col
          flex="auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text">
            <Text className="center-title">
              Trung tâm chữa lành tâm hồn Epsilon
            </Text>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["home"]}
              className="menu"
              items={[
                { key: "home", label: "Home" },
                { key: "about", label: "Giới thiệu" },
                { key: "services", label: "Khám - Tư vấn - Điều trị" },
                { key: "contact", label: "Liên hệ" },
                { key: "news", label: "Tin tức" },
              ]}
            />
          </div>
        </Col>

        {/* Avatar, dòng chữ "Hi User" và dropdown */}
        <Col>
          <Dropdown
            overlay={menu}
            placement="bottomRight"
            arrow
            trigger={["click"]}
          >
            <div className="user-avatar">
              <Avatar icon={<UserOutlined />} className="avatar" />
              <Space className="user-dropdown">
                <Text className="user-text">Hi User</Text>
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default AppNavbarLogin;
