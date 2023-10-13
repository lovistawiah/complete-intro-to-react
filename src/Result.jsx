import Pet from './Pet'
const Result = ({ pets }) => {
    return (
        <div className='search'>
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (

                pets.map(pet => (
                    <Pet animal={pet.animal}
                        id={pet.id}
                        breed={pet.breed}
                        images={pet.images}
                        key={pet.id}
                        location={`${pet.city}, ${pet.state}`}
                    />
                ))
            )
            }
        </div>
    )
}
export default Result