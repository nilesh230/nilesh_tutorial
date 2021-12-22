import React, { useState, useEffect } from "react"
import CardView from '../components/CardView';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeaderComp from '../components/HeaderComp';
import ModalDailog from '../components/shared/ModalDailog';
import AddPost from "./AddPost";

/**
 * Component: Home
 * Description: show card and list view of the added posts
 * @param {*} props 
 * @returns 
 */
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '30px'
  }
});
function App() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [listView, setListView] = useState(false);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  function callAction(param, type) {
    if (type == 'VIEW' && param == 'LIST') {
      setListView(true)
    }
    if (type == 'VIEW' && param == 'CARD') {
      setListView(false)
    }
    if (type == 'SEARCH') {
      const newData = data.filter(dt => (dt.title).includes(param));
      setData(newData);
    }
    if (type == 'ADDENTRY') {
      setShowModel(true);
    }
  }

  const deleteAction = async (id) => {
    await fetch('https://jsonplaceholder.typicode.com/posts' + id, {
      method: 'DELETE'
    });
    const newData = data.filter(dt => dt.id != id);
    setData(newData);
  }

  const setPostData = async (postData) => {
    console.log(postData);

    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: postData.title,
        body: postData.desc,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => setData([...data, json]));
    setShowModel(false);

  }

  return (
    <>
      <HeaderComp callAction={(param, type) => callAction(param, type)} />
      <Grid container spacing={4} className={classes.gridContainer}>
        {
          data.map((item, index) =>

            <Grid item xs={12} md={listView ? 12 : 4}>
              <CardView key={index} id={item.id} title={item.title} adjective={item.adjective} desc={item.body} deleteAction={(id) => deleteAction(id)} />
            </Grid>
          )
        }
      </Grid>
      <ModalDailog
          buttonTitle="Save"
          open={showModel}
          fullWidth={true}
          maxWidth={'sm'}
          title="Add Entry">
          <AddPost
              setPostData={(data) => setPostData(data)}
              toggle={() => {
                setShowModel(false)
              }}  
          />
      </ModalDailog>

    </>


  )

}

export default App;

