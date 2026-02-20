import Dialog from "@components/base/Dialog";
import type { WalletDetailDialogProps } from "./WalletDetailDialog.types";
import Button from "@components/base/Button";
import formatter from "@libs/formatter";
import { IconX } from "@tabler/icons-react";

const WalletDetailDialog: React.FC<WalletDetailDialogProps> = ({
  walletDetail,
  ...props
}) => {
  if (!walletDetail) return;
  return (
    <Dialog className="flex flex-col gap-5 p-4" {...props}>
      <div className="flex justify-between items-center">
        <div className="text-slate-900 font-medium text-xl">Card Detail</div>
        <IconX
          size={20}
          className="text-gray-500 cursor-pointer"
          onClick={props.onClose}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex gap-2 p-4 border-b border-y-gray-200">
          <div className="basis-1/3 text-gray-500 text-sm">
            Card Holder name
          </div>
          <div className="text-sm">{walletDetail.holder}</div>
        </div>
        <div className="flex gap-2 p-4 border-b border-y-gray-200">
          <div className="basis-1/3 text-gray-500 text-sm">Expired At</div>
          <div className="text-sm">
            {formatter.dateMMYYYY(walletDetail.expiredAt)}
          </div>
        </div>
        <div className="flex gap-2 p-4 border-y-gray-200">
          <div className="basis-1/3 text-gray-500 text-sm">Card Color</div>
          <div className="flex items-center border border-gray-200 rounded-lg p-1">
            <div
              className="w-10 h-3.5 rounded-full"
              style={{ backgroundColor: walletDetail.color }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button variant="secondary" onClick={props.onClose}>
          Cancel
        </Button>
      </div>
    </Dialog>
  );
};

export default WalletDetailDialog;
