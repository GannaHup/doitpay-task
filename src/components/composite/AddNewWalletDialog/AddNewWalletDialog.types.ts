import type { DialogProps } from "@components/base/Dialog/Dialog.types";
import type { IWallet } from "@stores/useWalletStore";

export interface AddNewWalletDialogProps extends Omit<DialogProps, "children"> {
  onCreate: (form: IWallet) => void;
}
