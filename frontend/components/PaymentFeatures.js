import React from 'react';
import {Link} from 'react-router-dom';

const PaymentFeatures = ({ match, contentName, contentType, rateType, rate, currency, paymentPointer, handleInputChange }) => {
  return (
    <div className="content-features text-center">
      <h1>Payment Features</h1>
      <p className="header-description"> This section contains information about how the content will be monetized. All information is required</p>
      <div className="form-group">
        <label>Name of the content</label>
        <input className="form-control" name="contentName" placeholder="Enter name" value={contentName} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Format of Work</label>
        <select className="form-control" name="contentType" value={contentType} onChange={handleInputChange}>
          <option value="">Select type of content to be licensed</option>
          <option value="multiple">Other /  Multiple formats</option>
          <option value="audio">Audio</option>
          <option value="video">Video</option>
          <option value="image">Image</option>
          <option value="text">Text</option>
          <option value="dataset">Dataset</option>
          <option value="interactive">Interactive</option>
        </select>
      </div>
      <div className="form-group">
        <label>Type of charge</label>
        <select className="form-control" name="rateType" value={rateType} onChange={handleInputChange}>
          <option value=""> Select how the user should be charged</option>
          <option value="download">Per Download</option>
          <option value="second">Per Second</option>
          <option value="byte">Per Byte</option>
          <option value="use">Per Use</option>
          <option value="revocation">Per Revocation</option>
        </select>
      </div>
      <div className="form-group">
        <label>Rate</label>
        <input className="form-control" type="number" name="rate" placeholder="Enter rate" value={rate} onChange={handleInputChange}/>
      </div>
      <div className="form-group">
        <label>Currency</label>
        <input className="form-control" name="currency" placeholder="E.g. USD, BTC, etc" value={currency} onChange={handleInputChange}/>
      </div>
      <div className="form-group">
        <label>Payment Pointer</label>
        <input className="form-control" name="paymentPointer" placeholder="Enter Payment Pointer" name="paymentPointer" value={paymentPointer} onChange={handleInputChange}/>
      </div>
      <Link to={`/`}><button type="button" className="btn btn-primary">Back</button></Link>
      {contentName && contentType && rateType && rate && currency && paymentPointer ? <Link to={`/generate-license`}><button type="button" className="btn btn-success finish">Finish</button></Link> : null}

    </div>
  )
}
export default PaymentFeatures;
