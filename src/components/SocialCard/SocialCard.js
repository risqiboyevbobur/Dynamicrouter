const SocialCard = ({ userData }) => {
  return (
    <div className="card">
      <div>

        {userData.name.first} {userData.name.last}
      </div>
    </div>
  );
};
export default SocialCard;
