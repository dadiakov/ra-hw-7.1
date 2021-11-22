import React from 'react';
import changeTime from "./changeTime";
import DateTime from "./DateTime";
import PropTypes from 'prop-types';

const dateTimePretty = changeTime => Component => class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: '' };
      this.interval = 0;
      this.showPrettyTime = this.showPrettyTime.bind(this);
      this.changeTime = changeTime;
    }

    showPrettyTime() {
      this.setState({ date: this.changeTime(this.props.date) });
    }

    componentDidMount() {
      this.showPrettyTime();
      this.interval = setInterval(() => this.showPrettyTime(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
};

dateTimePretty.propTypes = {
    date: PropTypes.string.isRequired,
}


const DateTimePretty = dateTimePretty(changeTime)(DateTime);
export default DateTimePretty;