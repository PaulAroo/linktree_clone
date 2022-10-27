import "./profile.scss";

function Profile() {
  return (
    <section className="profile">
      <div className="profile_img" tabIndex="0">
        <img id="profile__img" src="assets/paul.png" alt="profile image" />
        <div className="overlay" aria-hidden>
          <img src="assets/camicon.svg" alt="camera icon" />
        </div>
      </div>
      <button className="profile_btn"></button>
      <p>Paul Aromolaran</p>
      <p id="twitter">paul_aroo</p>
      <p id="slack">star_thrills</p>
    </section>
  );
}

export default Profile;
