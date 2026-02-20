import type { IWallet } from "@stores/useWalletStore";

export interface WalletCarouselProps {
  wallets: IWallet[];
  onSeeDetail: (wallet: IWallet) => void;
}
