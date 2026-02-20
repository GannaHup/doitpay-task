import type { DialogProps } from "@components/base/Dialog/Dialog.types";
import type { IWallet } from "@stores/useWalletStore";

export interface WalletDetailDialogProps extends Omit<DialogProps, "children"> {
  walletDetail?: IWallet;
}
