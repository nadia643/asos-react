
import React from "react";

export default function SearchFormIngredient({ setSearchTerm }) {
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchIngredient() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section">
      <h2 className="heading-search">Search Ingredients</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Input ingredient name here"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchIngredient}
          />
        </div>
      </form>
    </section>
  );
}