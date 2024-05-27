import React, { Component } from "react";
import Checkbox from "../components/checkedboxs";

const OPTIONS = ["One", "Two", "Three" , "four"];

class Application extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
  };

  selectAllCheckboxes = (isSelected) => {
    Object.keys(this.state.checkboxes).forEach((checkbox) => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState((prevState) => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter((checkbox) => this.state.checkboxes[checkbox])
      .forEach((checkbox) => {
        console.log(checkbox, "is selected.");
      });
  };

  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-sm-12 ">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group d-flex">
                <button
                  type="button"
                  className="btn btn-outline-primary" style={{marginRight:'10px'}}
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary ms-9" style={{marginRight:'10px'}}
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary" style={{minHeight:'12px'}}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Application;
