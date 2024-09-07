import React from 'react';
import NameList from './components/NameList';

function App() {
  return (
    <div className="min-h-screen pt-5 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Name Shortener App
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Search, sort, and shorten names with ease.
        </p>
        <NameList />
      </div>
    </div>
  );
}

export default App;
