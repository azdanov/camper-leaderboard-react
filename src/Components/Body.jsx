// @flow

import _ from 'lodash';
import * as React from 'react';
import { Table, Header, List } from 'semantic-ui-react';
import axios from 'axios';
import { getDate, getTime } from '../Utils/date';
import ImageModal from './ImageModal';

type State = {
  column: ?string,
  data: Array<Object>,
  direction: ?('ascending' | 'descending'),
};

class Body extends React.Component<any, State> {
  state = {
    column: null,
    data: [],
    direction: null,
  };

  componentDidMount() {
    this.fetchData().then(({ data }) => {
      this.setState({ data, column: 'recent', direction: 'descending' });
    });
  }

  fetchData = () =>
    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`);

  handleSort = (clickedColumn: string) => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]).reverse(),
        direction: 'descending',
      });
      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    });
  };

  render() {
    const { column, data, direction } = this.state;

    return (
      <Table sortable celled fixed striped selectable textAlign="center">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'username' ? direction : null}
              onClick={this.handleSort('username')}
            >
              Camper
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'recent' ? direction : null}
              onClick={this.handleSort('recent')}
            >
              Points in past 30 days
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'alltime' ? direction : null}
              onClick={this.handleSort('alltime')}
            >
              All time points
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'lastUpdate' ? direction : null}
              onClick={this.handleSort('lastUpdate')}
            >
              Last Active
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ recent, alltime, username, img, lastUpdate }) => (
            <Table.Row key={username}>
              <Table.Cell>
                <Header as="h2" size="medium" textAlign="left">
                  <ImageModal img={img} username={username} />
                  <a href={`https://www.freecodecamp.com/${username}`}>
                    {username}
                  </a>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Header as="medium" content={recent} />
              </Table.Cell>
              <Table.Cell>
                <Header as="medium" content={alltime} />
              </Table.Cell>
              <Table.Cell>
                <div>
                  <Header sub size="huge" content={getTime(lastUpdate)} />
                  <span>{getDate(lastUpdate)}</span>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              Built with:
              <List bulleted horizontal>
                <List.Item as="a" href="https://facebook.github.io/react/">
                  React
                </List.Item>
                <List.Item as="a" href="https://react.semantic-ui.com/">
                  Semantic UI React
                </List.Item>
              </List>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default Body;
