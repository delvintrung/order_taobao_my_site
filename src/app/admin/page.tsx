"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Order } from "@/types/type";
import { Pencil, Trash2 } from "lucide-react";
import AddOrderDialog from "./components/AddOrderDialog";

const Admin = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/userOrder");
      const data = await res.json();
      setOrders(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="flex gap-3">
      <div className="w-full h-screen px-10">
        <div className="flex justify-between items-center mt-2">
          <div>Seach</div>
          <div>
            <AddOrderDialog />
          </div>
        </div>
        <div className="mt-5 shadow-md rounded-md overflow-hidden">
          <Table>
            <TableCaption>Các đơn hàng đã được tạo trong hệ thống</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Thông tin sản phẩm</TableHead>
                <TableHead className="w-[400px]">
                  Mức giá (Nhân dân tệ)
                </TableHead>
                <TableHead className="w-[200px]">
                  Thông tin người nhận
                </TableHead>
                <TableHead className="text-right">
                  Trạng thái đơn hàng
                </TableHead>
                <TableHead className="text-right">Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order: Order) => (
                <TableRow className="h-[130px]" key={order._id}>
                  <TableCell className="text-medium">
                    <p>{order.productName}</p>
                    <div className="text-blue-400">
                      <Link href={order.productUrl}>Link sản phẩm</Link>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p>Giá sản phẩm: {order.price}</p>
                    <p>Số lượng: {order.quantity}</p>
                    <p>Phí vận chuyển: {order.shipfee}</p>
                    <p>Phí trung gian: {"Tạm tính"}</p>
                    <p>Tổng tiền: {order.totalPrice}</p>
                  </TableCell>
                  <TableCell>
                    <p>Tên nhận: {order.owener?.name}</p>
                    <p>Số điện thoại: {order.phone}</p>
                    <p>Địa chỉ: {order.address}</p>
                  </TableCell>
                  <TableCell className="text-right">{order.status}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end items-center">
                      <div className="cursor-pointer">
                        <Pencil />
                      </div>
                      <div className="cursor-pointer">
                        <Trash2 color="#ff0000" />
                      </div>
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

export default Admin;
