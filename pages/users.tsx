export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
}

function Users({ users }: { users: any }) {
  return (
    <>
      <h1>Here is a list of users:</h1>
      {users.map((user: any, index: any) => {
        return <p key={index}>{user.name}</p>;
      })}
    </>
  );
}

export default Users;
