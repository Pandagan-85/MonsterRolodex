import "./search-box.styles.css";
import { ChangeEvent } from "react";
type SearchBoxProps = {
  className: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  testoPlaceHolder?: string;
};

const SearchBox = ({
  className,
  onChangeHandler,
  testoPlaceHolder,
}: SearchBoxProps) => {
  return (
    <input
      // className='search-box'
      className={`search-box ${className}`}
      // onChange={onSearchChange}
      onChange={onChangeHandler}
      type='search'
      placeholder={testoPlaceHolder}
    />
  );
};
export default SearchBox;
