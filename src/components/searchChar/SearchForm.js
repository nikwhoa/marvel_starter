import './form.scss'

const SearchForm = () => {
    return (
        <div className="search-form">
            <form>
                <label htmlFor="search">Or find a character by name:</label>
                <input type="text" id="search" placeholder="Search..." />
                <button class="button button__main"><div class="inner">find</div></button>
            </form>
        </div>
    )
}

export default SearchForm