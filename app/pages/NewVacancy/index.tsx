import * as React from 'react';
import { Card } from 'elemental';
import { connect } from 'react-redux';

import Vacancy from 'models/Vacancy';
import { INewVacancy } from 'interfaces';
import Form from './components/Form';
import selectors from './selectors';
import {
  createVacancy,
  handleCancel,
  loadFieldsValues, loadCities, loadCountries
} from './actions';

import * as css from './style.scss';

interface Props {
  createdVacancy: Vacancy;
  createVacancy(vacancy: INewVacancy);
  handleCancel();
  loadFieldsValues(): void;
  loadCities(): void;
  loadCountries(): void;
  availableCategories: {title: string, id: number, parent: number}[];
  autocompleteKeywords: string[];
  autocompleteCities: string[];
  autocompleteCountries: string[];
};

interface State {};

class NewVacancy extends React.Component<Props, State> {
  onFormSubmit = (vacancy: INewVacancy) => {
    this.props.createVacancy(vacancy)
  };
  componentDidMount() {
    this.props.loadFieldsValues();
  }
  render() {
    return (
      <Card className={css.newVacancy}>
        <h1 className={css.title}>
          Новая вакансия
        </h1>
        <Form onSubmit={this.onFormSubmit} { ...this.props } />
      </Card>
    );
  }
};

const mapStateToProps = state => selectors(state);

const mapDispatchToProps = dispatch => ({
  createVacancy: (vacancy: INewVacancy) => dispatch(createVacancy(vacancy)),
  handleCancel: () => dispatch(handleCancel()),
  loadFieldsValues: () => dispatch(loadFieldsValues()),
  loadCities: (searchString) => dispatch(loadCities(searchString)),
  loadCountries: (searchString) => dispatch(loadCountries(searchString))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewVacancy);