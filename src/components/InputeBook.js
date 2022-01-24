import Button from './Button';
import Select from './Select';

const InputeBook = () => (
  <section>
    <div>
      <h2>ADD NEW BOOK</h2>
    </div>
    <div>
      <form style={{ display: 'flex', alignItems: 'center' }}>
        <input type="test" placeholder="Book Title" />
        <input type="test" placeholder="Author" />
        <Select />
        <Button type="submit" text="ADD BOOK" />
      </form>
    </div>
  </section>
);

export default InputeBook;
