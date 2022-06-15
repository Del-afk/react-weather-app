import "./searchbar.css";

export default function Searchbar() {
  return (
    <div className="input-group mb-3 searchholder">
      <input
        type="text"
        className="form-control"
        placeholder="search city here..."
        aria-label="search city here..."
        aria-describedby="button-addon2"
        id="searchinput"
        autoComplete="off"
      />
      <button
        className="btn btn-outline-secondary searchbutton"
        type="button"
        id="button-addon2"
      >
        <img className="searchicon" src="/icons8-search.svg" alt="" />
      </button>
    </div>
  );
}
