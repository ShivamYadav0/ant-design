import {
  useState,
  useEffect
} from 'react'
import Cards from "./Card.jsx"
import "./Home.css"
import {
  Spin,
  Row,
  Col
} from "antd"

function Home() {
  const [userData,
    setUserData] = useState([])
  const [force,
    setForce] = useState(false)
  const [load,
    setLoad] = useState(true)
  const Delete = (edit)=> {

    const newState = userData.filter(obj => {

      return obj.id !== edit.id;
    });
    setForce(!force)
    setUserData(()=>newState);

  }
  const Update = (edit)=> {
    const newState = userData.map(obj => {
      if (obj.id === edit.id) {
        return {
          ...edit
        };
      }
      return obj;
    });
    setForce(!force)
    setUserData(()=>newState);

  };
  useEffect(()=> {
    async function fetchData() {
      try {
        let dat = await fetch("https://jsonplaceholder.typicode.com/users");
        dat = await dat.json();

        //  console.log(dat)
        //  console.log(dat)
        setUserData(()=>dat)
        setLoad(false)
        // alert(data)
      }
      catch(err) {
        //alert(err)
        // alert(err)
        //  setData([...data,dat])
      }
    }
    fetchData()
  },
    [])
  return (

    <div className="home">
     {load?<div style={ {
      marginTop: "45vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"

    }}>
      <Spin />
    </div>: (

      <Row className="row"
        gutter={ {
          xs: 1,
          sm: 1,
          md: 1,
          lg: 3,
        }}
        >


      {
        userData.map((d)=>

          (
            <Col
              className="gutter-row" span={30}

              key={d.id}
              >
        <div className="col">
            <Cards user={d} update={Update} Delete={Delete} />
              </div>
        </Col>

          )
        )}
    </Row>
    )}< /div>

    )
    }

export default Home