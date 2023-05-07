import { Formik } from 'formik';

import { errorEmptyInput } from 'components/Error/emptyInput';

import PropTypes from 'prop-types';

import {
  ContainerBar,
  Button,
  LabelBtn,
  Input,
  FormsSt,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = ({ text }, actions) => {
    if (text.trim() === '') {
      errorEmptyInput();
    }

    onSubmit(text);
    actions.setSubmitting(false);
  };

  return (
    <ContainerBar>
      <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <FormsSt>
            <Button type="submit" disabled={isSubmitting}>
              <LabelBtn>Search</LabelBtn>
            </Button>

            <Input
              name="text"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </FormsSt>
        )}
      </Formik>
    </ContainerBar>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};