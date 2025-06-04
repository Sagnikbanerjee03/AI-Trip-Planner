import React, { useState } from 'react';

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Australia",
  "Canada",
  "Germany",
  "France",
  "Japan",
  "Brazil",
  "Italy",
  "Singapore",
  "Switzerland",
];

function CreateTrip() {
  const [place, setPlace] = useState('');

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell Your Travel Preference</h2>
      <p className='mt-3 text-gray-500 text-xl'>
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div className='mt-20'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
          <input
            list="countries"
            placeholder="Start typing a country..."
            className="w-full p-2 border rounded"
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
              console.log(e.target.value);
            }}
          />
          <datalist id="countries">
            {countries.map((country, index) => (
              <option key={index} value={country} />
            ))}
          </datalist>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
