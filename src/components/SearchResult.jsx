// ResultPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { placesToGo, ThingtodoElm } from '../data';

const ResultPage = () => {
    const { search } = useLocation();
    const searchTerm = new URLSearchParams(search).get('search');
    const [placeResults, setPlaceResults] = useState([]);
    const [activityResults, setActivityResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Thực hiện tìm kiếm trong mảng placesToGo
        const filteredPlaceResults = placesToGo.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Thực hiện tìm kiếm trong mảng otherData
        const filteredActivityResults = ThingtodoElm.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setPlaceResults(filteredPlaceResults);
        setActivityResults(filteredActivityResults);
    }, [searchTerm, navigate]);
    return (
        <>
            <section className="section ">
                <div lassName="section-center" >
                    <article className="article-container">
                        <h1 className='mt-20 text-[#4b5563] text-xl font-semibold'>Kết quả tìm kiếm cho "{searchTerm}":</h1>
                        <div>
                            <h2 className='text-lg'>Địa điểm</h2>
                            <ul className="flex flex-col items-center gap-3 mx-auto p-8">
                                {placeResults.map((result) => (
                                    <li key={result.id}>{result.name}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-lg'>Hoạt động khác</h2>
                            <ul className="flex flex-col items-center  gap-3 mx-auto p-8">
                                {activityResults.map((result) => (
                                    <li key={result.id}>{result.name}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                </div>
            </section >
        </>
    );
};

export default ResultPage;
