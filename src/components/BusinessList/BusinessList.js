import React from 'react';
import ReactDOM from 'react-dom';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList" businesses={this.props.businesses}>
        {
          this.props.businesses.map(business => {
            return <Business business={business}></Business>
          })
        }
      </div>
    );
  }
}

export default BusinessList;