/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MyModal from './Modal';
function Main() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [newList, setNewList] = useState([]);
  const [isSelect, setIsSelect] = useState(false);

  useEffect(() => {
    axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
      .then(res => {
        setList(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const getInfo = (e) => {
    setIsOpen(true);
    console.log(e.target.id);
    setNewList(list.filter(item => item.id === e.target.id))
  }


  return (
    <div className="main">
      <div className="input-section">
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="card-section">
        {
          list.length > 0 ?
            <div className="user-card">
              {
                list.filter(list => {
                  // eslint-disable-next-line eqeqeq
                  if (search === "") {
                    return list;
                  } else if (list.name.toLowerCase().includes(search.toLocaleLowerCase())) {
                    return list
                  }
                }).map((item) => (
                  <div className="card" key={item.id}>
                    <img src={item.Image} className="img" alt="User Image" />
                    <p className="name">Name: {item.name}</p>
                    <div className="btn">
                      <button id={item.id} onClick={getInfo} className="more_info">More Info</button>
                    </div>
                  </div>
                ))
              }
            </div> :
            null
        }
      </div>
      <MyModal setIsOpen={setIsOpen} isOpen={isOpen} newList={newList} setIsSelect={setIsSelect} />
    </div>
  )
}

export default Main
