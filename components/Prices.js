// class Prices extends React.Component {
//   state = {
//     currency: 'USD',
//   };
//   render() {
//     return <div>Prices</div>;
//   }
// }

// const Prices = ({ bpi }) => (
//   <div>
//     <ul className='list-group'>
//       <li className='list-group-item'>Bitcoin reate for {[bpi]}</li>
//     </ul>
//   </div>
// );

// export default Prices;
import React, { Component } from 'react';

export default class Prices extends Component {
  state = {
    currency: 'USD',
  };

  render() {
    let list = '';

    if (this.state.currency === 'USD') {
      list = (
        <li className='list-group-item'>
          Bitcoin rate for {this.props.bpi.USD.description}:{' '}
          <span className='badge badge-warning mx-1'>
            {this.props.bpi.USD.code}
          </span>
          <strong>{this.props.bpi.USD.rate}</strong>
        </li>
      );
    } else if (this.state.currency === 'GBP') {
      list = (
        <li className='list-group-item'>
          Bitcoin rate for {this.props.bpi.GBP.description}:{' '}
          <span className='badge badge-warning mx-1'>
            {this.props.bpi.GBP.code}
          </span>
          <strong>{this.props.bpi.GBP.rate}</strong>
        </li>
      );
    } else if (this.state.currency === 'EUR') {
      list = (
        <li className='list-group-item'>
          Bitcoin rate for {this.props.bpi.EUR.description}:{' '}
          <span className='badge badge-warning mx-1'>
            {this.props.bpi.EUR.code}
          </span>
          <strong>{this.props.bpi.EUR.rate}</strong>
        </li>
      );
    }

    return (
      <div>
        <ul className='list-group'>{list}</ul>
        <br />
        <h4 className='badge badge-info mb-3'>Choose currency:</h4>
        <select
          onChange={(e) => this.setState({ currency: e.target.value })}
          className='form-control'
        >
          <option value='USD'>USD</option>
          <option value='GBP'>GBP</option>
          <option value='EUR'>EUR</option>
        </select>
      </div>
    );
  }
}
