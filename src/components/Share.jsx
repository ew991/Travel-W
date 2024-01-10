import React, { useState, useEffect } from 'react';

const ShareButtons = () => {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        // Lấy URL hiện tại khi component được mount
        setCurrentUrl(window.location.href);

        // Đăng ký sự kiện để cập nhật URL khi có thay đổi trong trình duyệt
        const handleLocationChange = () => {
            setCurrentUrl(window.location.href);
        };

        window.addEventListener('popstate', handleLocationChange);

        // Hủy đăng ký sự kiện khi component unmount
        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, []); // Thêm mảng rỗng để đảm bảo useEffect chỉ chạy một lần sau khi component mount

    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    const twitterShareLink = `https://twitter.com/share?url=${encodeURIComponent(currentUrl)}&text=Check out this link!`;
    const whatsappShareLink = `whatsapp://send?text=Check out this link! ${encodeURIComponent(currentUrl)}`;

    return (
        <div>
            <a href={facebookShareLink} target="_blank" rel="noopener noreferrer">
                Share on Facebook
            </a>
            <a href={twitterShareLink} target="_blank" rel="noopener noreferrer">
                Share on Twitter
            </a>
            <a href={whatsappShareLink} target="_blank" rel="noopener noreferrer">
                Share on WhatsApp
            </a>
            {/* Thêm các liên kết chia sẻ khác nếu cần */}
        </div>
    );
};

export default ShareButtons;
