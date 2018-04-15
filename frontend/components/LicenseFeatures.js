import React from 'react';
import {Link} from 'react-router-dom';

const LicenseFeatures = ({ match, owner, ownerClick, shareable, shareableClick, ownerName, ownerUrl, candidateName, candidateUrl, handleInputChange }) => {
  const activeOwnerTrue = owner === 'Yes' ? "btn btn-secondary active" : "btn btn-secondary";
  const activeOwnerFalse = owner === 'No' ? "btn btn-secondary active" : "btn btn-secondary";
  const shareableTrue = shareable === 'Yes' ? "btn btn-secondary active" : "btn btn-secondary";
  const shareableFalse = shareable === 'No' ? "btn btn-secondary active" : "btn btn-secondary";
  return (
    <div className="license-features text-center">
      <h1>License Features</h1>
      <p className="header-description"> This section contains information about the license. All the information is required. </p>
      <div className="form-group">
        <label>Are you the owner of this work?</label>
        <div className="btn-group btn-group-toggle owner-radio" data-toggle="buttons">
          <label className={ activeOwnerTrue } >
            <input type="radio" name="options" value="Yes" onClick={ownerClick} checked={ owner === 'Yes' } /> Yes
          </label>
          <label className={ activeOwnerFalse }>
            <input type="radio" name="options" checked={ owner === 'No' } onClick={ownerClick} value= "No" /> No
          </label>
        </div>
      </div>
      {owner === 'Yes' ?
        <div>
        <div className="owner-info">
          <div className="form-group">
            <label>Your full name</label>
            <input className="form-control" name="ownerName" placeholder="Enter name" value={ownerName} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label>Your URL</label>
            <input className="form-control" name="ownerUrl" placeholder="Enter Url" value={ownerUrl} onChange={handleInputChange}/>
          </div>
        </div>
          <div className="form-group">
            <label>Allow other adaptations of your work to be shared/distributed?</label>
            <div className="btn-group btn-group-toggle owner-radio" data-toggle="buttons">
              <label className={ shareableTrue } >
                <input type="radio" name="options" value="Yes" onClick={shareableClick} /> Yes
              </label>
              <label className={ shareableFalse }>
                <input type="radio" name="options" onClick={shareableClick} value= "No" /> No
              </label>
            </div>
          </div>
        </div>
        :
        null
      }
      {owner === 'No' ?
        <div className="owner-info">
          <div className="form-group">
            <label>Owner of the work</label>
            <input className="form-control" name="ownerName" placeholder="Enter name" value={ownerName} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label>Owner URL</label>
            <input className="form-control" name="ownerUrl" placeholder="Enter Url" value={ownerUrl} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label>Your name</label>
            <input className="form-control" name="candidateName" placeholder="Enter name" value={candidateName} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label>Your URL</label>
            <input className="form-control" name="candidateUrl" placeholder="Enter Url" value={candidateUrl} onChange={handleInputChange}/>
          </div>
        </div>
        :
        null
      }
      {owner && ownerName && ownerUrl && shareable || owner === 'No' && ownerName && ownerUrl && candidateUrl && candidateName? <Link to={`/payment-features`}><button type="button" className="btn btn-primary">Next</button></Link> : null}


    </div>
  )
}
export default LicenseFeatures;
