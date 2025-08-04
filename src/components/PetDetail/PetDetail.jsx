// src/components/PetDetail/PetDetail.jsx

const PetDetail = ({ selected, handleFormView, handleDeletePet }) => {
  if (!selected) {
    return (
      <div>
        <h2>No Pet Selected</h2>
        <p>Please select a pet from the list to view details.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{selected.name}</h1>
      <h2>Breed: {selected.breed}</h2>
      <h2>
        Age: {selected.age} year{selected.age > 1 ? 's' : ''} old
      </h2>
      {/* Our new button, wrapped in a div */}
      <div>
        <button onClick={() => handleFormView(selected)}>
          Edit Pet
        </button>
        <button onClick={() => handleDeletePet(selected._id)}>
          Delete Pet
        </button>
      </div>
    </div>
  );
};

export default PetDetail;
