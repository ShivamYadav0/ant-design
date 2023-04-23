import {
  Button,
  Checkbox,
  Form,
  Input
} from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Form_model = ({
  edit, setEdit
}) => (
  <Form
    name="basic"
    labelCol={ {
      span: 8,
    }}
    wrapperCol={ {
      span: 16,
    }}
    style={ {
      maxWidth: 600,
    }}
    initialValues={ {
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
    <Form.Item
      label="Username"
      name="username"
      value={edit.username}
      onChange={(e)=> {
        setEdit({ ...edit,
          username: e.target.value })

      }
      }
      rules={[{ required: true,
        message: 'Please input your username!',
      },
      ]}>
        <Input
        defaultValue={edit.username}
        value={edit.username} />
      </Form.Item>
      <Form.Item
      label="Email"
      name="email"
      value={edit.email}
      onChange={(e)=>
      setEdit({ ...edit,
        email: e.target.value })
      }
      rules={[{
        required: true,
        type: "email",
        message: 'Invalid Email',
      },
      ]}>
      <Input defaultValue={edit.email}
        value={edit.email} />
    </Form.Item>
    <Form.Item
      label="Phone"
      name="phone"
      value={edit.phone}
      onChange={(e)=>
      setEdit({ ...edit,
        phone: e.target.value })
      }
      rules={[{
        required: true,
        message: 'Please input your phone!',
      },
      ]}
      >
      <Input defaultValue={edit.phone}
        value={edit.phone} />
    </Form.Item>
    <Form.Item
      label="Website"
      name="website"
      value={edit.website}
      onChange={(e)=>
      setEdit({ ...edit,
        website: e.target.value })
      }
      rules={[{
        required: true,
        message: 'Please input your website!',
      },
      ]}
      >
      <Input defaultValue={edit.website}
        value={edit.website} />
    </Form.Item>

  
  </Form>
);
export default Form_model;