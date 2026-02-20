import { IconChevronRight } from "@tabler/icons-react";
import { useDisclosure } from "@hooks/useDisclosure";
import AddNewWalletDialog from "@components/composite/AddNewWalletDialog";
import useWalletStore, { type IWallet } from "@stores/useWalletStore";
import { useState } from "react";
import WalletDetailDialog from "@components/composite/WalletDetailDialog";
import WalletCarousel from "@components/composite/WalletCarousel";
import AddNewWallet from "@components/base/AddNewWallet";
import { Link } from "react-router-dom";

const HomePage = () => {
  const addNewWalletDialog = useDisclosure({ open: false });
  const { wallets, addWallet } = useWalletStore();
  const [walletDetail, setWalletDetail] = useState<IWallet>();

  const handleSeeDetail = (walletDetail: IWallet) => {
    setWalletDetail(walletDetail);
  };

  return (
    <>
      {/* Add New Wallet Dialog */}
      <AddNewWalletDialog
        isOpen={addNewWalletDialog.isOpen}
        onCreate={addWallet}
        onClose={addNewWalletDialog.onClose}
      />

      {/* Wallet Detail Dialog */}
      <WalletDetailDialog
        isOpen={walletDetail !== undefined}
        walletDetail={walletDetail}
        onClose={() => setWalletDetail(undefined)}
      />

      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="text-slate-900">Cards</div>
          <div className="flex items-center gap-0.5">
            <Link to="/wallets" className="text-sm text-red-400">
              View All
            </Link>
            <IconChevronRight size={20} className="text-red-400" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <AddNewWallet onAddNewWallet={addNewWalletDialog.onOpen} />
          <div className="flex-1 min-w-0">
            <WalletCarousel wallets={wallets} onSeeDetail={handleSeeDetail} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
