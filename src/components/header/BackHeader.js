import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';
export default class HeaderBack extends Component {
  render() {
    return (
      <Header noShadow style={{backgroundColor: '#005D66'}}>
        <Left>
          <Button
            transparent
            onPress={() => {
              this.props.navigation.goBack(2);
            }}>
            <Icon name="arrow-back" style={{fontSize: 20, color: 'white'}} />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.value}</Title>
        </Body>
      </Header>
    );
  }
}