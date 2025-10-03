import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "@/types/type";
import Order from "@/models/order";
import { connectToDB, disconnectFromDB } from "@/utils/database";

type Props = {
  orderId: string;
  ListUserContext: React.Context<User[]>;
};

const UpdateOrderDialog = ({ orderId, ListUserContext }: Props) => {
  const users: User[] = useContext(ListUserContext);

  const handleUpdateOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <Pencil />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cập nhật đơn hàng</DialogTitle>
          <DialogDescription>
            Cập nhật lại người dùng cho đơn hàng này
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleUpdateOrder}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Select name="userId">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Chọn người dùng" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Người dùng</SelectLabel>
                  {users.length > 0 &&
                    users.map((user) => (
                      <SelectItem value={user.id} key={user.email}>
                        {user.username} | {user.email}
                      </SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Lưu</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateOrderDialog;
