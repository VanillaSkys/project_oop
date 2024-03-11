import { Link, useParams } from "react-router-dom";

function Footer() {
  const { chapter, cartoon } = useParams();
  const startChapter = chapter.split("_")[0];
  const endChapter = chapter.split("_")[1];

  return (
    <div className="w-full">
      <div className="bg-gray-100	p-2 flex justify-center gap-4">
        <div>
          {startChapter === "1" ? null : (
            <Link
              to={`/cartoon/${cartoon}/${
                Number(startChapter) - 1
              }_${endChapter}`}
              className=" rounded-full drop-shadow-md active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 bg-white hover:bg-gray-700"
            >
              <img
                className="w-[50px] mb-1 mr-1"
                src="../../public/assets/image/back.png"
                alt=""
              />
            </Link>
          )}
        </div>
        <div className="relative w-32">
          <p className="text-center text-2xl mt-2"> ตอนที่ {startChapter} </p>
        </div>
        <div>
          {startChapter === endChapter ? null : (
            <Link
              to={`/cartoon/${cartoon}/${
                Number(startChapter) + 1
              }_${endChapter}`}
              className="rounded-full drop-shadow-md active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 bg-white hover:bg-grat-700"
            >
              <img
                className="w-[51px] ml-1"
                src="../../public/assets/image/next.png"
                alt=""
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
