import NewUserForm from "./new-user-form";

const NewUserPage = ({ show }) => {
  if (!show) {
    return null; 
  }

  return (
    <div>
      <h1>Création d'un nouvel utilisateur</h1>
      <NewUserForm />
    </div>
  );
};

export default NewUserPage;