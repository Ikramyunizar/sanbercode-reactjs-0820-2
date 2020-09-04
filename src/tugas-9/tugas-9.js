import React from 'react';
class Tugas9 extends React.Component{
      render() {
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
export default Tugas9