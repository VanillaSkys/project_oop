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
        src={`/api/static/${dataCartoon?.image_background}`}
        alt=""
        width={"100%"}
      />
      <div className="grid gap-4 place-content-evenly absolute justify-center">
        <div className="w-[630px] flex flex-col justify-center items-center gap-2">
          <div className="w-[450px] ">
            <img
              src={`/api/static/${dataCartoon?.image_cartoon}`}
              alt=""
              style={{ borderBottomWidth: "1px", borderBottomColor: "#5F009E" }}
              className="object-contain w-fit mx-auto"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-center text-white">
              {dataCartoon?.name_cartoon}
            </h1>
            <p className="text-gray-500 text-center">{dataCartoon?.author}</p>
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
                  {/* to={`/cartoon/${cartoon}/${value.number_chapter}`  */}
                  <Link to={`/cartoon/${cartoon}/${value.number_chapter}`} state={{chapter: value}}>
                    <img
                      src={`/api/static/${value?.image_chapter[0]}`}
                      className="object-cover rounded-md w-[118px] h-20"
                    />
                    <p className="text-center text-white text-1xl mt-2">
                      ตอนที่ {value?.number_chapter}
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
