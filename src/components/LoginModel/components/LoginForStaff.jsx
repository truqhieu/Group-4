import { Form, Input, Button, Spin } from "antd";
import PropTypes from "prop-types";
import { UserOutlined, LockOutlined, LeftOutlined } from "@ant-design/icons";
import { LoginForStaffStyled } from "../styles";
import AuthServices from "../../../services/AuthServices";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setTokens, setUser } from "../../../reduxs/authReduxs/authSlice";

const LoginForStaff = ({ setRoleLogin, onCancel }) => {
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formLogin] = Form.useForm();
  const dispatch = useDispatch();

  const loginAccout = async () => {
    const values = await formLogin.validateFields();
    try {
      setLoading(true);
      const res = await AuthServices.loginStaff(values);
      console.log(res?.user);

      if (res.success) {
        dispatch(
          setTokens({
            accessToken: res.accessToken,
          })
        );
        dispatch(setUser(res.user));
        onCancel();
        toast.success("Đăng nhập thành công!");
      }
      if (!res.success) {
        setLoginError(true);
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Login Failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <LoginForStaffStyled>
        <div className="header-login">
          <LeftOutlined
            style={{ fontSize: "20px", cursor: "pointer", color: "#3e70a7" }}
            onClick={() => setRoleLogin("")}
          />
          <div className="title-login">Đăng nhập cho Nhân Viên</div>
        </div>
        {loginError ? (
          <div className="error">Số Điện Thoại Hoặc Mật Khẩu không đúng!</div>
        ) : null}
        <Form
          form={formLogin}
          name="normal_login"
          className="login-form"
          style={{ width: "70%", margin: "auto" }}
        >
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập Số Điện Thoại!" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Số Điện Thoại"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
              onPressEnter={loginAccout}
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="login-form-button"
              onClick={loginAccout}
              style={{
                backgroundColor: "#3e70a7",
                color: "white",
                transform: "translateX(150px)",
              }}
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </LoginForStaffStyled>
    </Spin>
  );
};

LoginForStaff.propTypes = {
  setRoleLogin: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default LoginForStaff;
