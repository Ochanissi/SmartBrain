import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import accounticon from './default.jpg';

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            onClick={this.toggle}
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src={accounticon}
              className="br4 h3 w3 dib"
              style={{ border: '2px solid #3366ff', borderRadius: '14px' }}
              alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu
            className="b--transparent shadow-5"
            style={{
              marginTop: '15px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              right: '0',
              left: 'auto'
            }}
            right
          >
            <DropdownItem onClick={() => this.props.toggleModal()}>
              View Profile
            </DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange('signout')}>
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
