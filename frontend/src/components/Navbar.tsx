import { ConnectButton } from "@mysten/dapp-kit"
import wavescomp from "../assets/wavescomp.svg"

const Navbar = () => {
  return (
    <header className="bg-slate-900 p-4">
      <div className="flex justify-between">
        <div className="flex gap-2.5 items-center">
          <img src={wavescomp} className="w-8 h-8" />
          <span className="text-2xl font-bold">Polling</span>
        </div>
        <ConnectButton />
      </div>
    </header>
  )
}

export default Navbar;