import type { IWallet } from "@stores/useWalletStore";

export interface WalletCardProps {
  wallet: IWallet;
  onSeeDetail: (wallet: IWallet) => void;
}
