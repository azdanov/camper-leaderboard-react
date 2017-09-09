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
            href="https://www.freecodecamp.org/"
            size="medium"
            src="https://res.cloudinary.com/anton-zdanov/image/upload/v1504940425/camper-leaderboard/freeCodeCamp-alternative.png"
          />
        </Header.Subheader>
      </Header>
    </Menu.Item>
    <Menu.Item fitted header link>
      <Image
        size="tiny"
        className="rotating"
        href="https://facebook.github.io/react/"
        src="https://res.cloudinary.com/anton-zdanov/image/upload/v1504940425/camper-leaderboard/react-logo-1000-transparent.png"
      />
    </Menu.Item>
  </Menu>
);

export default Head;
