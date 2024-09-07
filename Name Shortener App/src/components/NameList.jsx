import React, { useEffect, useState } from 'react';
import { fetchNames } from '../services/api';
import { shortenName } from '../utils/shortenName';

const highlightText = (text, highlight) => {
  if (!highlight) return text;

  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span key={index} className="underline text-red-500 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const NameList = () => {
  const [names, setNames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('alphabetical');
  const [showFullNames, setShowFullNames] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const getNames = async () => {
      const fetchedNames = await fetchNames(50);
      if (isMounted) {
        setNames(fetchedNames);
      }
    };

    getNames();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedNames = [...filteredNames].sort((a, b) => {
    if (sortOption === 'alphabetical') return a.localeCompare(b);
    if (sortOption === 'length') return a.length - b.length;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="mb-6">
        <input
          className="border-2 border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:outline-none focus:border-blue-500 transition duration-300"
          type="text"
          placeholder="Search names..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-6 flex justify-between">
        <select
          className="border-2 border-gray-300 rounded-lg p-3 w-1/2 mr-2 text-gray-700 focus:outline-none focus:border-blue-500 transition duration-300"
          onChange={e => setSortOption(e.target.value)}
          value={sortOption}
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="length">By Length</option>
        </select>

        <label className="flex items-center w-1/2 ml-2">
          <input
            type="checkbox"
            checked={showFullNames}
            onChange={() => setShowFullNames(prev => !prev)}
            className="mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400 rounded"
          />
          <span className="text-gray-700">Show Full Names</span>
        </label>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedNames.map((name, index) => (
          <li
            key={index}
            className="bg-blue-50 p-4 rounded-lg shadow hover:bg-blue-100 transition duration-300"
          >
            {showFullNames
              ? highlightText(name, searchQuery)
              : highlightText(shortenName(name, 15), searchQuery)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
