import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function CartoonPage() {
  const { cartoon } = useParams();
  const [dataCartoon, setDataCartoon] = useState({});
  const [chapter, setChapter] = useState([])
  async function GetData() {
    const res = await axios.get(`/api/get_cartoon?cartoon=${cartoon}`);
    const data = await res.data;
    setDataCartoon(data);
	if (data.all_chapter.length > 0) {
		setChapter(data.all_chapter)
	}
  }
  useEffect(() => {
    GetData();
  }, []);
  console.log(dataCartoon);
  return (
    <div className="h-screen flex items-center justify-center">
      <img
        src="https://th-a.kakaopagecdn.com/P/C/48/bg/2x/2d678b69-787d-4a80-a854-32ed5d4f630f.jpg"
        alt=""
        width={"100%"}
      />
      <div className="grid gap-4 place-content-evenly absolute justify-center">
        <div className="w-[630px] flex flex-col justify-center items-center gap-2">
          <div className="w-[450px] ">
            <img
              src={`/api/${dataCartoon.image}`}
              alt=""
              style={{ borderBottomWidth: "1px", borderBottomColor: "#5F009E" }}
              className="object-contain w-fit mx-auto"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-center text-white">
              {dataCartoon.name_cartoon}
            </h1>
            <p className="text-gray-500 text-center">{dataCartoon.author}</p>
          </div>
          <div className="w-[608px]">
            <button
              className="btn w-full btn-block btn-sm mt-5 rounded-md p-1"
              style={{ backgroundColor: "#362863" }}
            >
              <p className="loading loading-spinner text-1xl text-white">
                อ่านต่อ
              </p>
            </button>
          </div>
          <div className="grid grid-flow-col gap-1">
            {
			chapter.map((value, key) => {
              return (
                <div key={key}>
                  <Link to="/chapter">
                    <img
                      src="https://th-a.kakaopagecdn.com/P/EO/48/39571/tn/2x/a1013d70-cbbc-4d39-ac0e-c03a89babca2.jpg"
                      className="object-cover rounded-md w-[118px]"
                    />
                    <p className="text-center text-white text-1xl mt-2">
                      ตอนที่ 1
                    </p>
                  </Link>
                </div>
			)})
			} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartoonPage;
