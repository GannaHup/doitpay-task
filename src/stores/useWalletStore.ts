import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IWallet {
  holder: string;
  number: string;
  limit: string;
  color: string;
  expiredAt: string;
}

type WalletStore = {
  wallets: IWallet[];
  addWallet: (wallet: IWallet) => void;
};

const useWalletStore = create<WalletStore>()(
  persist(
    (set) => ({
      wallets: [],
      addWallet: (wallet) =>
        set((prev) => ({ wallets: [...prev.wallets, wallet] })),
    }),
    { name: "wallet-storage" }
  )
);

export default useWalletStore;
