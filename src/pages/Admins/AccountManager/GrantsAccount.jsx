// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { TableCustom } from "../../Staffs/AppointmentList/styles";
import { Button, Tag } from "antd";
import UserServices from "../../../services/UserServices";

const GrantsAccount = () => {
  const [loading, setLoading] = useState(false);
  const [listUser, setListUser] = useState([]);

  const getListUserNotAccount = async () => {
    try {
      setLoading(true);
      const res = await UserServices.listUserNotAccount();
      if (res?.success) {
        setListUser(res?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListUserNotAccount();
  }, []);

  const columns = [
    {
      title: "Email",
      key: "email",
      render: (record) => record.email,
    },
    {
      title: "Chủ sở hữu",
      key: "role",
      render: (record) => record.name || "N/A",
    },
    {
      title: "Chức danh",
      key: "role",
      render: (record) => record.role.toUpperCase(),
    },
    {
      title: "Số điện thoại",
      key: "phone",
      render: (record) => record.phone,
    },
    {
      title: "Trạng thái",
      key: "isAccount",
      render: () => {
        return <Tag color="yellow">Yêu cầu cấp tài khoản</Tag>;
      },
    },
    {
      title: "Chức năng",
      key: "action",
      width: 100,
      render: () => {
        return (
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <Button style={{ backgroundColor: "#E6F4FF" }}>Chấp nhận</Button>
            <Button style={{ backgroundColor: "#ed7878" }}>Từ chối</Button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <TableCustom
        columns={columns}
        dataSource={listUser}
        loading={loading}
        bordered={true}
        rowKey={(record) => record._id}
        // onRow={(record) => {
        //   return {
        //     onClick: () => {
        //       setIsOpenModal(true);
        //       setSelectedAppointment(record?._id);
        //     },
        //   };
        // }}
        pagination={{ pageSize: 10 }}
      />
      {/* {!!setIsOpenModal && (
        <AppointmentDetailModal
          open={isOpenModal}
          selectedAppointment={selectedAppointment}
          onCancel={() => setIsOpenModal(false)}
        />
      )} */}
    </>
  );
};

export default GrantsAccount;
