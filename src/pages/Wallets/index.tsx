import WalletCard from "@components/base/WalletCard";
import WalletDetailDialog from "@components/composite/WalletDetailDialog";
import useWalletStore, { type IWallet } from "@stores/useWalletStore";
import { IconChevronLeft } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const WalletsPage = () => {
  const { wallets } = useWalletStore();
  const [walletDetail, setWalletDetail] = useState<IWallet>();

  return (
    <>
      {/* Wallet Detail Dialog */}
      <WalletDetailDialog
        isOpen={walletDetail !== undefined}
        walletDetail={walletDetail}
        onClose={() => setWalletDetail(undefined)}
      />

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Link to="/">
            <IconChevronLeft className="cursor-pointer" size={24} />
          </Link>
          <div className="text-slate-900 font-medium text-xl">Wallet List</div>
        </div>

        <div className="grid grid-cols-5 gap-4 max-[1120px]:grid-cols-4 max-[960px]:grid-cols-3 max-[678px]:grid-cols-2 max-[478px]:grid-cols-1">
          {wallets.map((wallet, index) => (
            <WalletCard
              wallet={wallet}
              key={index}
              onSeeDetail={() => setWalletDetail(wallet)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WalletsPage;
