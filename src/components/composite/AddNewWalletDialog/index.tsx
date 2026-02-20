import Dialog from "@components/base/Dialog";
import type React from "react";
import type { AddNewWalletDialogProps } from "./AddNewWalletDialog.types";
import InputText from "@components/base/InputText";
import { useState } from "react";
import Button from "@components/base/Button";
import { IconX } from "@tabler/icons-react";
import ColorPicker from "@components/base/ColorPicker";
import DatePicker from "@components/base/DatePicker";
import type { IWallet } from "@stores/useWalletStore";

const initialForm = {
  holder: "",
  number: "",
  limit: "",
  color: "#000000",
  expiredAt: "",
};

const initialErrorMessage = {
  holder: "",
  number: "",
  limit: "",
  expiredAt: "",
};

type InitialFormType = typeof initialForm;

const AddNewWalletDialog: React.FC<AddNewWalletDialogProps> = ({
  onClose,
  onCreate,
  ...props
}) => {
  const [form, setForm] = useState<IWallet>(initialForm);
  const [errorMessage, setErrorMessage] =
    useState<Omit<IWallet, "color">>(initialErrorMessage);

  const handleClose = () => {
    setForm(initialForm);
    onClose();
  };

  const validationForm = () => {
    const error = { ...initialErrorMessage };
    if (form.holder.length > 0 && form.holder.length < 3)
      error.holder = "Credit Card Holder must be at least 3 characters";
    if (!form.holder) error.holder = "Credit Card Holder is required";

    if (form.number.length > 0 && form.number.length < 16)
      error.number = "Credit Card Number must be 16 digits";
    if (!form.number) error.number = "Credit Card Number is required";

    if (!form.limit) error.limit = "Credit Card Limit is required";
    if (!form.expiredAt) error.expiredAt = "Expired Date is required";

    setErrorMessage(error);

    return Object.values(error).every((val) => val === "");
  };

  const handleChangeField = (key: keyof InitialFormType, value: string) => {
    setErrorMessage((prev) => ({ ...prev, [key]: "" }));
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddWallet = () => {
    const isValid = validationForm();
    if (!isValid) return;
    onCreate(form);
    handleClose();
  };

  return (
    <Dialog
      className="flex flex-col gap-5 p-4"
      onClose={handleClose}
      {...props}
    >
      <div className="flex justify-between items-center">
        <div className="text-slate-900 font-medium text-xl">Add New Card</div>
        <IconX
          size={20}
          className="text-gray-500 cursor-pointer"
          onClick={handleClose}
        />
      </div>

      <div className="flex flex-col gap-2">
        <InputText
          label="Credit Card Holder"
          value={form.holder}
          error={errorMessage.holder}
          onChange={(val) => handleChangeField("holder", val)}
        />
        <InputText
          label="Credit Card Number"
          mode="card-number"
          value={form.number}
          error={errorMessage.number}
          onChange={(val) => handleChangeField("number", val)}
        />
        <InputText
          label="Credit Card Spend Limit"
          mode="number"
          value={form.limit}
          error={errorMessage.limit}
          onChange={(val) => handleChangeField("limit", val)}
        />
        <ColorPicker
          label="Credit Card Color"
          value={form.color}
          onChange={(val) => handleChangeField("color", val)}
        />
        <DatePicker
          label="Expired At"
          value={form.expiredAt}
          error={errorMessage.expiredAt}
          onChange={(val) => handleChangeField("expiredAt", val)}
        />
      </div>

      <div className="w-full flex justify-end gap-2">
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleAddWallet}>Add</Button>
      </div>
    </Dialog>
  );
};

export default AddNewWalletDialog;
