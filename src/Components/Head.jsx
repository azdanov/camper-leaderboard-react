// @flow

import React from 'react';
import { Header, Image, Menu, Divider } from 'semantic-ui-react';

const Head = () => (
  <Menu secondary compact>
    <Menu.Item header>
      <Header as="h1">
        Camper Leaderboard
        <Divider />
        <Header.Subheader>
          <Image
            wrapped
            size="medium"
            src="https://www.freecodecamp.org/design-style-guide/downloads/freeCodeCamp-alternative.png"
          />
        </Header.Subheader>
      </Header>
    </Menu.Item>
    <Menu.Item fitted header link>
      <Image
        size="tiny"
        className="rotating"
        href="https://facebook.github.io/react/"
        src="https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png"
      />
    </Menu.Item>
  </Menu>
);

export default Head;
