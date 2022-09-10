import React from 'react'

function Shop({count,addToCart}) {

  return (
    <table className="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>count</th>
            <th>Price</th>
            <th>Discount</th>
            <th>FinalPrice</th>
            <th>buy</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>shoes</td>
            <td>{0||count}</td>
            <td>250$</td>
            <td>50%</td>
            <td>125</td>
            <td>{0 || addToCart(count)}$</td>
        </tr>
        <tr className="active-row">
            
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
    sum of factor: {0 || addToCart(count)}$
</table>
  )
}

export default Shop