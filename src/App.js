import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  const h1 = {
      marginLeft: "5%",
  }
  const daftar = {
      display: "inline-block",
      marginLeft: "30px",
      marginTop: "20px"
  }
  const labeldaftar = {
      display: "inline-block"
  }
  const content = {
      display: "inline-block"
  }
  const btn = {
      display: "block",
      borderRadius: "40px",
      margin: "5% 0% 0%",
      background: "white"
  }
    return (
    <div>
	<h1><strong>Form Pembelian Buah</strong></h1>
    <label ><strong>Nama Pelanggan</strong></label>
    <input type="text" name="" id=""/><br/>
    <div className="content">
    <div className="labeldaftar">
        <label ><strong>Daftar-buah</strong></label>
    </div>
    
    <div className="daftar">
    <input type="checkbox" className="box" name="" id="semangka"/>
    <label >Semangka</label><br/>
    <input type="checkbox" className="box" name="" id="jeruk"/>
    <label >Jeruk</label><br/>
    <input type="checkbox" className="box" name="" id="nanas"/>
    <label >Nanas</label><br/>
    <input type="checkbox" className="box" name="" id="salak"/>
    <label >Salak</label><br/>
    <input type="checkbox" className="box" name="" id="anggur"/>
    <label >Anggur</label>

    
    </div>
    <button className="btn">Kirim</button>
</div>
</div>

    
    );
  }
}

export default App;
