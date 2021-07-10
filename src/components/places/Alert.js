import React from 'react';

const data = `<a content="Mapstore.vn" href="http://Mapstore.vn" rel="noopener noreferrer" target="_blank">Mapstore.vn</a> công cụ cập nhật địa chỉ các dịch vụ và shop bán hàng trên toàn lãnh thổ Việt Nam hoàn toàn miễn phí, bạn muốn thông tin dịch vụ của mình được hiển thị lên <a content="Mapstore.vn" href="http://Mapstore.vn" rel="noopener noreferrer" target="_blank">Mapstore.vn</a> để có hàng triệu người tìm kiếm tới sản phẩm dịch vụ của bạn, vui lòng liên hệ <strong>Mr Nam <a href="tel:+84903383054">0903 383 054</a>.</strong>
<br />
<a content="Mapstore.vn" href="http://Mapstore.vn" rel="noopener noreferrer" target="_blank">Mapstore.vn</a> đang cập nhật phiên bản thử nghiệm beta chúng tôi sẽ luôn cập nhật tính năng mới, rất mong nhận được phản hồi đóng góp từ phía bạn.`

const Alert = () => {
  return (
    <>
      <div className="border-1 border-gray-200 text-base leading-7 border-solid	bg-blue-50 p-4 mt-4">
        <div dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </>
  );
};

export default Alert;