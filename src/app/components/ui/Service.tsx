import React from "react";
import Image from "next/image";

const Service = () => {
  return (
    <section id="service" className="w-full bg-gray-50">
      <div className="px-20 pt-10 mt-10 ">
        <div className="flex justify-center items-center flex-col">
          <p className="text-xl font-bold">
            Tại sao cần đặt từ Trung Quốc về chứ không mua ở Việt Nam?
          </p>

          <div className="text-sm mt-2 text-left">
            <p>
              1. Giá cả: Giá cả ở Trung Quốc thường rẻ hơn so với ở Việt Nam{" "}
              <span className="bg-amber-400">từ 30% đến 50%.</span>
            </p>
            <br />
            <p>
              2. Đa dạng: Có rất nhiều mặt hàng ở Trung Quốc mà ở Việt Nam không
              có.
            </p>
            <br />
            <p>
              3. Chất lượng: Nếu bạn biết cách chọn hàng thì chất lượng hàng hóa
              ở Trung Quốc cũng rất tốt.
            </p>
            <br />
            <p className="text-red-500">
              Lưu ý: Do hàng được order từ trung quốc về nên thời gian nhận hàng
              có thể tầm 1 tuần
            </p>
            <br />
            <p className="bg-amber-300 text-2xl max-w-[700px] p-2">
              Mua hàng ở Trung Quốc về Việt Nam chỉ có thể thanh toán trước chứ
              không được thanh toán khi nhận hàng.
            </p>
          </div>
          <div className=" mt-10">
            <p className="text-2xl font-bold text-red-600 text-center">
              <i>So Sánh Nhanh</i>
            </p>
            <div className="flex justify-center  gap-20 my-10">
              <div className="flex">
                <Image
                  src="/compare-price/shopee.png"
                  width={200}
                  height={600}
                  alt="compare shopee"
                />
                <Image
                  src="/compare-price/taobao.png"
                  width={200}
                  height={600}
                  alt="compare shopee"
                />
              </div>
              <div className="w-96">
                <h3 className="text-2xl font-medium mb-5">
                  Kết quả so sánh nhanh
                </h3>
                <p className="text-xl">
                  Ảnh 1: là ảnh giá sản phẩm trên shopee
                </p>
                <p className="ml-5">
                  Giá bán{" "}
                  <span className="bg-amber-300 px-1">tận 1tr3-1tr5</span> cho
                  một sản phẩm mình rất quan tâm
                </p>
                <p className="text-xl">
                  Ảnh 2: là ảnh giá sản phẩm trên sàn trung quốc
                </p>
                <p className="ml-5">
                  Giá bán chính hãng tại sàn là 228 tệ, nếu có dịp giảm giá thì
                  còn rẻ hơn, như ở ảnh 2 thì giá loanh quang tầm 700-800k, các
                  bạn sẽ tiết kiệm hơn rất nhiều
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-10">
            <p className="text-2xl font-bold text-orange-600 text-center">
              <i>Phí order là bao nhiêu?</i>
            </p>
            <div className="flex justify-center gap-20 my-10 bg-gray-200 w-full">
              <div className="w-[800px]">
                <h3 className="text-xl font-medium mb-5">
                  Tùy thuộc vào giá trị đơn hàng, giá tệ quy đổi, ... Nên các
                  bạn cần nhắn tin trao đổi với mình để biết mức phí
                </h3>
                <h3 className="text-xl font-medium mb-5">
                  Đảm bảo mức phí dễ chịu nhất cho mọi người
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[50px] mt-15 py-20">
          <div className="flex flex-col justify-center items-center  border-2 border-gray-300 rounded-lg p-5 gap-2  py-15 min-h-[700px]">
            <p className="text-3xl text-red-600 mb-10">Order sáo dizi</p>
            <Image
              className="object-cover"
              alt=""
              src={"/order_dizi.jpg"}
              width={400}
              height={300}
            />
            <div className="w-lg">
              <p className="w-[500px] text-md text-left px-10">
                Bản thân mình là người thích chơi sáo dizi của Trung Quốc vì
                chất âm và nhạc cổ phong của nước bạn, mình có thể đặt được
                nhũng cây sáo yêu thích của mình trực tiếp với giá cả dễ chịu
                hơn nên mình cũng sẵn sàng hỗ trợ các bạn với mức phí hợp lý
                nhất.
              </p>
            </div>
            <div className="mt-10">
              <p className="text-xl text-yellow-600 w-[400px]">
                Mức phí: Tùy giá trị sáo, liên hệ để được báo giá cụ thể
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  border-2 border-gray-300 rounded-lg p-5 gap-2  py-15 min-h-[700px]">
            <p className="text-3xl text-red-600 mb-10">Order TaoBao</p>
            <Image
              className="object-cover"
              alt=""
              src={"/order_cuongluc.jpg"}
              width={400}
              height={300}
            />
            <div className="w-lg">
              <p className="w-[500px] text-md text-left px-10">
                Để đón đầu xu hướng thì các sản phẩm tại TaoBao luôn được cập
                nhật mẫu mã mới, giá cả rẻ hơn và nhiều mẫu mã hơn, các bạn có
                nhu cầu order các sản phẩm đến từ TaoBao có thể liên hệ với mình
                để được hỗ trợ. Mình có thể order các sản phẩm như: quần áo,
                giày dép, phụ kiện thời trang, đồ gia dụng, đồ điện tử, đồ chơi
                trẻ em, đồ thể thao, đồ nội thất và nhiều sản phẩm khác.
              </p>
            </div>
            <div className="mt-10">
              <p className="text-xl text-yellow-600 w-[400px]">
                Mức phí: Tùy giá trị sáo, liên hệ để được báo giá cụ thể
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
