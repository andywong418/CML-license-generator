import Proptypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import { Route } from 'react-router-dom';
import { history } from '../store/configureStore';
import PaymentFeatures from '../components/PaymentFeatures';
import LicenseFeatures from '../components/LicenseFeatures';
import GenerateLicense from '../components/GenerateLicense';
import Footer from '../components/Footer';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      owner: '',
      shareable: '',
      owner: '',
      ownerUrl: '',
      candidateName: '',
      candidateUrl: '',
      contentName: '',
      contentType: '',
      rateType: '',
      rate: 0,
      currency: '',
      paymentPointer: ''
    }
  }

  determineOwnerStatus(e) {
    this.setState({ owner: e.target.value });
  }

  determineShareStatus(e) {
    this.setState({ shareable: e.target.value });
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
  render() {
    console.log("state", this.state);
    return (
      <div>
        <Header />
        <form className="license-form">
        <Route path={`${this.props.match.url}/`} render={() => <LicenseFeatures
          owner={this.state.owner}
          match={this.props.match}
          ownerClick={(e) => this.determineOwnerStatus(e)}
          shareableClick={(e) => this.determineShareStatus(e)}
          shareable = {this.state.shareable}
          ownerName={this.state.ownerName}
          ownerUrl={this.state.ownerUrl}
          candidateName={this.state.candidateName}
          candidateUrl={this.state.candidateUrl}
          handleInputChange = {(e) => this.handleInputChange(e)}/>
          }
        />
        <Route path={`/payment-features`} render= {() => <PaymentFeatures
          match={this.props.match}
          contentName={this.state.contentName}
          contentType={this.state.contentType}
          rateType={this.state.rateType}
          rate={this.state.rate}
          currency={this.state.currency}
          paymentPointer={this.state.paymentPointer}
          handleInputChange={(e) => this.handleInputChange(e)}/>

        } />
        <Route path={`/generate-license`} render={() => <GenerateLicense state={this.state}/>} />
        </form>
        <Footer />
      </div>
    );
  }

}
const mapStateToProps = (state) => {
    return {
        name: state.rootReducer.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
