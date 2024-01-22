import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchIf = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // Chuyển đến trang hiển thị kết quả với truy vấn tìm kiếm
        navigate(`/result?search=${searchTerm}`);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Tìm kiếm</button>
        </form>
    );
};

export default SearchIf;





