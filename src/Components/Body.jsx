// @flow

import _ from 'lodash';
import * as React from 'react';
import { Table, Header } from 'semantic-ui-react';
import axios from 'axios';
import monthNames from '../Utils/monthNames';
import ImageModal from './ImageModal';

const tableData = [
  {
    username: 'SkyC0der',
    img: 'https://avatars1.githubusercontent.com/u/24684319?v=4',
    alltime: 2323,
    recent: 189,
    lastUpdate: '2017-09-07T04:51:38.160Z',
  },
];

function getTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${hours}:${minutes}`;
}

function getDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  return `${day}-${month}-${year}`;
}

type State = {
  column: string | null,
  data: Array<Object>,
  direction: 'ascending' | 'descending' | 'ascending' | null,
};

class Body extends React.Component<any, State> {
  state = {
    column: null,
    data: tableData,
    direction: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`)
      .then(({ data }) => {
        this.setState({ data });
      });
  };

  handleSort = (clickedColumn: string) => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
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
      </Table>
    );
  }
}

export default Body;
