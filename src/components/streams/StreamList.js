import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';
import { Link } from 'react-router-dom';
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </Link>{' '}
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      );
    }
  }
  renderList() {
    return this.props.stream.map((stream) => {
      return (
        <div key={stream.id} className="m-2 ">
          <div className=" shadow-md p-4 bg-white flex items-center w-full">
            <object
              className="h-10 w-10 justify-start"
              data="video-camera.svg"
              type="image/svg+xml"
            >
              Life its hard
            </object>
            <div className="text-left pl-8">
              <h3 className="mb-2 text-gray-700">{stream.title}</h3>
              <p className="text-grey-600 text-sm">{stream.description} </p>
            </div>
            <div className="w-full flex justify-end mr-12">
              {this.renderAdmin(stream)}
            </div>
          </div>
        </div>
      );
    });
  }
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <Link
          to="/streams/new"
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </Link>
      );
    }
  }
  render() {
    return (
      <div className="bg-gray-100 py-6 px-6">
        {this.renderList()}
        <div className="flex justify-end p-5">{this.renderCreate()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stream: Object.values(state.stream),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
