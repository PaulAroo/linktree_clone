import "./profile.scss";

function Profile() {
  return (
    <section className="profile">
      <div className="profile_img" id="profile__img" tabIndex="0" />
      <button className="profile_btn"></button>
      <p id="twitter">paul_aroo</p>
      <p id="slack">Paul Aromolaran</p>
    </section>
  );
}

export default Profile;
