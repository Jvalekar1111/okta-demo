import { useOktaAuth } from '@okta/okta-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, Image, Menu } from 'semantic-ui-react';

const Navbar = () => {
  const { authState, oktaAuth } = useOktaAuth();

  const login = async () => oktaAuth.signInWithRedirect();
  const logout = async () => oktaAuth.signOut("");

  if (!authState) {
    return null;
  }

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <Image size="mini" src="/react.svg" />
            &nbsp;
            <Link to="/">Discount Tire Login</Link>
          </Menu.Item>     
                  
        </Container>
      </Menu>
    </div>
  );
};
export default Navbar;