import { Link } from "react-router-dom";
import ToggleButton from "../components/ToggleButton";
import axios from "axios";

function MenuPage() {
  async function logout() {
    try{
      await axios.post('/api/logout', {username: localStorage.getItem('user')})
      localStorage.removeItem('user')
      location.reload(false)
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <div>
      <div className="flex justify-between">
        <Link to="/" className="">
          Back
        </Link>
        <div className="w-[630px] flex flex-col justify-center items-center gap-2">
          <div>{localStorage.getItem('user')}</div>
          <div>
            {!localStorage.getItem("user") ? (
              null
            ) : (
              "coin"
            )}
          </div>
          <div>Term Coin</div>
          <div className="w-full flex justify-between gap-2 items-center">
            <div className="w-full text-center bg-slate-500">History Coin</div>
            <div className="w-full text-center bg-slate-500">
              History Chapter
            </div>
          </div>
          <ToggleButton />
        </div>
        <div className="">
            {!localStorage.getItem("user") ? (
              <Link to="/login">Login</Link>
            ) : (
              <button onClick={() => logout()}>Logout</button>
            )}
          </div>
      </div>
    </div>
  );
}

export default MenuPage;
