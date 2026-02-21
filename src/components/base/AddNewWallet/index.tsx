import { IconCirclePlus } from "@tabler/icons-react";
import type React from "react";
import type { AddNewWalletProps } from "./AddNewWallet.types";

const AddNewWallet: React.FC<AddNewWalletProps> = ({ onAddNewWallet }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-0.5 border border-dotted border-slate-950 h-36 min-w-48 rounded-lg cursor-pointer"
      data-testid="add-new-card"
      onClick={onAddNewWallet}
    >
      <IconCirclePlus />
      <div>Add new Card</div>
    </div>
  );
};

export default AddNewWallet;
