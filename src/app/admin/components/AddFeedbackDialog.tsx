import React from "react";
import {
  Dialog,
  DialogClose,
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

const AddFeedbackDialog = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData,
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
          <DialogTitle>Tạo mới đánh giá</DialogTitle>
          <DialogDescription>
            Đánh giá từ khách hàng đã sử dụng dịch vụ
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="feedback_user" className="text-right">
              Tên khách hàng
            </Label>
            <Input
              name="feedback_text"
              id="feedback_user"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="feedback_user_link" className="text-right">
              Link khách hàng
            </Label>
            <Input
              name="feedback_link"
              id="feedback_user_link"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="feedback_img" className="text-right">
              Hình ảnh
            </Label>
            <Input
              type="file"
              name="img_feedback"
              id="feedback_img"
              className="col-span-3"
              accept="image/*"
            />
          </div>
          <DialogClose asChild>
            <Button type="submit">Tạo đánh giá</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFeedbackDialog;
