import ToggleButton from "../components/ToggleButton"

function MenuPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[630px] flex flex-col justify-center items-center gap-2">
        <div>Login</div>
        <div>Term Coin</div>
        <div className="w-full flex justify-between gap-2 items-center">
          <div className="w-full text-center bg-slate-500">History Coin</div>
          <div className="w-full text-center bg-slate-500">History Chapter</div>
        </div>
        <ToggleButton />
      </div>
    </div>
  )
}

export default MenuPage