"use client";
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { getOrderById } from "@/app/fetch/fetchData";
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
import { Button } from "@/components/ui/button";

const User = () => {
  const params = useParams();
  const { data: session } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const tableColumns = [
    "Thông tin sản phẩm",
    "Giá (Nhân dân tệ)",
    "Thông tin người nhận",
    "Trạng thái đơn hàng",
  ];

  useEffect(() => {
    if (session?.user?.email == process.env.ADMIN_EMAIL) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    const fetchData = async () => {
      const id = params.id as string;
      if (id) {
        const data = await getOrderById(id);
        setOrders(data);
      }
    };
    fetchData();
    console.log(isAdmin);
  }, [params.id]);
  return (
    <div className="flex flex-col items-center mt-30 h-screen md:px-20 px-5">
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account"> Tài Khoản</TabsTrigger>
          <TabsTrigger value="package">Các đơn đã đặt</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="flex flex-col ">
            <div className="flex gap-4">
              <label className="text-xl">Avatar:</label>
              <Image
                width={200}
                height={200}
                alt=""
                className="rounded-full border border-gray-300"
                src={session?.user?.image || "/profile.png"}
              />
            </div>
            <div className="flex gap-4 mt-1.5">
              <label className="text-xl">Tên:</label>
              <p className="text-xl">{session?.user?.name || "Nguyễn Văn A"}</p>
            </div>
            <div className="flex gap-4 mt-1.5 mb-2">
              <label className="text-xl">Email:</label>
              <p className="text-xl">
                {(session?.user?.email ?? "").replace("%", "@")}
              </p>
            </div>
            {isAdmin && (
              <Link href="/admin">
                <Button>Đến trang quản trị</Button>
              </Link>
            )}
          </div>
        </TabsContent>
        <TabsContent value="package">
          {orders.length > 0 ? (
            <div>
              <Table>
                <TableCaption>Danh sách các đơn hàng đã đặt</TableCaption>
                <TableHeader className="hidden md:block">
                  <TableRow>
                    <TableHead className="w-[100px]">
                      Thông tin sản phẩm
                    </TableHead>
                    <TableHead className="w-[400px]">
                      Mức giá (Nhân dân tệ)
                    </TableHead>
                    <TableHead className="w-[200px]">
                      Thông tin người nhận
                    </TableHead>
                    <TableHead className="text-right">
                      Trạng thái đơn hàng
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order: Order, index) => (
                    <TableRow className="h-[130px]">
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
                        <p>Tên nhận: {order.owener?.username}</p>
                        <p>Số điện thoại: {order.phone}</p>
                        <p>Địa chỉ: {order.address}</p>
                      </TableCell>
                      <TableCell className="text-right">
                        {order.status}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div> Chưa có đơn hàng nào</div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default User;
