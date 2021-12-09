import "../assets/Home.css";

function Home() {
  return (
    <div className="homeWrapper">
      <div className="searchBar">
        <div>
          <label for="">Location</label>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div>
          <label for="">Check in</label>
          <input type="text" placeholder="Add dates" />
        </div>
        <div>
          <label for="">Check out</label>
          <input type="text" placeholder="Add dates" />
        </div>
        <div>
          <label for="">Guests</label>
          <input type="text" placeholder="Add guests" />
        </div>

        <button>Search</button>
      </div>

      <div className="homeHeroWrapper">
        <div>
          <img src="https://a0.muscache.com/im/pictures/21c2735e-a734-40f8-9f60-9ac299c4394c.jpg?im_w=1920" alt="" />
        </div>

        <div className="homeHeroContent">
          <h1>Not sure where to go? Perfect.</h1>

          <a href="#">
            <span>I'm Flexible</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
