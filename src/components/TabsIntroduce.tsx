import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";

const TabsIntroduce = () => {
  return (
    <div className="w-full px-10 md:px-20">
      <div>
        <p className="text-3xl text-red-600/85 font-bold py-5">
          Ngành hàng được quan tâm nhất
        </p>
      </div>
      <Tabs defaultValue="account">
        <div className="hidden md:block">
          <TabsList className="md:grid md:w-full grid-cols-8">
            <TabsTrigger value="clothes">Thời Trang Nữ</TabsTrigger>
            <TabsTrigger value="cosmetics">Mỹ Phẩm</TabsTrigger>
            <TabsTrigger value="homehouse">Đồ Gia Dụng</TabsTrigger>
            <TabsTrigger value="technical">Phụ Kiện Công Nghệ</TabsTrigger>
            <TabsTrigger value="shoe">Giày Dép</TabsTrigger>
            <TabsTrigger value="mom&baby">Mẹ & Bé</TabsTrigger>
            <TabsTrigger value="sports">Dụng Cụ Thể Thao</TabsTrigger>
            <TabsTrigger value="other">Ngành hàng khác</TabsTrigger>
          </TabsList>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>Chọn ngành hàng</DropdownMenuTrigger>
            <TabsList>
              <DropdownMenuContent className="text-left">
                <DropdownMenuLabel>Chọn ngành hàng</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-start">
                  <TabsTrigger value="clothes" className="w-full text-left">
                    Thời Trang Nữ
                  </TabsTrigger>
                </DropdownMenuItem>
                <DropdownMenuItem className="justify-start">
                  <TabsTrigger value="cosmetics" className="w-full text-left">
                    Mỹ Phẩm
                  </TabsTrigger>
                </DropdownMenuItem>
                <DropdownMenuItem className="justify-start">
                  <TabsTrigger value="homehouse" className="w-full text-left">
                    Đồ Gia Dụng
                  </TabsTrigger>
                </DropdownMenuItem>
                <DropdownMenuItem className="justify-start">
                  <TabsTrigger value="technical" className="w-full text-left">
                    Phụ Kiện Công Nghệ
                  </TabsTrigger>
                </DropdownMenuItem>
                <DropdownMenuItem className="justify-start">
                  <TabsTrigger value="shoe" className="w-full text-left">
                    Giày Dép
                  </TabsTrigger>
                </DropdownMenuItem>
                <DropdownMenuItem className="justify-start">
                  <TabsTrigger value="mom&baby" className="w-full text-left">
                    Mẹ & Bé
                  </TabsTrigger>
                </DropdownMenuItem>
                <DropdownMenuItem className="justify-start">
                  <TabsTrigger value="sports" className="w-full text-left">
                    Dụng Cụ Thể Thao
                  </TabsTrigger>
                </DropdownMenuItem>
                <DropdownMenuItem className="justify-start">
                  <TabsTrigger value="other" className="w-full text-left">
                    Ngành hàng khác
                  </TabsTrigger>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </TabsList>
          </DropdownMenu>
        </div>

        <TabsContent value="clothes">
          <Card>
            <CardHeader>
              <CardTitle>🧥 Thời trang nữ</CardTitle>
              <CardDescription>
                Là nơi khởi nguồn của các xu hướng thời trang mới tại châu Á.
                Phong cách đa dạng, giá thành rẻ, được giới trẻ Việt Nam săn đón
                trên các nền tảng như TikTok, Shopee, Taobao
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 py-5">
              <div className="md:flex gap-1 justify-between">
                <Image
                  src={"/tab-products/clothes.png"}
                  width={400}
                  height={100}
                  className="object-cover"
                  alt=""
                />
                <Image
                  src={"/tab-products/clothes2.png"}
                  width={400}
                  height={100}
                  className="object-cover"
                  alt=""
                />
                <Image
                  src={"/tab-products/clothes3.png"}
                  width={400}
                  height={100}
                  className="object-cover"
                  alt=""
                />
              </div>
              <div className="text-center pt-5">
                <p>
                  💃 Bắt trend cực nhanh – Giá cực chill! Khám phá các mẫu thời
                  trang nữ Trung Quốc đang làm mưa làm gió khắp TikTok. Từ công
                  sở đến đi chơi, đều có hết!
                </p>
                <div>🛍️ Mua ngay để không lỡ trend!</div>
              </div>
            </CardContent>
            <CardFooter className="mx-auto">
              <Link
                href={"https://s.taobao.com/search?page=1&q=%E5%A5%B3%E8%A3%85"}
                target="_blank"
                className="text-blue-500 hover:underline hover:cursor-pointer text-lg font-bold"
              >
                Xem thêm các sản phẩm HOT
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="shoe">
          <Card>
            <CardHeader>
              <CardTitle>👟 Giày dép Trung Quốc</CardTitle>
              <CardDescription>
                Giày dép Trung Quốc liên tục cập nhật mẫu mới, thiết kế thời
                trang, giá rẻ nên rất được ưa chuộng tại Việt Nam, đặc biệt
                trong phân khúc giày sneaker, sandal nữ và dép thời trang học
                sinh – sinh viên.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="homehouse">
          <Card>
            <CardHeader>
              <CardTitle>
                🏠 Đồ gia dụng thông minh (máy hút bụi mini, đèn cảm ứng, đồ
                bếp)
              </CardTitle>
              <CardDescription>
                Thiết kế tối giản, nhỏ gọn, giá rẻ, phù hợp với các không gian
                sống hiện đại ở Việt Nam – đặc biệt trong các căn hộ chung cư
                nhỏ.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="sports">
          <Card>
            <CardHeader>
              <CardTitle>
                🏸 Dụng cụ thể thao Trung Quốc (vợt cầu lông, bóng bàn...)
              </CardTitle>
              <CardDescription>
                Dụng cụ thể thao Trung Quốc, đặc biệt là vợt cầu lông, bóng bàn,
                đang rất được người tiêu dùng Việt ưa chuộng nhờ mẫu mã đa dạng,
                giá thành hợp lý và cải tiến kỹ thuật nhanh chóng, phù hợp cho
                cả tập luyện và thi đấu phong trào.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Tham khảo thêm các sản phẩm khác</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="cosmetics">
          <Card>
            <CardHeader>
              <CardTitle>🧴 Mỹ phẩm nội địa Trung (skincare, makeup)</CardTitle>
              <CardDescription>
                Đang dần chiếm cảm tình người dùng Việt nhờ bao bì đẹp, thành
                phần "trend" (HA, Niacinamide), giá hợp lý. Được quảng bá mạnh
                mẽ qua review TikTok, Xiaohongshu.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="technical">
          <Card>
            <CardHeader>
              <CardTitle>
                📱 Phụ kiện công nghệ (Tai nghe, ốp điện thoại, đồng hồ thông
                minh)
              </CardTitle>
              <CardDescription>
                Thiết kế hiện đại, giá rẻ hơn so với hàng Âu Mỹ nhưng vẫn đảm
                bảo tính năng, thu hút học sinh – sinh viên và người tiêu dùng
                trẻ tại Việt Nam.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="mom&baby">
          <Card>
            <CardHeader>
              <CardTitle>
                🧸 Đồ dùng mẹ & bé (đồ chơi giáo dục, bình sữa, quần áo trẻ em)
              </CardTitle>
              <CardDescription>
                Chất lượng cải thiện, mẫu mã phong phú, giá cạnh tranh giúp
                ngành hàng này ngày càng phổ biến với các gia đình trẻ Việt.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="other">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsIntroduce;
