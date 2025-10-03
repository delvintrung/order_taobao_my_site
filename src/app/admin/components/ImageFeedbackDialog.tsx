import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function ImageFeedbackDialog({
  image_url,
}: {
  image_url: string | undefined;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Xem ảnh</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chi tiết ảnh đánh giá</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Image
            src={image_url != undefined ? image_url : "/profile.png"}
            alt=""
            width={400}
            height={1000}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
