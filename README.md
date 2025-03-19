# Personal Order Service - Next.js

## Giới thiệu

Đây là một trang web cá nhân giúp khách hàng tại Việt Nam đặt hộ sản phẩm từ Trung Quốc với giá ưu đãi. Hệ thống được phát triển trên nền tảng **Next.js**, mang lại trải nghiệm nhanh chóng và mượt mà.

## Công nghệ sử dụng

- **Next.js** - React framework mạnh mẽ giúp tối ưu SEO và hiệu suất.
- **Tailwind CSS** - Hỗ trợ thiết kế UI nhanh chóng.
- **MongoDB ** - Lưu trữ dữ liệu.
- **Vercel** - Triển khai nhanh chóng và ổn định.

## Cách cài đặt và chạy dự án

### Yêu cầu

- Node.js >= 16.x
- Git

### Cài đặt

```sh
# Clone repo
git clone https://github.com/delvintrung/order_taobao_my_site.git
cd order_taobao_my_site

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Trang web sẽ chạy tại `http://localhost:3000`

## Triển khai

Có thể triển khai trên Vercel với lệnh:

```sh
vercel
```

Hoặc deploy trên server riêng với Docker:

```sh
docker build -t order_taobao_my_site .
docker run -p 3000:3000 order_taobao_my_site
```

## Liên hệ

- **Email**: trungm8fordev@gmail.comcom
- **Website**:
- **Facebook**: https://facebook.com/le.van.trung.450113

---

Cảm ơn bạn đã sử dụng dịch vụ đặt hàng của chúng tôi!
