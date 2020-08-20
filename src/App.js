import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  
  {
  'id':1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '1991',
  'gender' : '남자',
  'jobs' : '교수'
},
{
  'id':2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '나동빈',
  'birthday' : '1991',
  'gender' : '남자',
  'jobs' : '교수'
},
{
  'id':3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '하건희',
  'birthday' : '1991',
  'gender' : '남자',
  'jobs' : '교수'
}
]


function App() {
  return (
    <div>
      {customers.map (c =>{ return ( <Customer  key={c.id}  id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender}    jobs={c.jobs}/>)})}
    </div>
  )
}

export default App;
