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
        <div className='flex flex-row-reverse gap-3'>


            <a
                className="footer-link"
                href={whatsappShareLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="sr-only"> WhatsApp </span>
                <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="m15.271 13.21c.578.185 1.078.416 1.543.7l-.031-.018c.529.235.986.51 1.403.833l-.015-.011c.02.061.032.13.032.203 0 .011 0 .021-.001.032v-.001c-.015.429-.11.832-.271 1.199l.008-.021c-.231.463-.616.82-1.087 1.01l-.014.005c-.459.243-1.001.393-1.576.411h-.006c-1.1-.146-2.094-.484-2.988-.982l.043.022c-1.022-.468-1.895-1.083-2.636-1.829l-.001-.001c-.824-.857-1.579-1.795-2.248-2.794l-.047-.074c-.636-.829-1.041-1.866-1.1-2.995l-.001-.013v-.124c.032-.975.468-1.843 1.144-2.447l.003-.003c.207-.206.491-.335.805-.341h.001c.101.003.198.011.292.025l-.013-.002c.087.013.188.021.292.023h.003c.019-.002.04-.003.062-.003.13 0 .251.039.352.105l-.002-.001c.107.118.189.261.238.418l.002.008q.124.31.512 1.364c.135.314.267.701.373 1.099l.014.063c-.076.361-.268.668-.533.889l-.003.002q-.535.566-.535.72c.004.088.034.168.081.234l-.001-.001c.405.829.936 1.533 1.576 2.119l.005.005c.675.609 1.446 1.132 2.282 1.54l.059.026c.097.063.213.103.339.109h.002q.233 0 .838-.752t.804-.752zm-3.147 8.216h.022c1.357 0 2.647-.285 3.814-.799l-.061.024c2.356-.994 4.193-2.831 5.163-5.124l.024-.063c.49-1.113.775-2.411.775-3.775s-.285-2.662-.799-3.837l.024.062c-.994-2.356-2.831-4.193-5.124-5.163l-.063-.024c-1.113-.49-2.411-.775-3.775-.775s-2.662.285-3.837.799l.062-.024c-2.356.994-4.193 2.831-5.163 5.124l-.024.063c-.49 1.117-.775 2.419-.775 3.787 0 2.141.698 4.12 1.879 5.72l-.019-.026-1.225 3.613 3.752-1.194c1.49 1.01 3.327 1.612 5.305 1.612h.047zm0-21.426h.033c1.628 0 3.176.342 4.575.959l-.073-.029c2.825 1.197 5.028 3.4 6.196 6.149l.029.076c.588 1.337.93 2.896.93 4.535s-.342 3.198-.959 4.609l.029-.074c-1.197 2.825-3.4 5.028-6.149 6.196l-.076.029c-1.327.588-2.875.93-4.503.93-.011 0-.023 0-.034 0h.002c-.016 0-.034 0-.053 0-2.059 0-3.992-.541-5.664-1.488l.057.03-6.465 2.078 2.109-6.279c-1.051-1.714-1.674-3.789-1.674-6.01 0-1.646.342-3.212.959-4.631l-.029.075c1.197-2.825 3.4-5.028 6.149-6.196l.076-.029c1.327-.588 2.875-.93 4.503-.93h.033-.002z" />
                </svg>
            </a>

            <a
                className="footer-link"
                href={twitterShareLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="sr-only"> Twitter </span>

                <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            </a>
            <a
                className="footer-link"
                href={facebookShareLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="sr-only"> Facebook </span>

                <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
            </a>

            {/* Thêm các liên kết chia sẻ khác nếu cần */}
        </div>
    );
};

export default ShareButtons;
