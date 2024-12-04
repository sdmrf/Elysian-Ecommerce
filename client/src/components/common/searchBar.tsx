import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center">
      <Input
        placeholder="Search for products"
        className="w-96"
      />
      <Button
        className="ml-2"
        variant="cartoon"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
