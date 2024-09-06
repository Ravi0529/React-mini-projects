import React, { useEffect, useState } from 'react';
import { fetchNames } from '../services/api';
import { shortenName } from '../utils/shortenName';

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
    <div className="max-w-md mx-auto p-4">
      <input
        className="border p-2 w-full mb-4"
        type="text"
        placeholder="Search names..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <select
        className="border p-2 w-full mb-4"
        onChange={e => setSortOption(e.target.value)}
        value={sortOption}
      >
        <option value="alphabetical">Alphabetical</option>
        <option value="length">By Length</option>
      </select>
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={showFullNames}
          onChange={() => setShowFullNames(prev => !prev)}
          className="mr-2"
        />
        Show Full Names
      </label>
      <ul className="list-disc pl-5">
        {sortedNames.map((name, index) => (
          <li key={index} className="mb-2">
            {showFullNames ? name : shortenName(name, 15)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
