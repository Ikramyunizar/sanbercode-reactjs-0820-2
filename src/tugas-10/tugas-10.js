import React from 'react';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class Tabel extends React.Component {
    render() {
        return (
            <b><table className = "formattabel">
                 <thead>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                </thead>
                </table>
            {dataHargaBuah.map(items =>{
                return (
                <table className= "formattabel">
                <tbody className >
                    <td className="formatcell">{items.nama}</td>
                    <td className="formatcell">{items.harga}</td>
                    <td className="formatcell">{items.berat}</td>
                </tbody>
                </table>


                )
            
            })}
            </b>
        )
    }
}
export default Tabel