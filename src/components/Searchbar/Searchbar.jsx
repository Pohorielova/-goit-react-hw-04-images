import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
  HeaderSearch,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchFormBtnLabel,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('atatata');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <HeaderSearch>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <BsSearch />
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
          onChange={handleQueryChange}
        />
      </SearchForm>
    </HeaderSearch>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class OldSearchbar extends Component {
//   state = {
//     searchQuery: '',
//   };
//   handleQueryChange = e => {
//     this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.searchQuery.trim() === '') {
//       alert('atatata');
//       return;
//     }
//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: '' });
//   };
//   render() {
//     return (
//       <HeaderSearch>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchFormBtn type="submit">
//             <BsSearch />
//             <SearchFormBtnLabel>Search</SearchFormBtnLabel>
//           </SearchFormBtn>

//           <SearchFormInput
//             type="text"
//             autocomplete="off"
//             placeholder="Search images and photos"
//             onChange={this.handleQueryChange}
//           />
//         </SearchForm>
//       </HeaderSearch>
//     );
//   }
// }

// export default Searchbar;
