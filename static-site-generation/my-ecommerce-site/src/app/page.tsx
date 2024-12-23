"use client"

import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

interface Product {
    name: string;
    main_category: string;
    sub_category: string;
    image: string;
    link: string;
    ratings: string;
    no_of_ratings: string;
    discount_price: string;
    actual_price: string;
}

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Product[]>([]);
    const [fuse, setFuse] = useState<Fuse<Product> | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const fuseDataResponse = await fetch('./fuse-index.json');
                const fuseData: Product[] = await fuseDataResponse.json();

                const fuseInstance = new Fuse(fuseData, {
                    keys: ['name', 'main_category', 'sub_category', 'discount_price', 'actual_price'],
                    includeScore: true,
                });

                setFuse(fuseInstance);
            } catch (error) {
                console.error('Failed to load search data:', error);
            }
        };

        loadData();
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);

        if (fuse) {
            const searchResults = fuse.search(value).map((result) => result.item);
            setResults(searchResults);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Search Products</h1>
            <input
                type="text"
                placeholder="Search for products..."
                value={query}
                onChange={handleSearch}
                className="w-full border rounded p-2 mb-4"
            />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.length > 0 ? (
                    results.map((product, index) => (
                        <li key={index} className="border rounded-lg p-4 shadow-lg">
                            <a href={product.link} className="block text-blue-600 hover:underline">
                                <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
                                <h3 className="font-bold text-lg">{product.name}</h3>
                            </a>
                            <p className="text-gray-600">
                                Category: {product.main_category} / {product.sub_category}
                            </p>
                            <p className="text-gray-600">
                                Rating: {product.ratings} ({product.no_of_ratings} reviews)
                            </p>
                            <p className="text-green-600 font-bold">
                                Price: {product.discount_price}{' '}
                                <span className="line-through text-gray-400">{product.actual_price}</span>
                            </p>
                        </li>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </ul>
        </div>
    );
};

export default SearchPage;
