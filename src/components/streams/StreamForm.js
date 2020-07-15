import React from 'react';
import { Field, reduxForm } from 'redux-form';
class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    } else {
      return null;
    }
  }
  renderInput = (formProps) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {formProps.label}
        </label>
        <input
          {...formProps.input}
          className="shadow appearance-none border border-teal-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        {this.renderError(formProps.meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <section className="w-full flex content-center  justify-center">
        <div className="max-w-lg mt-2 flex content-center">
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="bg-white shadow-md rounded px-16 pt-6 pb-8"
            action=""
          >
            <Field
              name="title"
              component={this.renderInput}
              label="Enter Title"
            />
            <Field
              name="description"
              component={this.renderInput}
              label="Enter Description"
            />
            <button className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};
export default reduxForm({ form: 'streamForm', validate })(StreamForm);
