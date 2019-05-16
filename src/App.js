import React from "react";
import JobList from "./components/JobList";
import { Provider } from "react-redux";
import store from "./store";
import Sort from "./components/Sort";
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 900px;
  padding-top: 24px;
  margin: 0 auto;
`

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <Sort />
          <JobList />
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
