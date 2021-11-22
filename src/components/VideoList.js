import Video from "./Video";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default function VideoList(props) {
    return props.list.map((item) => <Video url={item.url} date={item.date} key={uuidv4()} />);
}

VideoList.propTypes = {
    date: PropTypes.string,
    url: PropTypes.string.isRequired,
}

VideoList.defaultProps = {
    date: '2021-11-18 20:52:00',
}