import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HeartTwoTone,
  HeartFilled,
  HeartOutlined,
  DeleteOutlined,
  MailTwoTone,
  PhoneTwoTone,
  GlobalOutlined
} from '@ant-design/icons';
import {
  Avatar,
  Card,
  Skeleton,
  Switch,
  Modal,

} from 'antd';
import Form_model from "./Form.jsx"
import {
  useState,
  useEffect
} from 'react';
const {
  Meta
} = Card;
const Cards = ({
  user, update, Delete
}) => {
  const [edit,
    setEdit] = useState({
      ...user
    })
  const [loading,
    setLoading] = useState(true);
  const [avatar,
    setAvatar] = useState("")
  const [liked,
    setLiked] = useState(false)
  const [isModalOpen,
    setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleOk = () => {

    setIsModalOpen(false);

    update(edit);
    setEdit(()=>user)
  };
  const handleCancel = () => {

    setIsModalOpen(false);
  };
  const onChange = (checked) => {
    setLoading(!checked);
  };
  useEffect(()=> {
    async function getAvatar() {
      try {
        let url = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`

        onChange(true)
        setAvatar(url)

      }
      catch (err) {
        // alert(err)
      }
    }
    getAvatar()
    // setEdit(()=>user)
  },
    [])
  return (
    <>
    <div className="card">
    <Card
      hoverable

      cover={<img style={ { height: "240px",

        background: "#eeeeee" }} alt="avatar" src={avatar} />}

      actions={ [
        liked?
        <HeartFilled onClick={()=>setLiked(!liked)} style={ { color: "red" }}

          key="heart" />: <HeartOutlined onClick={()=>setLiked(!liked)}
          style={ { color: "red" }} key="heartc" />,
        <EditOutlined onClick={showModal} key="edit" />,
        <DeleteOutlined
          onClick={()=>Delete(user)}
          key="delete" />,
      ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta

        title=
        { user.username}

        description=
        {
        <div className="card">
            <div>
             <MailTwoTone />
             <span style={ { marginLeft: "6px" }}>
            {user.email}
            </span>
        </div>
            <div>
            <PhoneTwoTone />
             <span style={ { marginLeft: "3px" }}>  {user.phone}
             </span>
        </div>
             <div>
             <GlobalOutlined style={ { color: "#ADD8FF" }} />

             <span style={ { marginLeft: "3px" }}>  https://{user.website}
             </span>
        </div>
        </div>
        }
        />
        </Skeleton>
      </Card>
  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <Form_model edit={edit} setEdit={setEdit} />
  </Modal>
  </div> < />
);
};
export default Cards;