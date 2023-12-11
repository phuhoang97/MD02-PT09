import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { QRCode } from "antd";

const props = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const DemoAntd = () => (
  <>
    {/* Upload ảnh */}
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>

    {/* QR code */}
    <QRCode errorLevel='H' value='https://www.google.com/' />
  </>
);
export default DemoAntd;
