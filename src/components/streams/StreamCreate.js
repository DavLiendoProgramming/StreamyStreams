import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';
class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <section className="w-full flex content-center  justify-center">
        <div className="max-w-lg mt-40 text-center">
          <h3>Create a Stream</h3>
          <StreamForm onSubmit={this.onSubmit} />
        </div>
      </section>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
