import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ResponseInsert } from "@/types/type";

const AddOrderDialog = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("/api/userOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res: ResponseInsert = await response.json();
    console.log("res", res);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Thêm</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Tạo mới đơn hàng</DialogTitle>
          <DialogDescription>
            Đơn hàng tạo mới phải được điền đầy đủ thông tin và chính xác.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="product_name" className="text-right">
              Tên sản phẩm
            </Label>
            <Input
              name="productName"
              id="product_name"
              defaultValue="Sáo dizi"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="product_url" className="text-right">
              Link sản phẩm
            </Label>
            <Input
              name="productUrl"
              id="product_url"
              defaultValue="https://www.example.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="product_quantity" className="text-right">
              Số lượng sản phẩm
            </Label>
            <Input
              type="number"
              name="quantity"
              id="product_quantity"
              defaultValue="1"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="product_price" className="text-right">
              Giá sản phẩm
            </Label>
            <Input
              type="number"
              name="price"
              id="product_price"
              defaultValue="100"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="product_shipfee" className="text-right">
              Phí vận chuyển
            </Label>
            <Input
              type="number"
              name="shipfee"
              id="product_shipfee"
              defaultValue="9"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="product_address" className="text-right">
              Địa chỉ nhận hàng
            </Label>
            <Input
              name="address"
              id="product_address"
              defaultValue="Hà Nội, Việt Nam"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="product_phone" className="text-right">
              Số điện thoại
            </Label>
            <Input
              name="phone"
              id="product_phone"
              defaultValue="0123456789"
              className="col-span-3"
            />
          </div>
          <Button type="submit">Tạo đơn</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddOrderDialog;
