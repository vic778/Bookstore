import BookContainer from '../components/Bookstore';
import Header from '../components/Header';
import InputBook from '../components/InputeBook';

const Books = () => (
  <div>
    <Header />
    <div style={{ padding: '10px 50px' }}>
      <BookContainer />
      <InputBook />
    </div>
  </div>

);

export default Books;