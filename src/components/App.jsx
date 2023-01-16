import { useState, useEffect } from 'react';
import { Box } from './Box';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { ColorRing } from 'react-loader-spinner';
export default function App() {
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const loadMore = () => {
    loaderToggle(true);
    setPage(prevState => prevState + 1);
  };
  const loaderToggle = bool => {
    return setShowLoader(({ showLoader }) => bool);
  };
  const toggleModal = () => {
    setShowModal(({ showModal }) => !showModal);
  };
  // eslint-disable-next-line no-unused-vars
  const setingModalImage = linkImg => {
    return setModalImage(({ modalImage }) => linkImg);
  };
  const openLargeImage = linkImg => {
    this.setModalImage(linkImg);
    this.toggleModal();
  };
  useEffect(() => {
    if (searchQuery !== '') {
      fetch(
        `https://pixabay.com/api/?key=31598593-79bd95191575728407a30b47c&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const newData = data.hits;
          loaderToggle(false);
          setData(data => {
            if (page === 1) {
              return newData;
            }
            return [...data, ...newData];
          });
        });
    }
  }, [searchQuery, page]);

  const handleFormSubmit = searchQuery => {
    setPage(1);
    setData([]);
  };
  return (
    <Box as="div" p={0}>
      {showModal && (
        <Modal closeFn={toggleModal} loader={loaderToggle}>
          <img src={modalImage} alt="modal" />
        </Modal>
      )}
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      <ImageGallery
        searchQuery={searchQuery}
        page={page}
        data={data}
        modalFn={openLargeImage}
        loader={loaderToggle}
      ></ImageGallery>

      {data.length >= 12 && (
        <Box
          as="div"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          pt={20}
          pb={20}
        >
          {showLoader && (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          )}
          <Button onClick={loadMore}></Button>
        </Box>
      )}
    </Box>
  );
}
// class App extends Component {
//   state = {
//     page: 1,
//     searchQuery: '',
//     data: [],
//     showModal: false,
//     modalImage: '',
//     showLoader: false,
//   };
//   loadMore = () => {
//     this.loaderToggle(true);
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };
//   loaderToggle = bool => {
//     return this.setState(({ showLoader }) => ({ showLoader: bool }));
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };
//   setModalImage = linkImg => {
//     return this.setState(({ modalImage }) => ({ modalImage: linkImg }));
//   };
//   openLargeImage = linkImg => {
//     this.setModalImage(linkImg);
//     this.toggleModal();
// //   };
// componentDidUpdate(prevProps, prevState) {
//   if (
//     prevState.page !== this.state.page ||
//     prevState.searchQuery !== this.state.searchQuery
//   ) {
//     fetch(
//       `https://pixabay.com/api/?key=31598593-79bd95191575728407a30b47c&q=${this.state.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=12`
//     )
//       .then(res => res.json())
//       .then(data => {
//         const newData = data.hits;
//         let newArray = [];
//         newArray = [...this.state.data, ...newData];
//         this.loaderToggle(false);
//         this.setState(({ data }) => ({ data: newArray }));
//       });
//   }
// }

//   handleFormSubmit = searchQuery => {
//     this.setState({ searchQuery });
//     this.setState({ page: 1, data: [] });
//   };

//   render() {
//     return (
//       <Box as="div" p={0}>
//         {this.state.showModal && (
//           <Modal closeFn={this.toggleModal} loader={this.loaderToggle}>
//             <img src={this.state.modalImage} alt="modal" />
//           </Modal>
//         )}
//         <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
//         <ImageGallery
//           searchQuery={this.state.searchQuery}
//           page={this.state.page}
//           data={this.state.data}
//           modalFn={this.openLargeImage}
//           loader={this.loaderToggle}
//         ></ImageGallery>

//         {this.state.data.length >= 12 && (
//           <Box
//             as="div"
//             display="flex"
//             justifyContent="center"
//             flexDirection="column"
//             alignItems="center"
//             pt={20}
//             pb={20}
//           >
//             {this.state.showLoader && (
//               <ColorRing
//                 visible={true}
//                 height="80"
//                 width="80"
//                 ariaLabel="blocks-loading"
//                 wrapperStyle={{}}
//                 wrapperClass="blocks-wrapper"
//                 colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//               />
//             )}
//             <Button onClick={this.loadMore}></Button>
//           </Box>
//         )}
//       </Box>
//     );
//   }
// }
// // export default App;
