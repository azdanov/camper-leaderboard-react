// @flow
import * as React from 'react';
import { Image, Modal } from 'semantic-ui-react';

const ImageModal = (props: { img: string, username: string }) => (
  <Modal
    basic
    closeIcon
    size="mini"
    trigger={<Image className="clickable" src={props.img} size="huge" spaced />}
  >
    <Modal.Header>{props.username}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={props.img} />
    </Modal.Content>
  </Modal>
);

export default ImageModal;
