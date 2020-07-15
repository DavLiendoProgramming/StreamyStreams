import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Component } from 'react';
import { fetchStream, editStream } from '../../actions/index';
import StreamForm from './StreamForm';
export class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return <div>...Loading</div>;
    } else {
      return (
        <section className="w-full flex content-center  justify-center">
          <div className="max-w-lg mt-40 text-center">
            <h3>{this.props.stream.title}</h3>
            <StreamForm
              initialValues={_.pick(this.props.stream, 'title', 'description')}
              onSubmit={this.onSubmit}
            />
          </div>
        </section>
      );
    }
  }
}

//Adding ownProps to the state
const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
