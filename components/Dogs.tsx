import React from 'react';
import { gql, useQuery } from '@apollo/client';

interface DogsProps {
  onDogSelected: any
}

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      bread
    }
  }
`;

const Dogs: React.FC<DogsProps> = ({onDogSelected}) => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>`Error ${error.message}`</p>;

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
};
export default Dogs;
