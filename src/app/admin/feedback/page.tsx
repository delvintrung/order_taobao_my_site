"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Feedback } from "@/types/type";
import AddFeedbackDialog from "../components/AddFeedbackDialog";
import { Button } from "@/components/ui/button";
import { ImageFeedbackDialog } from "../components/ImageFeedbackDialog";

const FeedbackTab = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch("/api/feedback");
      if (!res.ok) {
        throw new Error("Failed to fetch feedbacks");
      }
      const data = await res.json();
      setFeedbacks(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="flex gap-3">
      <div className="w-full h-screen px-10 mt-10">
        <h1 className="font-bold text-2xl text-center">Quản lý đánh giá</h1>
        <div className="flex justify-between items-center mt-2">
          <div>Seach</div>
          <div>
            <AddFeedbackDialog />
          </div>
        </div>
        <div className="mt-5 shadow-md rounded-md overflow-hidden">
          <Table>
            <TableCaption>Các đánh giá trong hệ thống</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Tên người đánh giá</TableHead>
                <TableHead className="w-[400px]">Trang cá nhân</TableHead>
                <TableHead className="w-[200px]">Ảnh đánh giá</TableHead>
                <TableHead className="text-right">Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feedbacks.length > 0 &&
                feedbacks.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell className="font-medium">
                      {feedback.name}
                    </TableCell>
                    <TableCell>{feedback.link_info}</TableCell>

                    <TableCell>
                      <ImageFeedbackDialog
                        image_url={feedback.image_feedback}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end items-center">
                        {/* <EditButton /> */}
                        {/* <DeleteButton /> */}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default FeedbackTab;
