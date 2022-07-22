import { useState, useRef, useLayoutEffect } from 'react';
import styles from './search.module.scss';

const Search = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const inputEl = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (inputEl.current !== null) {
      inputEl.current.focus();
    }
  }, [showSearch])

  const showSearchHandler = () => {
    setShowSearch(true);
  };

  const hideSearchHandler = () => {
    setShowSearch(false);
  };

  return (
    <div className={styles.searchContainer}>
      <button
        onClick={showSearchHandler}
        className={styles.searchShow}
      ></button>
      <div
        className={`${styles.searchFieldContainer} ${
          showSearch && styles.searchField_isShown
        }`}
      >
        <input ref={inputEl} type="text" className={styles.searchField} />
        <button
          className={styles.searchClose}
          onClick={hideSearchHandler}
        ></button>
      </div>
    </div>
  );
};

export default Search;
