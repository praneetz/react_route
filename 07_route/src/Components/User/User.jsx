import { useParams } from "react-router-dom";

const User = () => {
  const {userId} = useParams()
  return (
  <div className="text-center m-3 h-48 align-bottom flex items-center justify-center">
    Users : {userId}
  </div>)
};

export default User;
